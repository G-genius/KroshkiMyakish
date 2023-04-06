const RecipeModel = require('../models/recipe-model')
const RecipeDto = require('../dtos/recipe-dtos')
const UserModel = require("../models/user-model");

class RecipeService {
    // Создание рецепта
    async addRecipe(name, shortDesc, mainPhoto, category, time, desc, video, count, author) {
        const recipe = await RecipeModel.create({name, shortDesc, mainPhoto, category, time, desc, video, count, author})
        const recipeDto = new RecipeDto(recipe)
        return {recipe: recipeDto}
    }
    // Получение всех рецептов для главной страницы
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
    // получение рецепта по определенной категории
    async getRecipeByCategory(category) {
        return RecipeModel.find({category: category})
    }
}
module.exports = new RecipeService()