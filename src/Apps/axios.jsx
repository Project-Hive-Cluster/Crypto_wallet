import axios from 'axios';

export default axios.create({
    baseURL: `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`
});