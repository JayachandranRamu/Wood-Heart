import { GET_USER_FAILURE, GET_USER_LOADING, GET_USER_SUCCESS } from "./userTypes"


const initstate={
    users:[],
    totalPages:0,
    orders:[],
    products:[],
    isError:false,
    isAuth:false,
    isLoading:false
}

type action={
    type:string,
    payload:any
}

export const reducer=(state=initstate,{type,payload}:action)=>{
      switch(type){
         case GET_USER_LOADING:{
            return {...state,isLoading:true};
         }
         case GET_USER_SUCCESS:{
            console.log(payload.headers["x-total-count"],"pages");
            return {...state,isLoading:false,users:payload.data,totalPages:payload.headers["x-total-count"]}
         }
         case GET_USER_FAILURE:{
            return {...state,isError:true}
         }
         default:{
            return state;
         }
      }
}
