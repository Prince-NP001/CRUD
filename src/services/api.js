import axios from 'axios';

export const http = axios.create({
    baseURL: "http://localhost:8055/items",
});

http.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);