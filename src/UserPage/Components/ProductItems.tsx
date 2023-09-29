import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsData } from "../Redux/UserPage/action";
import { RootState } from "../Redux/rootReducer"; // Import the RootState type
import ProductCard from "./ProductCard";
import { SimpleGrid } from "@chakra-ui/react";

interface RouteParams {
  name: string;
}

const ProductItems: React.FC = () => {
  const { name } = useParams<RouteParams>(); // Specify the type for 'name'
  const dispatch = useDispatch();
  
  const { products, isLoading, isError } = useSelector((store: RootState) => ({
    products: store.productReducer.products,
    isLoading: store.productReducer.isLoading,
    isError: store.productReducer.isError,
  }));

  useEffect(() => {
    const params = {
      params: {
        category: name,
      },
    };
    dispatch(getProductsData(params));
  }, [dispatch, name]);

  console.log(products);

  return <SimpleGrid spacing={10} columns={[1,2,3]}  m={"80px auto"} w={"80%"} >
  {products?.map((el:any)=><ProductCard key={el.id} {...el} />)}
  </SimpleGrid>;
};

export default ProductItems;
