const {Schema, model} = require('mongoose')

const RecipeSchema = new Schema({
    name: {type: String, required: true},
    shortDesc: {type: String, required: false},
    img: {type: String, required: true},
    category: {type: String, required: true, unique: true},
    time: {type: Number, required: true},
    countDishes: {type: Number, required: true},
    description: {type: String, required: true},
    video: {type: String, required: false},
    checkbox: {type: Boolean, required: true}
})

module.exports = model('Recipe', RecipeSchema)