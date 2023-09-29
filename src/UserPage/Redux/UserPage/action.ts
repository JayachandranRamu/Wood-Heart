import { Dispatch } from 'redux'; // Import Dispatch type if not already imported
import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  SINGLE_PRODUCT_SUCCESS,
} from '../actionTypes'; // Import your action types and adjust the path
import { getProductDataFromAPI, getSingleProductDataFromAPI } from '../../Utilis/api';

// Import the getProductDataFromAPI function if not already imported
// Assuming it returns a Promise with a response object containing a 'data' field

export const getProductsData = (params: any) => (dispatch: Dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  getProductDataFromAPI(params)
  .then((res) =>{
    dispatch({ type: PRODUCT_SUCCESS, payload: res.data })})
    .catch(() => dispatch({ type: PRODUCT_FAILURE }));
};

export const getSingleProductData = (id: any) => (dispatch: Dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  getSingleProductDataFromAPI(id)
    .then((res) => {
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => dispatch({ type: PRODUCT_FAILURE }));
};
