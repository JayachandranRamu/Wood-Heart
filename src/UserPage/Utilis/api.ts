import axios, { AxiosRequestConfig } from "axios";

//https://wood-heart-api.onrender.com
export let ProductURL="https://wood-heart-api.onrender.com/products";
export const userUrl="https://wood-heart-api.onrender.com/user"
export const getProductDataFromAPI=(params:AxiosRequestConfig)=>{

  return  axios.get(ProductURL,params)
}

export const getSingleProductDataFromAPI=(id:any)=>{
console.log(id)
  return  axios.get(ProductURL+"/"+id)
}

export const  PostUserDataInAPI=(newUser:any)=>{
return axios.post(userUrl,newUser)
}

export const GetAllUserDataFromAPI=()=>{
  return   axios.get(userUrl)
}