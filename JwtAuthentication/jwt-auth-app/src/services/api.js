import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api' });

// Automatically attach token to headers if available
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) req.headers.Authorization = token;
    return req;
});

export const loginUser = (credentials) => API.post('/token', credentials);
export const validateToken = () => API.get('/validate');
