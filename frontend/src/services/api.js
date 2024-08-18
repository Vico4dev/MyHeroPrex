import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const login = async (username, password) => {
  const response = await api.post('/token/', { username, password });
  if (response.data.access) {
    localStorage.setItem('token', response.data.access);
  }
  return response.data;
};


export const register = async (username, email, password) => {
  const response = await api.post('/register/', { username, email, password });
  return response.data;
};


export const getHeroes = async () => {
    const response = await api.get('/heros/');
    return response.data;
  };
  
  export const createHero = async (heroData) => {
    try {
      const response = await api.get(`/heros/`, heroData);
      return response.data;
    } catch (error) {
      console.error('Error creating hero:', error.response?.data); // Log the error details
      throw error;
    }
  };
export const updateHero = async (id, heroData) => {
  const response = await api.put(`/heros/${id}/`, heroData);
  return response.data;
};

export const deleteHero = async (id) => {
  const response = await api.delete(`/heros/${id}/`);
  return response.data;
};

export const startCombat = async (heroId, opponentId) => {
  const response = await api.post('/combat/', { hero_id: heroId, opponent_id: opponentId });
  return response.data;
};

export default api;