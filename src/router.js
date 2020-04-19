const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');


const OngController = require('./constrollers/OngController');
const IncidentController = require('./constrollers/IncidentController');
const ProfileConstroller = require('./constrollers/ProfileController');
const SessionsControle = require('./constrollers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionsControle.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileConstroller.index);

routes.post('/incidents', IncidentController.create);

routes.get('/incidents', IncidentController.index);


routes.delete('/incidents/:id',IncidentController.delete);


module.exports = routes;
