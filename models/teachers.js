const mongoose = require('mongoose');

const dataSchema  = new mongoose.Schema({
    name: {
        required: true,
        unique:true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },

    adress: {
        required: true,
        type: String
    },
    subject: {
        required: true,
        type: String
    }
 
})

module.exports = mongoose.model('Teachers', dataSchema );