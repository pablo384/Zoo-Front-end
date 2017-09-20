'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const secret='clave_secreta_del_curso_de_angular';

exports.ensureAuth=function (req, res, next) {
    if (!req.headers.authorization){
        return res.status(403).send({message:'la peticion no tiene la cabecera de authentificacion'})
    }

    const token = req.headers.authorization.replace(/['"]+/g,'');

    try {
        var payload = jwt.decode(token, secret);

        if (payload.exp<=moment().unix()){
            return res.status(401).send({
                message:'el token ha expirado'
            });
        }
    }catch (ex){
        return res.status(404).send({
            message:'el token no es valido'
        });
    }

    req.user=payload;
    next();
};