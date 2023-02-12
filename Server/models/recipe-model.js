const {Schema, model} = require('mongoose');

const RecipeSchema = new Schema({
    name: {type: String, required: true},
    desc: {type: String, required: true}
})

module.exports = model('Recipe', RecipeSchema);