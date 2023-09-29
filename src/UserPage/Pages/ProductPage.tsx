import React, { useEffect } from "react";
import TopNavbar from "../Components/TopNavbar"
import ProductItems from "../Components/ProductItems";
import { Box } from "@chakra-ui/react";
import { DesktopNav } from "../Components/BottomNavbar";
import Footer from "../Components/Footer";


const ProductPage: React.FC = () => {

  return<>
  <TopNavbar />
        <DesktopNav />
  <Box fontFamily={"Poppins"}>
  <ProductItems />
  </Box>
  <Footer />
    </> ;
};

export default ProductPage;
