const recipeService = require('../service/recipe-service')

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
}
module.exports = new RecipeController()