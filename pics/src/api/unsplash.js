import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID J7B3UdZXuYrSS0zzPMfy6Q7HRxaB9kcJLj_23TpE-Zs'
    }
});