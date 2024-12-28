import axios from 'axios';
import { GET_BALANCE_SUCCESS, GET_BALANCE_FAIL } from '../types/actionTypes';

// Get wallet balance
export const getWalletBalance = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:5000/api/wallet/balance', {
      headers: { Authorization: token },
    });

    dispatch({
      type: GET_BALANCE_SUCCESS,
      payload: response.data.balance,
    });
  } catch (error) {
    dispatch({
      type: GET_BALANCE_FAIL,
      payload: error.response.data.message,
    });
  }
};
