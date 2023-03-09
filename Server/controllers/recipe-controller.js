const recipeService = require('../service/recipe-service')
const userService = require("../service/user-service");

class RecipeController {
    async addRecipe(req, res, next) {
        try {
            const {name, shortDesc, mainPhoto, category, time, desc, video, count} = req.body
            const recipeData = await recipeService.addRecipe(name, shortDesc, mainPhoto, category, time, desc, video, count)
            return res.json(recipeData)
        } catch (e) {
            next(e)
        }
    }
    async getRecipes(req, res, next) {
        try {
            const recipes = await recipeService.getAllRecipes()
            return res.json(recipes)
        } catch (e) {
            next(e)
        }
    }

    async getRecipe(req, res, next) {
        try {
            const id = req.params.id
            const recipe = await recipeService.getRecipe(id)
            return res.json(recipe)
        } catch (e) {
            next(e)
        }
    }

    async getRecipeByCategory(req, res, next) {
        try {
            const category = req.params.category
            const recipes = await recipeService.getRecipeByCategory(category)
            return res.json(recipes)
        } catch (e) {
            next(e)
        }
    }
}
module.exports = new RecipeController()