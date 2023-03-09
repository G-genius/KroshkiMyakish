const RecipeModel = require('../models/recipe-model')
const RecipeDto = require('../dtos/recipe-dtos')

class RecipeService {
    async addRecipe(name, shortDesc, mainPhoto, category, time, desc, video, count) {
        const recipe = await RecipeModel.create({name, shortDesc, mainPhoto, category, time, desc, video, count})
        const recipeDto = new RecipeDto(recipe)
        return {recipe: recipeDto}
    }
    async getAllRecipes() {
        return RecipeModel.find();
    }
    async getRecipe(id) {
        return RecipeModel.findOne({_id: id});
    }
}
module.exports = new RecipeService()