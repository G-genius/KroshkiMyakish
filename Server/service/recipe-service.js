const RecipeModel = require('../models/recipe-model')
const UserDto = require('../dtos/user-dtos')
const ApiError = require('../exceptions/api-error')
const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");

class RecipeService {
    async addRecipe(name, shortDesc, img, category, time, countDishes, description, video, checkbox) {
        const recipe = await RecipeModel.create({name, shortDesc, img, category, time, countDishes, description, video, checkbox})


        return (recipe)
    }
}

module.exports = new RecipeService()