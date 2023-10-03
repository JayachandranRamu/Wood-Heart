
import {  Dispatch } from 'redux';
import { AddCartProductToAPI, GetAllUserDataFromAPI, PostUserDataInAPI } from '../../Utilis/api';
import { ADD_CART_PRODUCT_SUCCESS, AUTH_ADD_NEW_USER_DATA, AUTH_ALL_USER_DATA, AUTH_FAILURE, AUTH_LOGOUT_SUCCESS, AUTH_SUCCESS } from '../actionTypes';





// Define the GetAllUserData function with TypeScript types
export const GetAllUserData = (dispatch: Dispatch):void => {
  GetAllUserDataFromAPI()
    .then((res) =>{
         dispatch({ type: AUTH_ALL_USER_DATA, payload: res.data })})
    .catch(() => dispatch({ type: AUTH_FAILURE }));
};

export const PostUserData =(newUser:any)=> (dispatch: Dispatch):void => {
    PostUserDataInAPI(newUser)
    .then((res) =>{
           dispatch({ type: AUTH_ADD_NEW_USER_DATA, payload: res.data })})

  };

export const StoringUserDatainLS=(userData:any)=>(dispatch:Dispatch):void=>{
localStorage.setItem("LoginedUserData",JSON.stringify(userData));
localStorage.setItem("LoginedUserDataID",JSON.stringify(userData.id))
localStorage.setItem("isAuth","true")

dispatch({type:AUTH_SUCCESS,payload:userData})
}
export const LogoutStoringUserDatainLS=(dispatch:Dispatch):void=>{
    localStorage.setItem("LoginedUserData","");
    localStorage.setItem("LoginedUserDataID","")
    localStorage.setItem("isAuth","false")
    dispatch({type:AUTH_LOGOUT_SUCCESS})
    }

    export const AddCartProduct=(userData:any)=>(dispatch:Dispatch):void=>{
        localStorage.setItem("LoginedUserData",JSON.stringify(userData));
        AddCartProductToAPI(userData).then(()=>
            dispatch({type:ADD_CART_PRODUCT_SUCCESS,payload:userData})
            )
     

    }
