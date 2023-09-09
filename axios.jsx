import axios from "axios";
import router from './src/router';

const axoisClient = axios.create({
        baseURL: 'http://localhost:8000/api'
})

axoisClient.interceptors.request.use((config) => {
        const token = '123'; //TODO
        config.headers.Authorization = `Bearer ${token}`
});

axios.interceptors.response.use(response => {
        return response;
},
        error => {
                if (error.response && error.response.status === 401) {
                        router.navigate('/login');
                        return error;
                }
        }
)

export default axoisClient;