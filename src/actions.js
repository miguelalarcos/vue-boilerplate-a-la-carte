import axios from 'axios'

const api = process.env.NODE_ENV === 'production' ? ':8089/' : 'http://localhost:8089/'

const instanceAPI = axios.create({
    baseURL: api
  });
  
instanceAPI.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const instancePublic = axios.create({
    baseURL: api
  });