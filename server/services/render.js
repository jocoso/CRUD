const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Get all pets
    axios.get("http://localhost:3000/api/pets")
    .then(function(response) {
        res.render("index", { pets: response.data} );
    })
    .catch(err => {
        res.send(err);
    })
    
}

exports.add_pet = (req, res) => {
    res.render("add_pet");
};

exports.update_pet = (req, res) => {
    axios.get('http://localhost:3000/api/pets', { params: { id: req.query.id }})
        .then(function(petdata) {
            res.render("update_pet", { pet: petdata.data })
        })
        .catch(err => {
            res.send(err);
        })
};