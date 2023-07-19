// instalado o npm install axios


// baseURL: https://api.themoviedb.org/3/


// movie/now_playing?api_key=fe0d02173085354ad511813639032286

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;

