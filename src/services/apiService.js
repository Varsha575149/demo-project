import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; // Your actual API URL

const apiService = axios.create({
  baseURL: API_URL,
});

export const getChatbotResponse = async (message) => {
  try {
    const response = await apiService.post('/chatbot', { message });
    return response.data;
  } catch (error) {
    console.error('Error fetching chatbot response:', error);
    throw error;
  }
};
