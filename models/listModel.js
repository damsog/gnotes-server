const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : String,
    created_at: {
        type: Date,
        default: () => new Date()
    },
    updated_at: {
        type: Date,
        default: () => new Date()
    }
})

module.exports = mongoose.model('list', listSchema);