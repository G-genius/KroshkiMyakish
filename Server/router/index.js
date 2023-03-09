const Router = require('express').Router
const userController = require('../controllers/user-controller')
const recipeController = require('../controllers/recipe-controller')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min:8, max:32}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)
router.get('/account', userController.getAccount)
router.post('/addRecipe', recipeController.addRecipe)
router.get('/recipes', recipeController.getRecipes)
router.get('/recipe/:id', recipeController.getRecipe)
router.get('/recipes/:category', recipeController.getRecipeByCategory)

module.exports = router