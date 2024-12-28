import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getWalletBalance = async () => {
  const response = await axios.get(`${API_BASE_URL}/wallet/balance`);
  return response.data;
};
