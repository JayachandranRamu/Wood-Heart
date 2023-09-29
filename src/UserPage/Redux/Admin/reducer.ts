import {
  DELETE_PRODUCT,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

interface InitialState {
  users: any;
  orders: any;
  products: any;
  isError: boolean;
  isLoading: boolean; // Replace 'any' with the actual type of singleProduct
}

const initstate = {
  users: [],
  orders: [],
  products: [],
  isError: false,
  isLoading: false,
};

export const reducer = (
  state: InitialState = initstate,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
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
        products: action.payload,
      };
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};
