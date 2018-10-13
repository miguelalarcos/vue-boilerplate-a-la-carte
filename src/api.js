import axios from 'axios'

const api = process.env.NODE_ENV === 'production' ? ':8089/' : 'http://localhost:8089/'

export const instanceAPI = axios.create({
    baseURL: api
});

const instancePublic = axios.create({
    baseURL: api
});

export async function postLogin(user, password) {
    let response = await instancePublic.get("/login", {user, password})
    return response.data
}