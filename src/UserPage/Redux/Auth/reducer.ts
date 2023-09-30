import { AUTH_FAILURE, AUTH_SUCCESS } from "../actionTypes";

let initialState :any={
isAuth:false,
UserData:{},
isLoading:false,
isError:false,
userID:""
}

// Create the reducer with types
export const reducer = (
    state: any = initialState,
    action: { type: string; payload: any } // Replace 'any' with the actual type of payload
  ) => {
    switch (action.type) {
      case AUTH_SUCCESS: {
        return {
          ...state,
UserData:action.payload,
isAuth:true,
isLoading:false,
isError:false,
userID:action.payload.id
        };
      }
      case AUTH_FAILURE: {
        return {
          ...state,
          isError:true // Use type assertion or handle the actual conversion
        };
      }
      default:
        return state; // Return the state as is for unknown actions
    }
  };
  
  export default reducer;
  