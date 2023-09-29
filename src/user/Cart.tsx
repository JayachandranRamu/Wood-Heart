import React, { useState } from 'react';
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
import { cartData } from './_data';

export const Cart = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState(cartData);

  // Function to handle changing the quantity of a cart item
  const handleQuantityChange = (id, newQuantity) => {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex((item) =>item.id === id);
    if (itemIndex !== -1) {
      newCartItems[itemIndex].quantity = newQuantity;
      setCartItems(newCartItems);
    }
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };
  

  // Function to calculate the total cart price based on cart items
  const calculateTotalCartPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box
      boxShadow="dark-lg"
      borderRadius={10}
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
      color="#0b3954"
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
                key={item.id}
                {...item}
                onChangeQuantity={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                onClickDelete={() => handleRemoveItem(item.id)}
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary totalCartPrice={calculateTotalCartPrice()} />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('#0b3954', '#0b3954')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};
