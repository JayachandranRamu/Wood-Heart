import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate, useSearchParams } from 'react-router-dom';
// import styled from 'styled-components';

import AdminNavbar from "../Components/Admin-Navbar";
// import { getProductDataFromAPI } from "../../UserPage/Utilis/api";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../UserPage/Redux/Admin/action";
import {
  Box,
  Button,
  Heading,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import AdminProductCard from "../Components/Admin_product_card";
import { RootState } from "../Redux/rootReducer"; // Import the RootState type
import axios from "axios";
import { ProductURL } from "../../UserPage/Utilis/api";

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector((store: RootState) => ({
    products: store.adminReducer.products,
    isLoading: store.adminReducer.isLoading,
    isError: store.adminReducer.isError,
  }));
  // let newProduct = {
  //   name: null,
  //   category: "",
  //   price: null,
  //   image: "",
  //   brand: "",
  //   size: "",
  //   color: "",
  //   material: "",
  //   rating: "",
  // };
  let newProduct = {};
  const handleChange = (e: any) => {
    newProduct = { ...newProduct, [e.target.name]: e.target.value };
  };
  const AddProduct = (e: any) => {
    e.preventDefault();
    console.log(newProduct);
    axios.post(ProductURL, newProduct).then((res) => {
      console.log(res.data);
    });
    newProduct = {};
  };
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
        <Box w={"20%"}>
          <Stack spacing={4}>
            <Heading mb={4}>Add New Product</Heading>
            <Input
              variant="filled"
              placeholder="name"
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="category"
              type="text"
              name="category"
              onChange={handleChange}
              value={newProduct.category}
            />
            <Input
              variant="filled"
              placeholder="price"
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="image"
              type="url"
              name="image"
              value={newProduct.image}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="brand"
              type="text"
              name="brand"
              value={newProduct.brand}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="size"
              type="text"
              name="size"
              value={newProduct.size}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="color"
              type="text"
              name="color"
              value={newProduct.color}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="material"
              type="text"
              name="material"
              value={newProduct.material}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="about"
              type="text"
              name="about"
              value={newProduct.about}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="rating"
              type="number"
              name="rating"
              value={newProduct.rating}
              onChange={handleChange}
            />
            <Button colorScheme="orange" onClick={AddProduct}>
              Add Product
            </Button>
          </Stack>
        </Box>
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
