const mongoose = require('mongoose');

const objectsSchema = new mongoose.Schema({
    title : {
        type : 'string',
        required : true
    },
    description : String,
    information : String,
    filters: {},
    attachments: {},
    created_at: {
        type: Date,
        immutable: true,
        default: () => new Date()
    },
    updated_at: {
        type: Date,
        default: () => new Date()
    },
    listId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('Object', objectsSchema);