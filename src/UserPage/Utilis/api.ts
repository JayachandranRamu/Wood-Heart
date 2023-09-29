import axios,{AxiosRequestConfig} from "axios";

let ProductURL="http://localhost:8080/products";
export const userUrl="http://localhost:8080/user"
export const getProductDataFromAPI=(params:AxiosRequestConfig)=>{

  return  axios.get(ProductURL,params)
}