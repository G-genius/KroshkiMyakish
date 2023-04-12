const Router = require('express').Router
const userController = require('../controllers/user-controller')
const recipeController = require('../controllers/recipe-controller')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')

// Регистраиця
router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min:8, max:32}),
    userController.registration)
router.post('/login', userController.login) // Логин
router.post('/logout', userController.logout) // Выход из аккаунта
router.get('/activate/:link', userController.activate) // Активация по почте
router.get('/refresh', userController.refresh) // Обновление информация при изменении страницы
router.get('/users', authMiddleware, userController.getUsers) // Получение пользователей
router.get('/account', userController.getAccount) // Личный кабинет
router.post('/addRecipe', recipeController.addRecipe) // Добавления рецепта
router.get('/recipes', recipeController.getRecipes) // Получение всех рецептов
// Получение рецептов по id и категориям
router.get('/recipe/:id', recipeController.getRecipe)
router.get('/recipes/:category', recipeController.getRecipeByCategory)

module.exports = router