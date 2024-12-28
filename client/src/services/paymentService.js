import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const makePayment = async (amount) => {
  const response = await axios.post(`${API_BASE_URL}/payment`, { amount });
  return response.data;
};
