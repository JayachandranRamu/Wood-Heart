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

export const  AddCartProductToAPI=(userData:any)=>{
return axios.patch(userUrl+"/"+userData.id,userData)
}


export function extractTotalPages(linkHeader: any) {
  if (!linkHeader) {
    return 1; // Default to 1 if Link header is not present
  }

  const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
  return match ? parseInt(match[1], 10) : 1;
}