import { Dispatch } from "redux";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  PATCH_PRODUCT,
} from "./actionTypes";
import { ProductURL, getProductDataFromAPI } from "../../Utilis/api";
import axios from "axios";

export const getProducts = () => (dispatch: Dispatch):void =>{
  dispatch({ type: GET_PRODUCT_REQUEST });
  getProductDataFromAPI({})
    .then((res: any) => {
      console.log("products rendering");
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => dispatch({ type: GET_PRODUCT_FAILURE }));
};
export const editProduct = (id: any, data: any) => (dispatch: Dispatch):void => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  axios.patch(`${ProductURL}/${id}`, data).then((res: any) => {
    console.log(res.data);
    dispatch({ type: PATCH_PRODUCT });
  });
};
