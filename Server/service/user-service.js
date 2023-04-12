const UserModel = require('../models/user-model')
const RecipeModel = require('../models/recipe-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dtos')
const RecipeDto = require('../dtos/recipe-dtos')
const ApiError = require('../exceptions/api-error')

class UserService {
    // Регистрация пользователя
    async registration(email, city, name, password, photo, about) {
        const candidate = await UserModel.findOne({email}) // поиск по почте
        if (candidate) {
            throw  ApiError.BadRequest(`Пользователь с данной почтой ${email} уже существует`)
        }
        // Создание ссылки для подтверждения на почту
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        // Добавление пользователя в базу данных
        const user = await UserModel.create({email, city, password: hashPassword, activationLink, photo, about, name})

        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`) // Отправка письма на почту

        const userDto = new UserDto(user)
        // Сохранения токена авторизации
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }

    // Активации почты
    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if (!user) {
            throw ApiError.BadRequest('Некорректная ссылка активации')
        }
        user.isActivated = true
        await user.save()
    }

    // Авторизация
    async login(email, password) {
        const user = await UserModel.findOne({email})
        if (!user) {
            throw ApiError.BadRequest("Пользователь с такой почтой не найден")
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.BadRequest("Неверный пароль")
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }

    // Выход из аккаунта
    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    // Функция, которая будет срабатывать при изменении сайта
    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnathorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnathorizedError();
        }
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async getAllUsers() {
        const users = await UserModel.find()
        return users
    }
}

module.exports = new UserService()