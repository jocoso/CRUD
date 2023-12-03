const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controllers = require('../controllers/controller');

route.get('/', services.homeRoutes);
route.get('/add-pet', services.add_pet);
route.get('/update-pet', services.update_pet);


// API
route.post('/api/pets', controllers.create);
route.get('/api/pets', controllers.find);
route.put('/api/pets/:id', controllers.update);
route.post('/api/pets/:id', controllers.delete);

module.exports = route