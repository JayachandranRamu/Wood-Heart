import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate, useSearchParams } from 'react-router-dom';
// import styled from 'styled-components';

import AdminNavbar from "../Components/Admin-Navbar";
// import { getProductDataFromAPI } from "../../UserPage/Utilis/api";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../UserPage/Redux/Admin/action";
import { Box, SimpleGrid } from "@chakra-ui/react";
import AdminProductCard from "../Components/Admin_product_card";
import { RootState } from "../Redux/rootReducer"; // Import the RootState type

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector((store: RootState) => ({
    products: store.adminReducer.products,
    isLoading: store.adminReducer.isLoading,
    isError: store.adminReducer.isError,
  }));
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  // console.log(products);
  // const dispatch = useDispatch();
  // const data = useSelector((store: any) => store.productsReducer.products); // Adjust the store type
  // const isLoading = useSelector((store: any) => store.productsReducer.isLoading); // Adjust the store type
  //const [searchParam] = useSearchParams();
  // const Navigate = useNavigate();

  // const params = {
  //   params: {
  //     q: searchParam.get('query'),
  //     category: searchParam.getAll('category'),
  //     gender: searchParam.getAll('gender'),
  //     price_gte: searchParam.get('price_gte'),
  //     price_lte: searchParam.get('price_lte'),
  //   },
  // };

  // useEffect(() => {
  //   dispatch(getProducts(params));
  // }, [searchParam, dispatch]);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <AdminNavbar />
      <Box display={"flex"} justifyContent={"space-around"}>
        <Box w={"20%"}>Sidebar</Box>
        <Box w={"60%"}>
          <SimpleGrid spacing={10} columns={[1, 2]} m={"80px auto"} w={"100%"}>
            {products?.map((el: any) => (
              <AdminProductCard key={el.id} {...el} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

// const DIV = styled.div`
//   // Your styles here
// `;

export default Products;
