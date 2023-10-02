
import {
  PATCH_PRODUCT,
} from "./actionTypes";


import { DELETE_PRODUCT, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"
import { DELETE_SINGLE_USER_FAILURE, DELETE_SINGLE_USER_REQUEST, DELETE_SINGLE_USER_SUCCESS, GET_SINGLE_USER_FAILURE, GET_SINGLE_USER_REQUEST, GET_SINGLE_USER_SUCCESS, GET_USER_FAILURE, GET_USER_LOADING, GET_USER_SUCCESS } from "./userTypes"



const initstate={
    users:[],
    singleUser:{},
    totalPages:0,
    orders:[],
    products:[],
    isError:false,
    isAuth:true,
    isLoading:false
}



type action = {
  type: string;
  payload: any;
};


export const reducer = (state = initstate, { type, payload }: action) => {
  switch (type) {
    case GET_USER_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_USER_SUCCESS: {
      console.log(payload.headers["x-total-count"], "pages");
      return {
        ...state,
        isLoading: false,
        users: payload.data,
        totalPages: payload.headers["x-total-count"],
      };
    }
    case GET_USER_FAILURE: {
      return { ...state, isError: true };
    }
    case GET_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_PRODUCT_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        products: payload,
      };
    }
    case PATCH_PRODUCT: {
      return {
        ...state,
        isLoading: false,
      };
    }
    //  ======================= single user cases============================
    case GET_SINGLE_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_SINGLE_USER_SUCCESS: {
      console.log(payload, "single User");
      return {
        ...state,
        isLoading: false,
        isError: false,
        singleUser: payload,
        // totalPages:payload.headers["x-total-count"]
      };
    }
    case GET_SINGLE_USER_FAILURE: {
      return { ...state, isError: true };
    }
//  ======================= single user cases============================

// =============================================================
case DELETE_SINGLE_USER_REQUEST:
  return {
    ...state,
    isDeleting: true,
    deleteError: false,
  };
case DELETE_SINGLE_USER_SUCCESS:
    // deletedUserId = payload;
    console.log(payload,"PAYLOAD")
    return {
      ...state,
      isDeleting: false,
      deleteError: false,
      users: payload,
    };
case DELETE_SINGLE_USER_FAILURE:
  return {
    ...state,
    isDeleting: false,
    deleteError: true,
  };
         default:{
            return state;
         }
      }
  }

