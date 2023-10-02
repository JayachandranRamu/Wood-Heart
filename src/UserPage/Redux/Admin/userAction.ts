import axios from "axios";
import { GET_SINGLE_USER_FAILURE, 
  GET_SINGLE_USER_REQUEST,
   GET_SINGLE_USER_SUCCESS, 
   DELETE_SINGLE_USER_REQUEST,
    DELETE_SINGLE_USER_SUCCESS,
    DELETE_SINGLE_USER_FAILURE,
     GET_USER_FAILURE, 
     GET_USER_LOADING,
      GET_USER_SUCCESS } from "./userTypes";

import { Dispatch } from "redux";
import { userUrl } from "../../Utilis/api";




export interface userInterface{
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
        // 
        const response= await axios.get(userUrl);
        
        dispatch({ type: GET_USER_SUCCESS, payload:response});
      } catch (error) {
        // console.error(error);
        dispatch({type:GET_USER_FAILURE});
      }
}
// ===============================================================================================


export const getSingleUserby=(id:number) :any=>async(dispatch :Dispatch)=>{
     dispatch({type:GET_SINGLE_USER_REQUEST});
   try{
         const response= await axios.get<userInterface[]>(`${userUrl}/${id}`);
              // console.log(response);
              dispatch({type:GET_SINGLE_USER_SUCCESS,payload:response.data});
   }
  // .then(res=>{
  //    console.log(res.data)
  //    dispatch({type:GET_SINGLE_USER_SUCCESS,payload:res.data});
  // })
  catch(err){
    console.log(err);
    dispatch({type:GET_SINGLE_USER_FAILURE});
  }
}



 //to Delete a Single User by ID
export const deleteSingleUser = (id: number,a:any): any => async (dispatch: Dispatch) => {
  console.log(`${userUrl}/${id}`)
  const  updatedUsers = a.filter((user:any) => user.id !== id);
  console.log(updatedUsers);
  dispatch({ type: DELETE_SINGLE_USER_REQUEST });
  try {
   await axios.delete(`${userUrl}/${id}`);
    // console.log(res);
    
    dispatch({ type: DELETE_SINGLE_USER_SUCCESS ,payload:updatedUsers });
  } catch (err) {
    // console.log(err);
    dispatch({ type: DELETE_SINGLE_USER_FAILURE });
  }
};

