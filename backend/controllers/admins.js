const appUser = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getAdmins = (req, res) => {

    try {
        appUser.find({ role: 'ROLE_ADMIN' })
            .then(response => {
                res.status(200).json(response);
            })
            .catch(error => {
                res.status(404).json({ message: error.message });
            });

    } catch (error) {

    }
};

exports.addAdmin = async (req, res) => {

    try {
        let AdminSearch = await appUser.findOne({ email: req.body.email });
        if (AdminSearch) {
            res.status(400).json("Admin already registered.");
        } else {
            const newUser = new appUser({
                email: req.body.email,
                password: req.body.password,
                role: "ROLE_ADMIN",
            });
            newUser.password = await bcrypt.hash(newUser.password, saltRounds);
            const registered = await newUser.save();
            res.json(registered);
        }
    } catch (error) {
        res.json({ message: error.message });
    }

};



