import { Dispatch } from 'redux'; // Import Dispatch type if not already imported
import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
} from '../actionTypes'; // Import your action types and adjust the path
import { getProductDataFromAPI } from '../../Utilis/api';

// Import the getProductDataFromAPI function if not already imported
// Assuming it returns a Promise with a response object containing a 'data' field

export const getProductsData = (params: any) => (dispatch: Dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  getProductDataFromAPI(params)
  .then((res) =>{
    dispatch({ type: PRODUCT_SUCCESS, payload: res.data })})
    .catch(() => dispatch({ type: PRODUCT_FAILURE }));
};
