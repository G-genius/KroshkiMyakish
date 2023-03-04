const RecipeModel = require('../models/recipe-model')
const RecipeDto = require('../dtos/recipe-dtos')

class RecipeService {
    async addRecipe(name, shortDesc, mainPhoto, category, time, desc, video, count) {
        const recipe = await RecipeModel.create({name, shortDesc, mainPhoto, category, time, desc, video, count})
        const recipeDto = new RecipeDto(recipe)
        return {recipe: recipeDto}
    }
    async getAllRecipes() {
        const recipes = await RecipeModel.find()
        return recipes
    }
    async getRecipe() {
        const recipes = await RecipeModel.findOne({_id: "63efe20ef33641c530e2c55c"})
        return recipes
    }
}
module.exports = new RecipeService()