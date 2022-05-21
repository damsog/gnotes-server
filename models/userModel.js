const mongoose = require('mongoose');
const List = require('../models/listModel');


const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
    created_at: {
        type: Date,
        immutable: true,
        default: () => new Date()
    },
    updated_at: {
        type: Date,
        default: () => new Date()
    }
})

module.exports = mongoose.model('User', UserSchema)