import axios from 'axios'

export const API_URL = `http://localhost:1337/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})