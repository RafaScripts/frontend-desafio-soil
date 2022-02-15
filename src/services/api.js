import axios from 'axios';

const api = axios.create({
    baseURL: 'https://magrelin.herokuapp.com/'
})

export default api;