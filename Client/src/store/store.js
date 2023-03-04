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




    async login(email, password) {
        try {
            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            // window.location.reload()
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async registration(email, city, password) {
        try {
            const response = await AuthService.registration(email, city, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)

        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            localStorage.setItem('token')
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

    async addRecipe(name, shortDesc, mainPhoto, category, time, desc, video, count) {
        try {
            const response = await RecipeService.addRecipe(name, shortDesc, mainPhoto, category, time, desc, video, count)
            console.log(response)
            this.setRecipe(response.data.recipe)

        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

}