'use strict';
const express = require('express');
const UserController = require('../controllers/user');

const api = express.Router();
const md_auth=require('../middlewares/authenticated');

const multipart= require('connect-multiparty');
const md_upload= multipart({uploadDir:'./uploads/users'});

api.get('/pruebas-del-controlador', md_auth.ensureAuth, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.login);
api.put('/update-user/:id',md_auth.ensureAuth, UserController.updateUser);
api.post('/upload-image-user/:id',[md_auth.ensureAuth, md_upload], UserController.uploadImage);
api.get('/get-image-file/:imageFile', UserController.getImageFile);
api.get('/keepers', UserController.getKeepers);

module.exports=api;