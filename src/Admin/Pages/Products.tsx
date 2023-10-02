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
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import AdminProductCard from "../Components/Admin_product_card";
import axios from "axios";
import { ProductURL } from "../../UserPage/Utilis/api";

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store: any) => ({
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
  const initProduct = {
    name: "",
    category: "",
    price: "",
    image: "",
    brand: "",
    size: "",
    color: "",
    material: "",
    rating: "",
    about: "",
    reviews: [
      {
        username: "Sarah123",
        rating: 5,
        comment: "I love this dining table! It's beautiful and sturdy.",
      },
      {
        username: "JohnDoe45",
        rating: 4,
        comment: "Great value for a modern dining table.",
      },
      {
        username: "ElegantHome",
        rating: 5,
        comment: "I'm very pleased with this purchase. It's perfect.",
      },
      {
        username: "FurnitureFanatic",
        rating: 4,
        comment: "Assembly was straightforward, but it took some time.",
      },
    ],
  };
  let newProd: any;
  let [newProduct, setNewProduct] = useState(initProduct);
  const handleChange = (e: any) => {
    // console.log(e.target.value);
    console.log(newProduct);
    newProd = {
      ...newProduct,
      [e.target.name]: e.target.value,
      // e.target.name === "price" || "rating"
      //   ? +e.target.value
      //   :
    };
    setNewProduct(newProd);
    // console.log(newProduct);
  };
  const AddProduct = (e: any) => {
    // setNewProduct(newProd);
    e.preventDefault();
    console.log("new prod", newProduct);
    axios.post(ProductURL, newProduct).then((res) => {
      console.log(res.data);
      dispatch(getProducts());
      setNewProduct(initProduct);
    });
  };
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <AdminNavbar />
      <Box display={"flex"} justifyContent={"space-around"}>
        <Box w={"20%"}>
          <Stack spacing={4}>
            <Text textAlign={"center"} fontWeight={"bold"} mb={2} fontSize={"25"} color={"#0b3954"} >ADD NEW PRODUCT</Text>
            <Input
              variant="filled"
              placeholder="Name"
              type="text"
              name="name"
              // value={newProduct.name}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="Category"
              type="text"
              name="category"
              onChange={handleChange}
              value={newProduct.category}
            />
            <Input
              variant="filled"
              placeholder="Price"
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="Image"
              type="url"
              name="image"
              value={newProduct.image}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="Brand"
              type="text"
              name="brand"
              value={newProduct.brand}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="Size"
              type="text"
              name="size"
              value={newProduct.size}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="Color"
              type="text"
              name="color"
              value={newProduct.color}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="Material"
              type="text"
              name="material"
              value={newProduct.material}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="About"
              type="text"
              name="about"
              value={newProduct.about}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="Rating"
              type="number"
              name="rating"
              value={newProduct.rating}
              onChange={handleChange}
            />
            <Button  bg={"#0b3954"}
          m={"20px 5px"} color={"white"}
          _hover={{bg:"#e89f22"}} onClick={AddProduct}>
              ADD PRODUCT
            </Button>
          </Stack>
        </Box>
        <Box w={"70%"}>
          <SimpleGrid
            spacing={10}
            columns={[1, 2,3]}
            // m={"80px auto"}
            w={"100%"}
          >
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
