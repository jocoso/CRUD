exports.homeRoutes = (req, res) => {
    res.render("index");
}

exports.addPet = (req, res) => {
    res.render("add_pet");
};

exports.updatePet = (req, res) => {
    res.render("update_pet");
};