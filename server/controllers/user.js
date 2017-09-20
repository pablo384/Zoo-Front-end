'use strict';
//modulos
const bcrypt = require('bcrypt-nodejs');
const fs = require('fs');
const path = require('path');

//modelos
const User = require('../models/user');

//servicio jwt
const jwt = require('../services/jwt');

//acciones

function pruebas(req, res) {
    res.status(200).send({
        message: 'probando el controlador de usuarios y la accion pruebas',
        user:req.user
    })
}

function saveUser(req, res) {
    //creando objeto de usuario
    var user = new User();

    //recoger parametros de la peticion
    var params = req.body;


    if (params.password && params.name && params.surname && params.email) {

        //asignar valores al obj usuario
        user.name = params.name;
        user.surname = params.surname;
        user.email = params.email;
        user.role = 'ROLE_USER';
        user.image = null;
        User.findOne({email: user.email.toLowerCase()}, (err, issetUser) => {
            if (err) {
                res.status(500).send({message: 'error al comprobar el usuario'});
            } else {
                if (!issetUser) {
                    //cifrado de contrasena
                    bcrypt.hash(params.password, null, null, function (err, hash) {
                        user.password = hash;
                        //guardar usuario en base de datos
                        user.save((err, userStored) => {
                            if (err) {
                                res.status(500).send({message: 'error al guardar el usuario'});
                            } else {
                                if (!userStored) {
                                    res.status(404).send({message: 'no se ha regisrado el usuario'});
                                } else {
                                    res.status(200).send({user: userStored});
                                }
                            }
                        })
                    })
                }else {
                    res.status(200).send({message: 'El usuario no puede registrarse porque ya existe'});
                }
            }
        });


    } else {
        res.status(200).send({message: 'Introduce los datos correctamente para poder registrar al usuario'});
    }
}

function login(req, res) {
    const params=req.body;
    const email=params.email;
    const password=params.password;

    User.findOne({email: email.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500).send({message: 'error al comprobar el usuario'});
        } else {
            if (user) {
                bcrypt.compare(password, user.password,(err, check)=>{
                    if (check){
                        //comprobar y generar token
                        if (params.gettoken){
                            //devolver token
                            res.status(200).send({token:jwt.createToken(user)})

                        }else {
                            res.status(200).send({user});
                        }

                    }else {
                        res.status(404).send({message: 'El usuario no ha podido loguearse correctamente'});
                    }
                });

            }else {
                res.status(404).send({message: 'El usuario no ha podido loguearse'});
            }
        }

})}

function updateUser(req, res) {

    const userId= req.params.id;
    const update=req.body;
    delete update.password;
    if (userId != req.user.sub){
        return res.status(500).send({message:'no tienes permiso para actualizar el usuario'})
    }
    User.findByIdAndUpdate(userId,update,{new:true}, (err, userUpdated)=>{
       if(err){
           res.status(500).send({message:'Error al actualizar el usuario'})
       }else {
           if (!userUpdated){
               res.status(404).send({message:'no se a podido actualizar el usuario'})
           }else {
               res.status(200).send({user:userUpdated});
           }

       }
    });


}

function uploadImage(req, res) {
    const userId=req.params.id;
    var file_name='No subido...';


    if (req.files.image){
        var file_path=req.files.image.path;
        var file_split=file_path.split('/');
        file_name=file_split[2];
        var ext_split=file_name.split('.');
        var file_ext=ext_split[1];
        if (file_ext == 'png' || file_ext == 'jpg' ||file_ext == 'jpeg' ||file_ext == 'gif'){

            if (userId != req.user.sub){
                return res.status(500).send({message:'no tienes permiso para actualizar el usuario'})
            }

            User.findByIdAndUpdate(userId,{image:file_name},{new:true}, (err, userUpdated)=>{
                if(err){
                    res.status(500).send({message:'Error al actualizar el usuario'})
                }else {
                    if (!userUpdated){
                        res.status(404).send({message:'no se a podido actualizar el usuario'})
                    }else {
                        res.status(200).send({user:userUpdated, image:file_name});
                    }

                }
            });

        }else {
            fs.unlink(file_path, (err)=>{
                if(err){
                    res.status(200).send({message:'Extension no validad y fichero no borrado' });
                }else {
                    res.status(200).send({message:'Extension no validad' });
                }
            });

        }

        // res.status(200).send({
        //     file_path:file_path,
        //     file_split:file_split,
        //     file_name:file_name,
        //     file_ext:file_ext
        // });
    }else {
        res.status(200).send({message:'no se han subido archivos' });
    }
}

function getImageFile(req, res) {
    var imageFile = req.params.imageFile;
    var path_File='./uploads/users/'+imageFile;
    fs.exists(path_File, function (exists) {
        if (exists){
            res.sendFile(path.resolve(path_File));
        }else {
            res.status(404).send({message:'la imagen no existe' });
        }
    });

}

function getKeepers(req, res) {
    User.find({role:'ROLE_ADMIN'}).exec((err,users)=>{
        if (err){
            res.status(500).send({message:'Error en la peticion' });
        }else {
            if (!users){
                res.status(404).send({message:'No hay cuidadores' });
            }else {
                res.status(200).send({users});
            }
        }

    });

}

module.exports = {
    pruebas,
    saveUser,
    login,
    updateUser,
    uploadImage,
    getImageFile,
    getKeepers
};