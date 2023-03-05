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
    async getRecipe() {
        return RecipeModel.findOne({_id: "6404ee0f5fc067d74622a95e"});
    }
}
module.exports = new RecipeService()