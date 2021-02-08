const mongoose = require('mongoose');

const appUser = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'User e-mail required']
    },
    password: {
        type: String,
        required: [true, 'User password required']
    },
    role: {
        type: String,
        default: 'ROLE_USER'
    },
    events: [
       mongoose.Schema.ObjectId,
    ],
});

module.exports = mongoose.model('users', appUser);