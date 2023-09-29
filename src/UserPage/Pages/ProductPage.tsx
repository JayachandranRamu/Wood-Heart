import React from "react";
import TopNavbar from "../Components/TopNavbar";
import ProductItems from "../Components/ProductItems";
import { Box } from "@chakra-ui/react";
import { DesktopNav } from "../Components/BottomNavbar";
import Footer from "../Components/Footer";

import TopProductPage from "../Components/TopProductPage";

6;
const ProductPage: React.FC = () => {

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
