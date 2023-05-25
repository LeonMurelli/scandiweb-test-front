import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-leon-scandiweb.cyclic.app',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})

export default api;