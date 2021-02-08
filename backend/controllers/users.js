const appUser = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getUsers = (req, res) => {

    try {
        appUser.find()
            .then(response => {
                res.status(200).json(response);
            })
            .catch(error => {
                res.status(404).json({ message: error.message });
            });

    } catch (error) {

    }
};

exports.addUser = async (req, res) => {

    try {
        let userSearch = await appUser.findOne({ email: req.body.email });
        if (userSearch) {
            res.status(400).json("User already registered.");
        } else {
            const newUser = new appUser({
                email: req.body.email,
                password: req.body.password
            });
            newUser.password = await bcrypt.hash(newUser.password, saltRounds);
            const registered = await newUser.save();
            res.json(registered);
        }
    } catch (error) {
        res.json({ message: error.message });
    }

};

exports.deleteUser = async (req, res) => {
    try {
        let id = await req.params.idUser;

        const deleted = await appUser.remove({ _id: id });
        res.json(deleted);

    } catch (error) {
        res.json({ message: error.message });
    }
    
};

exports.findUser = async (req, res) => {
    try {
        const singleUser = await appUser.findById(req.params.idUser);
        res.json(singleUser);
    } catch (error) {
        res.json({ message: error });

    }

};

exports.patchUser = async (req, res) => {
    try {
        let hash_password = await bcrypt.hash(req.body.password, saltRounds);
        const updatedUser = await appUser.updateOne(
            { _id: req.params.idUser },
            { $set: { email: req.body.email, password: hash_password } }
        );
        res.json(updatedUser);
    } catch (error) {
        res.json({ message: error });

    }
}

exports.patchUserSubscription = async (req, res) => {
    try {
        const updatedUser = await appUser.updateOne(
            { _id: req.params.idUser },
            { $set: { events: req.params.idEvent} }
        );
        res.json(updatedUser);
    } catch (error) {
        res.json({ message: error });

    }
}