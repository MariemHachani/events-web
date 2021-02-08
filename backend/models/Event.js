const mongoose = require('mongoose');

const event = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title required']
    },
    description: {
        type: String,
        required: [true, 'Event description required']
    },
    location: String,
    subscriptions: {
        type: Number,
        default : 0
    },
    users: [
        mongoose.Schema.ObjectId,
    ],
});

module.exports = mongoose.model('event', event);