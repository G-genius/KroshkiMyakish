import $api from "../http";
import {AxiosResponse} from 'axios'
import {IRecipe} from '../models/IRecipe'
import type {RecipeResponse} from "../models/response/RecipeResponse";

export default class RecipeService {
    static async addRecipe(name, shortDesc, mainPhoto, category, time, desc, video, count): Promise<AxiosResponse<RecipeResponse>> {
        return $api.post('/addRecipe', {name, shortDesc, mainPhoto, category, time, desc, video, count})
    }
    static getRecipes(): Promise<AxiosResponse<IRecipe[]>> {
        return $api.get('/recipes')
    }
    static getRecipe(id): Promise<AxiosResponse<IRecipe[]>> {
        return $api.get(`/recipe/${id}`)
    }
}