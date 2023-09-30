import React, { useState , useEffect } from 'react';
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
// import { cartData } from './_data';

type CartItemData = {
  id: number;
  name: string;
  about: string;
  quantity: number;
  price: number;
  currency:string;
};

export const Cart = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState<CartItemData[]>([]);
  
  // const [cartItems, setCartItems] = useState<CartItemData[]>([]);


  const [totalCartPrice, setTotalCartPrice] = useState<number>(0);
  const isCartEmpty = cartItems.length === 0;
    
  useEffect(() => {
    // Check if cart data exists in local storage
    const localStorageCartData = localStorage.getItem('cartData');

    if (localStorageCartData) {
      // If cart data exists, parse it back to an array
      const cartItems = JSON.parse(localStorageCartData);
      setCartItems(cartItems);
    } else {
      // If cart data doesn't exist, fetch it from the server
      fetch('http://localhost:8080/user/10/') // Replace with the actual path to db.json
        .then((response) => response.json())
        .then((data) => {
          const cartItems = data.cartData;
          setCartItems(cartItems);

          // Store the fetched cart data in local storage
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
        })
        .catch((error) => {
          console.error('Error fetching cart data:', error);
        });
    }
  }, []);

  // Function to handle changing the quantity of a cart item
  const handleQuantityChange = (id: number, newQuantity: number) => {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex((item) =>item.id === id);
    if (itemIndex !== -1) {
      newCartItems[itemIndex].quantity = newQuantity;
      setCartItems(newCartItems);
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

  // Function to remove an item from the cart
  const handleRemoveItem = (id: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    localStorage.setItem('cartData', JSON.stringify(newCartItems));
  };


  const handleContinueShopping = () => {
   
    window.location.href =("/");
  };
    useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, item) => total + (item.price*item.quantity), 0);
    setTotalCartPrice(newTotalPrice);
    localStorage.setItem('cartPrice', JSON.stringify(newTotalPrice));
  }, [cartItems]);



  return (
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
              <h2 style={{ color:"#0b3954"}}> Your cart is empty</h2>
             
            </>
          ) : (
            <>
        <CartOrderSummary  cartItems={cartItems} 
              totalCartPrice={totalCartPrice}/>
      
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
  );
};