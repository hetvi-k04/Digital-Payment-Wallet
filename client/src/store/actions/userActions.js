import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../types/actionTypes';

// Login action
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/user/login', { email, password });
    
    // Dispatch login success action
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data.token,
    });

    // Optionally save token to localStorage
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};
