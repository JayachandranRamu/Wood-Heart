import React from 'react';
import {
  Box,
  Button,

  Flex,
  Heading,


  Stack,

} from '@chakra-ui/react';


import { useNavigate } from 'react-router-dom';
const Hero: React.FC = () => {

  let Navigate=useNavigate()
  return (
      <Box m={"50px auto"} fontFamily={"urbanist"}
    borderRadius={["35px","50px"]}  mb={"100px"}
    pt={["30px","40px"]}
    w={["85%","85%"]}
        h="container.sm"
       bgColor={"#0b3954"}
    
       
       
      >

            <Box
  pos="absolute"
  borderRadius={["35px","50px"]}
  backgroundPosition="center center"
  backgroundSize="cover"
  bgRepeat="no-repeat"
  h="container.sm"
ml={["5%","5%"]}
  backgroundImage="url(https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-slider-pic1.webp)"
  w={["75%", "75%"]}
>



  <Flex
         
         pos="relative"
       //   justify="left"
       justifyContent={"left"}
     ml={["8%","15%"]}
     mt={"15px"}
         
         boxSize="full"
       
       >
         <Stack 
       //   textAlign="left" 
      
     
           spacing={6}>
           <Heading 
             fontSize={['45', '68']}
             fontWeight="bold"
        letterSpacing={"1px"}
             color="white"
             textTransform="uppercase" fontFamily={"urbanist"}  
           >
             LUXURY <br />
             FURNITURE
           </Heading>
           <Button
           //   colorScheme="brand"
           borderRadius={"20px"}
         onClick={()=>Navigate("/product")}
             textTransform="uppercase"
             w="fit-content"
           >GO TO SHOP   
           </Button>
         </Stack>
       </Flex>
     </Box>


           </Box>
      
  );
};

export default Hero;
