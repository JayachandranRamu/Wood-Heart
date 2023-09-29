import axios from "axios";
import { GET_USER_FAILURE, GET_USER_LOADING, GET_USER_SUCCESS } from "./userTypes";
import { Dispatch } from "redux";
import { userUrl } from "../../Utilis/api";

const GetUserLoading={ type: typeof GET_USER_LOADING};
 
const GetUserSuccess={type:typeof GET_USER_SUCCESS,payload:[]}

interface userInterface{
    id:string
    email:string
    username:string
    password: string
    phone:string
    orders: []
    wishList: []
    addToCart: []
    address:{}
}

export const getAllusers=() :any=>async(dispatch:Dispatch) =>{
       dispatch({type:GET_USER_LOADING});
       try {
        const response= await axios.get<userInterface[]>(userUrl);
        console.log(response);
        dispatch({ type: GET_USER_SUCCESS, payload: response });
      } catch (error) {
        console.error(error);
        dispatch({type:GET_USER_FAILURE});
      }
}