const {Schema, model} = require('mongoose');

const RecipeSchema = new Schema({
    name: {type: String, required: true,},
    shortDesc: {type: String, required: true},
    mainPhoto: {type: String, required: true},
    category: {type: String, required: true},
    time: {type: Number, required: true},
    desc: {type: String, required: true},
    video: {type: String, required: false},
    count: {type: Number, required: true}
})

module.exports = model('Recipe', RecipeSchema);