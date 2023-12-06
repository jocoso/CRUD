var Petdb = require('../models/model');

// New Pet
exports.create = (req, res) => {
    // request validation
    if(!req.body) {
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    // new Pet
    const pet = new Petdb({
        name: req.body.name,
        img: req.body.img,
        specie: req.body.specie,
        friendly: req.body.friendly
    });

    // save in database

    pet
        .save(pet)
        .then(data=> {
            //res.send(data);
        
            res.redirect('/add-pet');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Something happened. We Apologize"
            });
        });

}

// Get Pets
exports.find = (req, res) => {

    if(req.query.id) {
        const id= req.query.id;

        Petdb.findById(id)
            .then(data => {
                if(!data) {
                    res.status(404).send({ message: "Pet not found"});
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving pet"});
            })
    } else {

        Petdb.find()
        .then(pet => {
            res.send(pet);
        })
        .catch(err=> {
            res.status(500).send({ message: err.message || "Error Retriving Pet"});
        })

    }
}

// Update Pet
exports.update = (req, res) => {
    if(!req.body) {
        return res
            .status(400)
            .send("Body musn't be empty");
    }

    const id = req.params.id;

    Petdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data) {
                res.status(404).send({message: `Cannot Update pet with ${id}`});
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error Updating the pet information"});
        })
}

// Delete Pet
exports.delete = (req, res) => {
    const id = req.params.id;

    Petdb.findByIdAndDelete(id)
        .then(data => {
            if(!data) {
                res.status(404).send({ message: `Cannot Delete Pet id: ${id}`})
            } else {
                res.send({
                    message: "Pet was deleted successfully! ):"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Couldn't delete pet"
            });
        });
}