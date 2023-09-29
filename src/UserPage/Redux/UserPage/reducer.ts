import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../actionTypes"
  
  // Define your initial state with types
  interface InitialState {
    isLoading: boolean;
    isError: boolean;
    products: any[]; // Replace 'any' with the actual type of products
    singleProduct: any; // Replace 'any' with the actual type of singleProduct
  }
  
  const initialState: InitialState = {
    isLoading: false,
    isError: false,
    products: [],
    singleProduct: {},
  };
  
  // Create the reducer with types
  export const reducer = (
    state: InitialState = initialState,
    action: { type: string; payload: any } // Replace 'any' with the actual type of payload
  ) => {
    switch (action.type) {
      case PRODUCT_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case PRODUCT_FAILURE: {
        return {
          ...state,
          isError: true,
          isLoading: false,
        };
      }
      case PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          products: action.payload, // Use action.payload to update products
        };
      }
      default:
        return state; // Return the state as is for unknown actions
    }
  };
  
  export default reducer;
  