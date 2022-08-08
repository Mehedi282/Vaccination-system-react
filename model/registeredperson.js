const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    age: {
        type: String,
    },
    address: {
        type: String,
    },
    gender: {
        type: String,
    },
    divition: {
        type: String,

    },

    updateAt: Date,
}, { timestamps: true })



module.exports = mongoose.model('registeredpeople', userSchema)