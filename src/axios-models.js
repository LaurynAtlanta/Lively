import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://lively-fe765.firebaseio.com/'
});

export default instance;