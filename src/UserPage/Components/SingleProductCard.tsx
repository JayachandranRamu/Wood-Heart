import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { CartDrawer } from "./CartDrawer";
import { AddProductReview, getSingleProductData } from "../Redux/UserPage/action";
import { AddCartProduct } from "../Redux/Auth/action";

export const SingleProductCard: React.FC = () => {
  let { id } = useParams();
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const d = new Date();
let name = d.getDate()+" "+month[d.getMonth()];
console.log(name)
  // Specify the type for 'name'
  const dispatch = useDispatch();

  //   let { singleProduct, isLoading, isError } = useSelector((store: RootState) => ({
  //     singleProduct: store.productReducer.singleProduct,
  //     isLoading: store.productReducer.isLoading,
  //     isError: store.productReducer.isError,
  //   }));





  let singleProduct = useSelector(
    (store: any) => store.productReducer.singleProduct
  );
  let UserData = useSelector((store: any) => store.authReducer.UserData);
  let isAuth = useSelector((store: any) => store.authReducer.isAuth);
  let Nav = useNavigate();
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 1000,
      precision: 0,
    });
  const toast = useToast();
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  console.log(input.value);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onClose() {
    setIsOpen(!isOpen);
  }
  function HandleAddCart() {
    if (!isAuth) {
      toast({
        title: "Kindly Login.",
        position: "top",
        description: "To add products to your cart.",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
      Nav("/");
    }

    let cartProduct = singleProduct;
    cartProduct.quantity = input.value;
    let b = UserData.addToCart.find((el:any) => el.id == cartProduct.id);
    console.log(b);
    if (b) {
      toast({
        title: "Product is Already in Cart.",
        position: "top",
        description: "Kindly,Go and check checkout page.",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    } else {
      UserData.addToCart.push(cartProduct);
      dispatch(AddCartProduct(UserData));
    }
    setIsOpen(!isOpen);
  }



  let [review,setReview]=useState("");
let [star,setStar]=useState(5);
  function StarEvents(i:any){
    setStar(i+1);
    
      }
  const GetStars = () => {
    const listItems = [];
    for (let i = 0; i < 5; i++) {
     
        
      if(i<star){
        listItems.push( <FaStar style={{color:"#ffb128"}}  onClick={()=>{StarEvents(i)}}/>);
       ;
      }else{
        listItems.push( <FaStar style={{color:"grey"}}  onClick={()=>{StarEvents(i)}}/>);
      }
     
    }
    return listItems;
  };
function handleReviewClick(){
  let obj={
    "username": UserData.username,
    "rating": star,
    "comment": review,
    "date": `${name} 2023`
  }
  console.log(obj);
  singleProduct.reviews.push(obj);
  let b=singleProduct;
  console.log(b);
  dispatch(AddProductReview(b,+singleProduct.id))
  setReview("");
  setStar(5);
}




  useEffect(() => {
    dispatch(getSingleProductData(id));
  }, []);

  // ... rest of your component code
  console.log(singleProduct, id);

  return (
    <>
      <Flex
        direction={["column", "column", "row"]}
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
          <Image
            src={singleProduct?.image}
            w={["500px", "500px", "500px"]}
            m={"50px auto"}
          />
        </Box>
        <Box
          bgColor={"white"}
          borderRadius={"20px"}
          w={["100%", "100%", "45%"]}
          p={"50px"}
          m={"auto"}
        >
          <Text
            color={"#0b3954"}
            textTransform={"uppercase"}
            fontSize={32}
            fontWeight={600}
          >
            {singleProduct?.name}
          </Text>
          <Text fontWeight={500}>$ {singleProduct?.price}</Text>
          <Flex alignItems={"center"} fontSize={18} m={"10px auto"}>
            {new Array(Math.floor(singleProduct?.rating || 1))
              .fill(0)
              .map((_, index) => (
                <Box key={index} m={"0px 1px"}>
                  <FaStar color="#ffb128" />
                </Box>
              ))}
            {new Array(5 - Math.floor(singleProduct?.rating || 1))
              .fill(0)
              .map((_, index) => (
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
              HandleAddCart();
            }}
            bgColor={"#2b3954"}
            color={"white"}
            colorScheme="#f8ac2a"
            size={"lg"}
            fontWeight={500}
            _hover={{ bgColor: "#e89f22" }}
            p={"20px 20px"}
            w={["100%", "100%", "70%"]}
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
        <Heading
          as="h3"
          size="xl"
          fontStyle={"italic"}
          color={"#0b3954"}
          fontWeight="lightbold"
          textAlign="center"
          fontFamily={"poppins"}
          mb={{ base: "4", md: "4" }}
        >
          Product Details
        </Heading>
        <Box
          m={["50px auto"]}
          w={["85%", "85%", "70%"]}
          borderRadius={"20px"}
          border={"1px solid #ebebeb"}
          p={[0, "10px", "20px"]}
        >
          <Flex
            alignItems={"center"}
            justifyContent={["center", "space-between"]}
            p={["5px", "5px", "20px"]}
          >
            <Box
              w={["40%", "40%", "20%"]}
              ml={[0, "20px"]}
              fontSize={"16"}
              color={"#444444"}
              fontWeight={"500"}
              p={["0", "0", "20px"]}
            >
              <Text p={"10px"}>Brand</Text>
              <Text p={"10px"}>Color</Text>
              <Text p={"10px"}>Material</Text>
              <Text p={"10px"}>Size</Text>
              <Text p={"10px"}>Finish Type</Text>
            </Box>
            <Box w={["60%", "60%", "80%"]} p={["5px", 0]}>
              <Flex>
                <Box
                  display={"inline-flex"}
                  pos={"relative"}
                  flexDirection={"column"}
                  gap={"30px"}
                  mr={"5px"}
                  alignItems={"center"}
                >
                  <Box
                    p={"6px"}
                    borderBottom={"1px solid #ebebeb"}
                    w={["40px", "120px", "600px"]}
                    mt={"10px"}
                  ></Box>
                  <Box
                    p={"10px"}
                    borderBottom={"1px solid #ebebeb"}
                    w={"100%"}
                    mt={"-5px"}
                  ></Box>
                  <Box
                    p={"9px"}
                    borderBottom={"1px solid #ebebeb"}
                    w={"100%"}
                    mt={"-5px"}
                  ></Box>
                  <Box
                    p={"9px"}
                    borderBottom={"1px solid #ebebeb"}
                    w={"100%"}
                    mt={"-7px"}
                  ></Box>
                  <Box
                    p={"9px"}
                    borderBottom={"1px solid #ebebeb"}
                    w={"100%"}
                    mt={"-7px"}
                  ></Box>
                </Box>
                <Box
                  fontStyle={"italic"}
                  color={"#5c676d"}
                  textAlign={"left"}
                  ml={"3px"}
                  textTransform={"lowercase"}
                >
                 
              
               
                
                 <Text p={"10px"}>{singleProduct?.brand}</Text>
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
          <Container maxW="80%" p={{ base: 5, md: 10 }} fontFamily={"poppins"}>
            <Flex justify="center">
              <Heading
                as="h3"
                size="xl"
                pb={"20px"}
                fontStyle={"italic"}
                color={"#0b3954"}
                fontWeight="lightbold"
                textAlign="left"
                fontFamily={"poppins"}
                mb={{ base: "4", md: "2" }}
              >
                Recent Reviews
              </Heading>
            </Flex>
            <Stack direction="column" spacing={5} my={4}>
              {singleProduct?.reviews?.map((el:any, index:any) => {
                return (
                  <Stack
                    bg={"#fafafa"}
                    m={"auto"}
                    w={["100%", "85%"]}
                    p={["05px", "20px"]}
                    borderRadius={"20px"}
                    key={index}
                    direction="column"
                  >
                    <HStack spacing={3}>
                      <Avatar
                        size="md"
                        name={el?.username}
                        src={
                          "https://media.geeksforgeeks.org/wp-content/uploads/20210209004403/AVATAR1.png"
                        }
                      />
                      <Flex direction="column">
                        <Text fontWeight="500" fontSize="md">
                          {el?.username}
                        </Text>
                        <Text fontWeight="light" fontSize="xs">
                         {(el.date)?el.date:"1 Oct 2023"}
                        </Text>
                      </Flex>
                    </HStack>
                    <Flex fontSize={18} m={"8px 0"}>
                      {new Array(Math.floor(el?.rating || 1))
                        .fill(0)
                        .map((_, index) => (
                          <Box key={index} m={"0px 1px"}>
                            <FaStar color="#ffb128" />
                          </Box>
                        ))}
                      {new Array(5 - Math.floor(el?.rating || 1))
                        .fill(0)
                        .map((_, index) => (
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
           {isAuth && <Stack
                    bg={"#fafafa"}
                    m={"auto"}
                    w={["100%", "85%"]}
                    p={["05px", "20px"]}
                    borderRadius={"20px"}
                    
                    direction="column"
                  >
                    <HStack spacing={3}>
                      <Avatar
                        size="md"
                       
                        src={
                          "https://media.geeksforgeeks.org/wp-content/uploads/20210209004403/AVATAR1.png"
                        }
                      />
                      <Flex direction="column">
                        <Text fontWeight="500" fontSize="md">
                     {UserData.username}
                        </Text>
                        <Text fontWeight="light" fontSize="xs">
                        {name} 2023
                        </Text>
                      </Flex>
                    </HStack>
                    <Flex fontSize={18} m={"8px 0"}>
                    {GetStars()}
                    </Flex>
                 
                    <InputGroup size='md'>
                    <Input
                      color={"#5c676d"}
                      bg={"white"}
                      fontFamily={"poppins"}
                      fontSize="16"
                      textAlign="left"
                      placeholder="Write Your Review"
                      lineHeight="1.375"
                      fontWeight="400"
                      value={review}
                      onChange={(e)=>{setReview(e.target.value)}}
                      autoFocus
                    >
                     </Input>
      <InputRightElement width='4.5rem' pr={"5px"}>
        <Button h='1.75rem' size='sm' p={"auto 10px"}  bgColor={"#2b3954"}
            color={"white"}
            colorScheme="#f8ac2a"
            fontWeight={500}
            _hover={{ bgColor: "#e89f22" }}
       
        
            borderRadius={"8px"}
          
         onClick={handleReviewClick}
         >
         SUBMIT
        </Button>
      </InputRightElement>
    </InputGroup>
                  </Stack>}
          </Container>
        </Box>
      </Box>
    </>
  );
};
