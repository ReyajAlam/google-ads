import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost/backend',
  withCredentials: true
});

export const register = (data) => API.post('/register.php', data);
export const login = (data) => API.post('/login.php', data);
export const createCampaign = (data) => API.post('/create.php', data);
export const getCampaigns = () => API.get('/list.php');