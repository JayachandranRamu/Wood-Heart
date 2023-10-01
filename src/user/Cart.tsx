import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { CartItem } from './CartItem';
import { CartOrderSummary } from './CartOrderSummary';
import { userUrl } from '../UserPage/Utilis/api';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux"
import { DesktopNav } from "../UserPage/Components/BottomNavbar"
import FAQ from "../UserPage/Components/FAQ"
import Footer from "../UserPage/Components/Footer"
import TopNavbar from "../UserPage/Components/TopNavbar"
import { GetAllUserData } from "../Redux/Auth/action"
type CartItemData = {
  id: number;
  name: string;
  about: string;
  quantity: number;
  price: number;
  currency: string;
};



export const Cart = () => {
  let id=useSelector((store:any)=>store.authReducer.UserData)
  let cart=id.addToCart;
console.log(cart)
  const [cartItems, setCartItems] = useState<CartItemData[]>(cart);
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0);
  const isCartEmpty = cartItems.length === 0;

 

  const handleQuantityChange = (id: number, newQuantity: number) => {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      newCartItems[itemIndex].quantity = +newQuantity;
      setCartItems(newCartItems);
    
      localStorage.setItem('cartData', JSON.stringify(newCartItems));
    }
  };

  const handlePriceChange = (id: number, newPrice: number) => {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
   
      newCartItems[itemIndex].price = newPrice;
      setCartItems(newCartItems);
      
      localStorage.setItem('cartData', JSON.stringify(newCartItems));
    }
  };

  const handleRemoveItem = (id: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);

    localStorage.setItem('cartData', JSON.stringify(newCartItems));
  };

  const handleContinueShopping = () => {
   
    window.location.href = '/';
  };

  useEffect(() => {
 
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalCartPrice(newTotalPrice);
   
    localStorage.setItem('cartPrice', JSON.stringify(newTotalPrice));
  }, [cartItems]); 

  return (
    <>
    <TopNavbar />
    <DesktopNav />
    <Box
      boxShadow="dark-lg"
      borderRadius={10}
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
      color="#0b3954"
      marginTop={20}
      marginBottom={20}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({cartItems.length} items)
          </Heading>

          <Stack spacing="6">
            {cartItems.map((item) => (
              <CartItem
                image={''}
                key={item.id}
                {...item}
                onChangeQuantity={(newQuantity: number) =>
                  handleQuantityChange(item.id, newQuantity)
                }
                onPriceChange={(newPrice: number) =>
                  handlePriceChange(item.id, newPrice)
                }
                onClickDelete={() => handleRemoveItem(item.id)}
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          {isCartEmpty ? (
            <>
              <div role="img" aria-label="Empty Bag Emoji">
                🛍️
              </div>
              <h2 style={{ color: '#0b3954' }}> Your cart is empty</h2>
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
