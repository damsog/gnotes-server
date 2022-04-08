const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    lists: [mongoose.Schema.ObjectId],
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

module.exports = mongoose.model('users', userSchema)