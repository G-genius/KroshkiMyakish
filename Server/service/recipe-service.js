const RecipeModel = require('../models/recipe-model')
const RecipeDto = require('../dtos/recipe-dtos')
const UserModel = require("../models/user-model");

class RecipeService {
    async addRecipe(name, shortDesc, mainPhoto, category, time, desc, video, count, author) {
        const recipe = await RecipeModel.create({name, shortDesc, mainPhoto, category, time, desc, video, count, author})
        const recipeDto = new RecipeDto(recipe)
        return {recipe: recipeDto}
    }
    async getAllRecipes(term) {
        if (term) {
            return RecipeModel.find().find({$text: {$search: term}});
        }
        else {
            return RecipeModel.find();
        }

    }
    async getRecipe(id) {
        return RecipeModel.findOne({_id: id});
    }
    async getRecipeByCategory(category) {
        return RecipeModel.find({category: category})
    }
}
module.exports = new RecipeService()