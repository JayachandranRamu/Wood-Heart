import { Dispatch } from "redux";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";
import { getProductDataFromAPI } from "../../Utilis/api";

export const getProducts = (params: any) => (dispatch: Dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  getProductDataFromAPI(params)
    .then((res: any) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => dispatch({ type: GET_PRODUCT_FAILURE }));
};
export const deleteProduct = (id) => (dispatch: Dispatch) => {};
