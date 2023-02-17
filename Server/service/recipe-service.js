const RecipeModel = require('../models/recipe-model')
const RecipeDto = require('../dtos/recipe-dtos')
const tokenService = require("./token-service");
const UserModel = require("../models/user-model");

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
}
module.exports = new RecipeService()