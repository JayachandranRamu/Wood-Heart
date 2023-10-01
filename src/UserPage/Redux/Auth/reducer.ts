import { ADD_CART_PRODUCT_SUCCESS, ADMIN_CHECK, AUTH_ADD_NEW_USER_DATA, AUTH_ALL_USER_DATA, AUTH_FAILURE, AUTH_LOGOUT_SUCCESS, AUTH_SUCCESS } from "../actionTypes";
interface UserData {
  // Define the structure of your JSON data here
  // For example, if it has 'username' and 'email' fields:
  username: string;
  email: string;
}

const rawData = localStorage.getItem("LoginedUserData");
const UserData: UserData = rawData ? JSON.parse(rawData) : {};
let ans:any=localStorage.getItem("isAuth");
let initialState :any={
isAuth:ans=="true"?true:false,
UserData: rawData ? JSON.parse(rawData) : {},
isLoading:false,
isError:false,
userID:localStorage.getItem("LoginedUserDataID") || "",
allUserData:[],
isAdmin:false
}
console.log(initialState)

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
      case AUTH_ALL_USER_DATA: {
        return {
          ...state,
         allUserData:action.payload
        };
      }
      case AUTH_LOGOUT_SUCCESS:{
        return {
          ...state,
          isAuth:false,
UserData: {},
isLoading:false,
isError:false,
userID:""
        }
      }
      case AUTH_ADD_NEW_USER_DATA:{
        return {
          ...state,
         allUserData:[...state.allUserData,action.payload]
        };
      }
      case ADMIN_CHECK:{
        return {
          ...state,
         isAdmin:true
        };
      }
      case ADD_CART_PRODUCT_SUCCESS:{
       return { ...state,
        UserData:action.payload}
      }
      default:
        return state; // Return the state as is for unknown actions
    }
  };
  
  export default reducer;
  