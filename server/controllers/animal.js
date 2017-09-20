'use strict';
'use strict';
//modulos
const fs = require('fs');
const path = require('path');

//modelos
const User = require('../models/user');
const Animal = require('../models/animal');

//acciones

function pruebas(req, res) {
    res.status(200).send({
        message: 'probando el controlador de ANIMALES y la accion pruebas',
        user:req.user
    })
}

function saveAnimal(req, res) {

    const animal = new Animal();
    const params= req.body;

    if (params.name){
        animal.name= params.name;
        animal.description= params.description;
        animal.year= params.year;
        animal.image= null;
        animal.user= req.user.sub;

        animal.save((err, animalStored)=>{
           if (err){
               res.status(500).send({message:'error en el servidor'});
           }else{
               if (!animalStored){
                   res.status(404).send({message:'no se ha guardado el animal'});
               }else {
                   res.status(200).send({animal:animalStored});
               }
           }
        });
    }else {
        res.status(200).send({message:'el nombre del animal es obligatorio'});
    }
}

function getAnimals(req, res) {
    Animal.find({}).populate({path:'user'}).exec((err, animals)=> {
        if (err){
            res.status(500).send({ message: 'Error en la peticion' });
        }else {
            if(!animals){
                res.status(404).send({ message: 'No hay animales' });
            }else {
                res.status(200).send({ animals });
            }
        }
    })
}

function getAnimal(req, res) {
    const animalId=req.params.id;
    Animal.findById(animalId).populate('user').exec((err,animal)=>{
        if (err){
            res.status(500).send({ message: 'Error en la peticion' });
        }else {
            if(!animal){
                res.status(404).send({ message: 'El animal no existe' });
            }else {
                res.status(200).send({ animal });
            }
        }
    });
}

function updateAnimal(req, res) {
    const animalId=req.params.id;
    const update=req.body;

    Animal.findByIdAndUpdate(animalId, update,{new:true},(err,animal)=>{
        if (err){
            res.status(500).send({ message: 'Error en la peticion' });
        }else {
            if(!animal){
                res.status(404).send({ message: 'El animal no existe' });
            }else {
                res.status(200).send({ animal });
            }
        }
    });
}

function uploadImage(req, res) {
    const animalId=req.params.id;
    var file_name='No subido...';


    if (req.files.image){
        var file_path=req.files.image.path;
        var file_split=file_path.split('/');
        file_name=file_split[2];
        var ext_split=file_name.split('.');
        var file_ext=ext_split[1];
        if (file_ext == 'png' || file_ext == 'jpg' ||file_ext == 'jpeg' ||file_ext == 'gif'){

            Animal.findByIdAndUpdate(animalId,{image:file_name},{new:true}, (err, animalUpdated)=>{
                if(err){
                    res.status(500).send({message:'Error al actualizar el animal'})
                }else {
                    if (!animalUpdated){
                        res.status(404).send({message:'no se a podido actualizar el animal'})
                    }else {
                        res.status(200).send({user:animalUpdated, image:file_name});
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
    var path_File='./uploads/animals/'+imageFile;
    fs.exists(path_File, function (exists) {
        if (exists){
            res.sendFile(path.resolve(path_File));
        }else {
            res.status(404).send({message:'la imagen no existe' });
        }
    });

}

function deleteAnimal(req, res) {
    const animalId=req.params.id;
    Animal.findByIdAndRemove(animalId,(err, animalRemove)=>{
        if (err){
            res.status(500).send({ message: 'Error en la peticion' });
        }else {
            if(!animalRemove){
                res.status(404).send({ message: 'NO se ha podido borrar el animal o no Existe' });
            }else {
                res.status(200).send({animal:animalRemove });
            }
        }
    });
}

module.exports = {
    pruebas,
    saveAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
    uploadImage,
    getImageFile,
    deleteAnimal
};