import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../Redux/rootReducer"; 
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  useNumberInput,
    Container,
    Heading,
    Stack,
    Avatar,
    useColorModeValue,
    SimpleGrid,
    List,
    ListItem
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { CartDrawer } from './CartDrawer';
import { getSingleProductData } from '../Redux/UserPage/action';

export const SingleProductCard: React.FC = () => {
  let { id } = useParams<{ id: number }>();

   // Specify the type for 'name'
  const dispatch = useDispatch();
  
//   let { singleProduct, isLoading, isError } = useSelector((store: RootState) => ({
//     singleProduct: store.productReducer.singleProduct,
//     isLoading: store.productReducer.isLoading,
//     isError: store.productReducer.isError,
//   }));

let singleProduct=useSelector((store:RootState)=>store.productReducer.singleProduct)

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 1000,
    precision: 0,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onClose() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
 
    dispatch(getSingleProductData(id));
  }, [id]);

  // ... rest of your component code
console.log(singleProduct,id)


  return (
    <>
    <Flex
      direction={["column","column", "row"]}
      w={"100%"}
      m={"auto"}
      pb={"80px"}
      pl={["10%"]}
      pr={["10%"]}
      pt={"50px"}
      fontFamily={"Poppins"}
      bg={"#f5f5f5"}
    >
      <Box>
        <Image src={singleProduct?.image} w={["500px","500px", "500px"]} m={"50px auto"} />
      </Box>
      <Box bgColor={"white"} borderRadius={"20px"} w={["100%","100%", "45%"]} p={"50px"} m={"auto"}>
        <Text color={"#0b3954"} textTransform={"uppercase"} fontSize={32} fontWeight={600}>
          {singleProduct?.name}
        </Text>
        <Text fontWeight={500}>$ {singleProduct?.price}</Text>
        <Flex alignItems={"center"} fontSize={18} m={"10px auto"}>
          {new Array(Math.floor(singleProduct?.rating || 1)).fill(0).map((el, index) => (
            <Box key={index} m={"0px 1px"}>
              <FaStar color="#ffb128" />
            </Box>
          ))}
          {new Array(5 - Math.floor(singleProduct?.rating || 1)).fill(0).map((el, index) => (
            <Box key={index} m={"0px 1px"}>
              <FaStar color="grey" />
            </Box>
          ))}
          <Box ml={"10px"} alignItems={"center"}>
            <Text fontSize={"15px"} color={"#5c676d"}>
              ({singleProduct?.reviews?.length} customer reviews)
            </Text>
          </Box>
        </Flex>
        <Text color={"#5c676d"} m={"20px 0"}>
          {singleProduct?.about}
        </Text>
        <hr />
        <HStack maxW="150px" mt={"20px"}>
          <Button bg="#f5f5f5" {...dec}>
            -
          </Button>
          <Input textAlign={"center"} {...input} />
          <Button bg="#f5f5f5" {...inc}>
            +
          </Button>
        </HStack>
        <Button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          bgColor={"#2b3954"}
          color={"white"}
          colorScheme="#f8ac2a"
          size={"lg"}
          fontWeight={500}
          _hover={{ bgColor: "#e89f22" }}
          p={"20px 20px"}
          w={["100%","100%", "70%"]}
          m={"20px 0"}
          borderRadius={"10px"}
          fontSize={20}
        >
          ADD TO CART
        </Button>
      </Box>
      {isOpen && <CartDrawer onOpen={isOpen} onClose={onClose} />}
    </Flex>
   
    <Box bg={"white"} mt={"50px"} fontFamily={"poppins"}>
    <Heading  as="h3" size="xl" fontStyle={"italic"} color={"#0b3954"}  fontWeight="lightbold" textAlign="center" fontFamily={"poppins"} mb={{ base: '4', md: '4' }} >
            Product Details
          </Heading>
    <Box m={["50px auto"]} w={["85%","85%","70%"]}  borderRadius={"20px"}  border={"1px solid #ebebeb"} p={[0,"10px","20px"]}>
            <Flex alignItems={"center"} justifyContent={["center","space-between"]} p={["5px","5px","20px"]}>
              <Box w={["40%","40%","20%"]} ml={[0,"20px"]} fontSize={"16"} color={"#444444"} fontWeight={"500"} p={["0","0","20px"]}>
<Text p={"10px"}>Brand</Text>
<Text p={"10px"}>Color</Text>
<Text p={"10px"}>Material</Text>
<Text p={"10px"}>Size</Text>
<Text p={"10px"}>Finish Type</Text>
              </Box>
              <Box w={["60%","60%","80%"]} p={["5px",0]}>
                <Flex>
                <Box display={"inline-flex"} pos={"relative"} flexDirection={"column"} gap={"30px"}  mr={"5px"} alignItems={"center"}>
<Box p={"6px"} borderBottom={"1px solid #ebebeb"}  w={["40px","120px","600px"]} mt={"10px"} ></Box>
<Box p={"10px"} borderBottom={"1px solid #ebebeb"}  w={"100%"} mt={"-5px"}></Box>
<Box p={"9px"} borderBottom={"1px solid #ebebeb"}  w={"100%"}mt={"-5px"} ></Box>
<Box p={"9px"} borderBottom={"1px solid #ebebeb"}  w={"100%"}mt={"-7px"} ></Box>
<Box  p={"9px"} borderBottom={"1px solid #ebebeb"}  w={"100%"}mt={"-7px"} ></Box>
                </Box>
                <Box fontStyle={"italic"} color={"#5c676d"} textAlign={"left"} ml={"3px"} textTransform={"lowercase"}>
                <Text  p={"10px"}>{singleProduct?.brand}</Text>
<Text p={"10px"}>{singleProduct?.color}</Text>
<Text p={"10px"}>{singleProduct?.material}</Text>
<Text p={"10px"}>{singleProduct?.size}</Text>
<Text p={"10px"}>{singleProduct?.finish_type}</Text>
                </Box>
                </Flex>
              </Box>
            </Flex>
            </Box>
    <Box>
    <Container maxW="80%" p={{ base: 5, md: 10 }} fontFamily={"poppins"} > 
        <Flex justify="center">
          <Heading as="h3" size="xl" pb={"20px"} fontStyle={"italic"} color={"#0b3954"}  fontWeight="lightbold" textAlign="left" fontFamily={"poppins"} mb={{ base: '4', md: '2' }}>
            Recent Reviews
          </Heading>
        </Flex>
        <Stack direction="column" spacing={5} my={4}>
          {singleProduct?.reviews?.map((el, index) => {
            return (
              <Stack bg={"#fafafa"} m={"auto"} w={["100%","85%"]} p={["05px","20px"]} borderRadius={"20px"} key={index} direction="column" >
                <HStack spacing={3}>
                  <Avatar size="md" name={el?.username} src={'https://media.geeksforgeeks.org/wp-content/uploads/20210209004403/AVATAR1.png'} />
                  <Flex direction="column">
                    <Text fontWeight="500" fontSize="md">
                      {el?.username}
                    </Text>
                    <Text fontWeight="light" fontSize="xs">
                      4 Oct 2022
                    </Text>
                  </Flex>
                </HStack>
                <Flex  fontSize={18} m={"8px 0"}>
          {new Array(Math.floor(el?.rating || 1)).fill(0).map((el, index) => (
            <Box key={index} m={"0px 1px"}>
              <FaStar color="#ffb128" />
            </Box>
          ))}
          {new Array(5 - Math.floor(el?.rating || 1)).fill(0).map((el, index) => (
            <Box key={index} m={"0px 1px"}>
              <FaStar color="grey" />
            </Box>
          ))}
        </Flex>
                <Text
     color={"#5c676d"} 
     fontFamily={"poppins"}
                  fontSize="16"
                  textAlign="left"
                  lineHeight="1.375"
                  fontWeight="400"
                >
                  {el?.comment}
                </Text>
              </Stack>
            );
          })}
        </Stack>
      </Container>
      </Box>
    </Box>
    </>
  )
};

  

  

 
