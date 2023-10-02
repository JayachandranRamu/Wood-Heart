import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Import the RootState type
import { DELETE_PRODUCT } from "../../UserPage/Redux/Admin/actionTypes";
import axios from "axios";
import { ProductURL } from "../../UserPage/Utilis/api";
import {  useNavigate } from "react-router-dom";
// import { ProductURL } from "../../UserPage/Utilis/api";

interface ProductCardProps {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  rating: number;
}

const AdminProductCard: React.FC<ProductCardProps> = ({
  id,

  name,
  price,
  image,
}) => {
  const client = axios.create({
    baseURL: ProductURL,
  });
  let Navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((store: any) => ({
    products: store.adminReducer.products,
  }));
  const deleteProduct = (id: any) => {
    console.log("deleted", id);
    client.delete(`${id}`);
    let newData = products.filter((ele: any) => {
      return ele.id !== id;
    });
    dispatch({ type: DELETE_PRODUCT, payload: newData });
  };
  return (
    <Box
      bg={"#f5f5f5"}
      borderRadius={"20px"}
      m={"auto"}
      p={"40px"}
      textAlign={"center"}
      //   h={"650px"}
    >
      <Image
        m={"40px auto"}
        w={"250px"}
        h={"250px"}
        // boxSize="320px" // Set a fixed size for the image (adjust as needed)
        // objectFit={"cover"}
        src={image}
      />
      <Text>{name}</Text>
      <Text fontWeight={"500"}>$ {price}</Text>
      <Box display={"flex"} justifyContent={"space-around"}>
        <Button
          colorScheme="orange"
          onClick={() => {
            let ProdId = id;
            // console.log(ProdId);
            deleteProduct(ProdId);
          }}
          bg={"#0b3954"}
          m={"20px 5px"}
          _hover={{bg:"#e89f22"}}
        >
          DELETE
        </Button>
        <Button
          colorScheme="orange"
          onClick={() => {
            console.log("edit butn");
            Navigate("/admin/products/edit/" + id);
          }}
          bg={"#0b3954"}
          m={"20px 5px"}
          _hover={{bg:"#e89f22"}}
        >
          EDIT
        </Button>
      </Box>
    </Box>
  );
};

export default AdminProductCard;
