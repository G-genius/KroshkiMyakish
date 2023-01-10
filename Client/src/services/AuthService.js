import $api, {API_URL} from "../http";
import {AxiosResponse} from 'axios'
import type {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email, password): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/login', {email, password})
    }

    static async registration(email, password): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/registration', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }

    static async refresh(refreshToken): Promise<AxiosResponse<AuthResponse>> {
        return $api.get(`${API_URL}/refresh`, {withCredentials: true})
    }
}