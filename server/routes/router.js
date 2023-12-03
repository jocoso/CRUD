const express = require('express');
const route = express.Router();

const services = require('../services/render');

route.get('/', services.homeRoutes);
route.get('/add-pet', services.addPet);
route.get('/update-pet', services.updatePet);

module.exports = route