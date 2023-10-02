import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
  Text,
} from '@chakra-ui/react';
import { CartItem } from './CartItem';
import { CartOrderSummary } from './CartOrderSummary';

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux"
import { DesktopNav } from "../UserPage/Components/BottomNavbar"
import FAQ from "../UserPage/Components/FAQ"
import Footer from "../UserPage/Components/Footer"
import TopNavbar from "../UserPage/Components/TopNavbar"

import { AddCartProduct } from '../UserPage/Redux/Auth/action';




export const Cart = () => {
  let Data=useSelector((store:any)=>store.authReducer.UserData)
  let cartItems=Data.addToCart;


  const [totalCartPrice, setTotalCartPrice] = useState<number>(0);
  const isCartEmpty = cartItems.length === 0;
let [render,setRender]=useState(false)
 let dispatch=useDispatch();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    console.log(newQuantity)
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex((item) => item.id === id);
    console.log(newQuantity)
      newCartItems[itemIndex].quantity = newQuantity;
      setRender(!render)
    Data.addToCart=newCartItems;
   console.log(Data)
    dispatch(AddCartProduct(Data));
  };

  const handlePriceChange = ( newPrice: number) => {
    // const newCartItems = [...cartItems];
    // const itemIndex = newCartItems.findIndex((item) => item.id === id);
    // if (itemIndex !== -1) {  
    //   newCartItems[itemIndex].price = newPrice;
    //   setCartItems(newCartItems);
    setRender(!render)
    console.log(newPrice)
    // }
  };

  const handleRemoveItem = (id: number) => {
    const newCartItems = cartItems.filter((item:any) => item.id !== id);
    console.log(newCartItems)
  
    Data.addToCart=newCartItems;
   setRender(!render)
  dispatch(AddCartProduct(Data));

  };

  const handleContinueShopping = () => {
    window.location.href = '/';
  };

  useEffect(() => {
 let sum=0;
   cartItems.map((el:any)=>{
    console.log(sum,el.price,el.quantity)
    sum+=+el.price*(+el.quantity)});
    setTotalCartPrice(sum);
    console.log(sum)
  }, [cartItems,render]); 

  return (
    <>
    <TopNavbar />
    <DesktopNav />

   
    <Box
    fontFamily={"Poppins"}
    bgColor={"#f5f5f5"}

    
      mx="auto"
     p={["20px","100px"]}
     pt={"60px"}

      color="#0b3954"

    >
      <Text fontSize={["32","48"]} fontWeight={"600"} bgColor={"#f5f5f5"}  textAlign={"center"} pb={"50px"} fontFamily={"poppins"} >
            Cart Page</Text>
            {cartItems.length<0?<Text textAlign={"center"} fontSize={"25px"} textTransform={"uppercase"}>Your Cart Is Currently Empty !</Text>:null}
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex="2" >
\
       

          <Stack spacing="6"  >
            {cartItems.map((item:any) => (
              <CartItem
                image={''}
                quan={item.quantity}
                key={item.id}
                {...item}
                onChangeQuantity={
                  handleQuantityChange
                }
                onPriceChange={(newPrice: number) =>
                  handlePriceChange( newPrice)
                }
                onClickDelete={() => handleRemoveItem(item.id)}
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          {isCartEmpty ? (
            <>
            <Box m={"auto"}>
  
              <h2 style={{ color: '#0b3954',fontFamily:'poppins',fontSize:'20px' }}></h2>
              </Box>
            </>
          ) : (
            <>
              <CartOrderSummary cartItems={cartItems} totalCartPrice={totalCartPrice} />

              <HStack mt="6" fontWeight="semibold">
                <p>or</p>
                <Link color={mode('#0b3954', '#0b3954')} onClick={handleContinueShopping}>
                  Continue shopping
                </Link>
              </HStack>
            </>
          )}
        </Flex>
      </Stack>
    </Box>
     <FAQ />
       
     <Footer />
     </>
  );
};
