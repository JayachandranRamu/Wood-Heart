import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface ProductCardProps {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  category,
  name,
  price,
  image,
  brand,
  rating,
}) => {
  return (
  <Box bg={"#f5f5f5"} borderRadius={"20px"} m={"auto"} p={"40px"} textAlign={"center"}>
    <Flex  h={"400px"} alignItems={"center"} justifyContent={"center"} >
    <Image
      m={"20px auto"}
      w={"100%"}
      
    // boxSize="320px" // Set a fixed size for the image (adjust as needed)
        // objectFit={"cover"}
        src={image}
      />
    </Flex>
   
      <Text>{name}</Text>
      <Text fontWeight={"500"}>$ {price}</Text>
    </Box>
  );
};

export default React.memo(ProductCard);
