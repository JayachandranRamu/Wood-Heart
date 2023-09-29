import React, { useEffect } from "react";
import TopNavbar from "../Components/TopNavbar";
import ProductItems from "../Components/ProductItems";
import { Box, Flex, Image } from "@chakra-ui/react";
import { DesktopNav } from "../Components/BottomNavbar";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import TopProductPage from "../Components/TopProductPage";
6;
const ProductPage: React.FC = () => {
  const { name } = useParams<RouteParams>();
  return (
    <>
      <TopNavbar />
      <DesktopNav />
 <TopProductPage />
      <Box fontFamily={"Poppins"}>
        <ProductItems />
      </Box>
      <Footer />
    </>
  );
};

export default ProductPage;
