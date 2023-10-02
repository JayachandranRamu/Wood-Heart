import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getProductsData } from "../Redux/UserPage/action"; 
import ProductCard from "./ProductCard";
import { SimpleGrid } from "@chakra-ui/react";
import Sort from "./Sort";



const ProductItems: React.FC = () => {
  const { name } = useParams(); // Specify the type for 'name'
  const dispatch = useDispatch();
  
  const { products } = useSelector((store: any) => ({
    products: store.productReducer.products,
    isLoading: store.productReducer.isLoading,
    isError: store.productReducer.isError,
  }));
  const [searchParam] = useSearchParams();

const params :any= {
  params: {
category:name=="product"?null:name,
    _sort:searchParam.get("_sort"),
    _order:searchParam.get("_order"),
  },

};
let rating=searchParam.get("rating");
if(rating!=""){
  params.params.rating=rating;
}

  useEffect(() => {
   console.log(params)
dispatch(getProductsData(params))

  }, [searchParam,name]);

 

  return <>
  <Sort results={products?.length} />
  <SimpleGrid spacing={10} columns={[1,2,3]}  m={"80px auto"} mt={"40px"} w={"80%"} >
  {products?.map((el:any)=><ProductCard key={el.id} {...el} />)}
  </SimpleGrid>
  
  </>
};

export default ProductItems;
