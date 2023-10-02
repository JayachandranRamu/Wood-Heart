import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
6;
const TopProductPage: React.FC = () => {
  const { name } = useParams();
  return (
    <>
      <Flex 
     
        h="320px"
        w={"80%"}
    
     
        bg={"#b4b4a8"}
        color={"white"}
        borderRadius={"20px"}
        alignItems={"center"}
       
      justifyContent={"space-evenly"}
       flexDirection={["column-reverse","row"]}

        m={"auto"}
        mt={"50px"}
      >
        <Box m={"20px 0"} textAlign={"center"}
          textTransform={"uppercase"}
          w={"50%"}
          fontSize={["32","62"]}
          fontWeight={"600"}
          fontFamily={"Poppins"}
        >
          
          {name}
        </Box>
        <Box w={["90%","40%"]}  m={"20px auto"} >
          <Image 
            src={
              "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-shop-pic1.webp"
            }
          ></Image>
        </Box>
      </Flex>
    </>
  );
};

export default TopProductPage;
