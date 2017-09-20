'use strict';
const express = require('express');
const AnimalController = require('../controllers/animal');

const api = express.Router();
const md_auth=require('../middlewares/authenticated');
const md_admin=require('../middlewares/is_admin');

const multipart= require('connect-multiparty');
const md_upload= multipart({uploadDir:'./uploads/animals'});

api.get('/pruebas-animales', md_auth.ensureAuth, AnimalController.pruebas);
api.post('/animal', [md_auth.ensureAuth,md_admin.isAdmin], AnimalController.saveAnimal);
api.get('/animals',AnimalController.getAnimals);
api.get('/animal/:id',AnimalController.getAnimal);
api.put('/animal/:id',[md_auth.ensureAuth,md_admin.isAdmin],AnimalController.updateAnimal);
api.post('/upload-image-animal/:id',[md_auth.ensureAuth,md_admin.isAdmin, md_upload], AnimalController.uploadImage);
api.get('/get-image-animal/:imageFile', AnimalController.getImageFile);
api.delete('/animal/:id',[md_auth.ensureAuth,md_admin.isAdmin],AnimalController.deleteAnimal);

module.exports=api;