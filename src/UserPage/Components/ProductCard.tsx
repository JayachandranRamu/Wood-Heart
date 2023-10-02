import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
  name,
  price,
  image,
  rating,
}) => {
  
  let Navigate=useNavigate()

  return (
  <Box bg={"#f5f5f5"} borderRadius={"20px"} m={"auto"} p={"40px"} textAlign={"center"}>
    <Flex  h={["300px","350","400px"]}  alignItems={"center"} justifyContent={"center"} >
    <Image
      m={"20px auto"}
      w={"100%"}
      onClick={()=>Navigate("/product/"+id)}
    // boxSize="320px" // Set a fixed size for the image (adjust as needed)
        // objectFit={"cover"}
        src={image}
      />
    </Flex>
   
      <Text>{name}</Text>
      <Text fontWeight={"500"}>$ {price}</Text>
      <Flex alignItems={"center"} justifyContent={"center"} fontSize={"18"} m={"5px auto"}>
{new Array(Math.floor(rating)).fill(0).map(()=>{
    return(<FaStar  color="#ffb128" />)})}
    {new Array(5-Math.floor(rating)).fill(0).map(()=>{
    return(<FaStar color="grey" />)})}
    
</Flex>
    </Box>
  );
};

export default ProductCard;
