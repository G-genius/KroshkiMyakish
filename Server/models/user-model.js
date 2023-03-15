const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    city: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    photo: {type: String, required: false},
    about: {type: String, required: false}
})

module.exports = model('User', UserSchema);