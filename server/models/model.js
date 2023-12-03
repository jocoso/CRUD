const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    specie: {
        type: String,
        required: true
    },
    friendly: Boolean
})

const Petdb = mongoose.model('petdb', schema);

module.exports = Petdb;