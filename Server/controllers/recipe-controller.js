const recipeService = require('../service/recipe-service')
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/api-error')

class RecipeController {
    async addRecipe(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {
                name,
                shortDesc,
                img,
                category,
                time,
                countDishes,
                description,
                video,
                checkbox
            } = req.body
            const recipeData = await recipeService.addRecipe(name, shortDesc,img,category,time,countDishes,description,video,checkbox)
            return res.json(recipeData)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new RecipeController()