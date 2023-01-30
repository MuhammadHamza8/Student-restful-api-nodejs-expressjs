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
    course: {
        required: true,
        type: String
    }
 
})

module.exports = mongoose.model('Students', dataSchema );