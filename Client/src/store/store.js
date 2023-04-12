import AuthService from "../services/AuthService";
import {useNavigate} from "react-router-dom";
import RecipeService from "../services/RecipeService";

export default class Store {
    isLoading = false

    // constructor() {
    //     makeAutoObservable()
    // }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }

    setRecipe(recipe) {
        this.recipe = recipe
    }

    setLoading(bool) {
        this.isLoading = bool
    }


    async Close() {
        let modelReg = document.getElementById("regModal")
        let modelLog = document.getElementById("logModal")
        modelReg.style.display = "none";
        modelLog.style.display = "none";
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            // window.location.reload()
            await this.Close()
        } catch (e) {
            const errorMsg = document.getElementById("error2")
            const errorMsg3 = document.getElementById("error3")
            if (e.response?.data?.message === `Пользователь с такой почтой не найден`) {
                errorMsg.style.display = "block"
                errorMsg3.style.display = "none"
            }
            else if (e.response?.data?.message === `Неверный пароль`) {
                errorMsg.style.display = "none"
                errorMsg3.style.display = "block"
            }
        }
    }

    async registration(email, city, password, photo, about, name) {
        try {
            const response = await AuthService.registration(email, city, password, photo, about, name)
            //console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            await this.Close()
        } catch (e) {
            console.log(e.response?.data?.message)
            const errorMsg_email = document.getElementById("error_email")
            const errorMsg = document.getElementById("error")
            const errorPass = document.getElementById("error_pass")
            if (e.response?.data?.message === `Пользователь с данной почтой ${email} уже существует`) {
                errorMsg.style.display = "none"
                errorMsg_email.style.display = "block"
            }
            if (e.response?.data?.message === `Ошибка при валидации`) {
                errorPass.style.display = "block"
            }
            else {
                errorMsg_email.style.display = "none"
                errorMsg.style.display = "block"
            }
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async checkAuth(refreshToken) {
        this.setLoading(true)
        try {
            const response = await AuthService.refresh(refreshToken)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false)
        }
    }

    async addRecipe(name, shortDesc, mainPhoto, category, time, desc, video, count, author) {
        try {
            author = this.user.name
            const response = await RecipeService.addRecipe(name, shortDesc, mainPhoto, category, time, desc, video, count, author)
            console.log(response)
            this.setRecipe(response.data.recipe)
            useNavigate(`/recipe/${this.recipe.id}`)

        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

}