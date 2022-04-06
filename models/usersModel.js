const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    username: String,
    password: String,
    created_at: Date,
    updated_at: Date
})

module.exports = mongoose.model('User', userSchema)