import axios, { AxiosRequestConfig } from "axios";


export let ProductURL="http://localhost:8080/products";
export const userUrl="http://localhost:8080/user"
export const getProductDataFromAPI=(params:AxiosRequestConfig)=>{

  return  axios.get(ProductURL,params)
}

export const getSingleProductDataFromAPI=(id:any)=>{
console.log(id)
  return  axios.get(ProductURL+"/"+id)
}

