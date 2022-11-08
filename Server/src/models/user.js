const mongoose = require('mongoose')
const { schemaOptions } = require('./modelOptions')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    avatar: {
        type: String,
        require: false,
        unique: false
    },
    country: {
        type: String,
        require: false,
        unique: false
    },
    city: {
        type: String,
        require: false,
        unique: false
    },
    interests: {
        type: String,
        require: false,
        unique: false
    },
    about: {
        type: String,
        require: false,
        unique: false
    },
    favourite_food: {
        type: String,
        require: false,
        unique: false
    },
}, schemaOptions)

module.exports = mongoose.model('User', userSchema)