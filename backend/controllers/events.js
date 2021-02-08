const event = require('../models/Event');


exports.getEvents = (req, res) => {

    try {
        event.find()
            .then(response => {
                res.status(200).json(response);
            })
            .catch(error => {
                res.status(404).json({ message: error.message });
            });

    } catch (error) {

    }
};

exports.addEvent = async (req, res) => {

    try {
        let EventSearch = await event.findOne({ title: req.body.title });
        if (EventSearch) {
            res.status(400).json("Event already registered.");
        } else {
            const newEvent = new event({
                title: req.body.title,
                description: req.body.description,
                location: req.body.location,
            });
            const registered = await newEvent.save();
            res.json(registered);
        }
    } catch (error) {
        res.json({ message: error.message });
    }

};

exports.deleteEvent = async (req, res) => {
    try {
        let id = await req.params.idEvent;

        const deleted = await event.remove({ _id: id });
        res.json(deleted);

    } catch (error) {
        res.json({ message: error.message });
    }

};

exports.findEvent = async (req, res) => {
    try {
        const singleEvent = await event.findById(req.params.idEvent);
        res.json(singleEvent);
    } catch (error) {
        res.json({ message: error });

    }

};

exports.patchEvent = async (req, res) => {
    try {
        const updatedEvent = await event.updateOne(
            { _id: req.params.idEvent },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    location: req.body.location,
                }
            }
        );
        res.json(updatedEvent);
    } catch (error) {
        res.json({ message: error });

    }
};

exports.patchEventSubscriptions = async (req, res) => {
    try {
        const updatedEvent = await event.updateOne(
            { _id: req.params.idEvent },
            {
                $set: {
                    subscriptions: req.body.subscriptions,
                    users: req.body.users,
                }
            }
        );
        res.json(updatedEvent);
    } catch (error) {
        res.json({ message: error });

    }
}