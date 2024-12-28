import { GET_BALANCE_SUCCESS, GET_BALANCE_FAIL } from '../types/actionTypes';

const initialState = {
  balance: 0,
  error: null,
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BALANCE_SUCCESS:
      return {
        ...state,
        balance: action.payload,
        error: null,
      };
    case GET_BALANCE_FAIL:
      return {
        ...state,
        balance: 0,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default walletReducer;
