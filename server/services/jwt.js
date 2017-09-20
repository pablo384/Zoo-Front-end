'use strict';
const jwt=require('jwt-simple');
const moment=require('moment');
const secret='clave_secreta_del_curso_de_angular';

exports.createToken=function (user) {
    //obj para generar token
  const payload={
      sub:user._id,
      name:user.name,
      surname:user.surname,
      email:user.email,
      role:user.role,
      image:user.image,
      iat:moment().unix(),
      exp:moment().add(30,'days').unix()
  };
  return jwt.encode(payload, secret);
};