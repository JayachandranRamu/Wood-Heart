import { GET_SINGLE_USER_FAILURE, GET_SINGLE_USER_REQUEST, GET_SINGLE_USER_SUCCESS, GET_USER_FAILURE, GET_USER_LOADING, GET_USER_SUCCESS } from "./userTypes"


const initstate={
    users:[],
    singleUser:{},
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
//  ======================= single user cases============================
case GET_SINGLE_USER_REQUEST:{
   return {...state,isLoading:true};
}
case GET_SINGLE_USER_SUCCESS:{
   console.log(payload,"single User");
   return {...state,isLoading:false,isError:false,
            singleUser:payload,
            // totalPages:payload.headers["x-total-count"]
          }
}
case GET_SINGLE_USER_FAILURE:{
   return {...state,isError:true}
}

         default:{
            return state;
         }
      }
}
