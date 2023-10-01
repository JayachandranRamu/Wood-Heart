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

type CartItemData = {
  id: number;
  name: string;
  category: string;
  // about: string;
  quantity: number;
  price: number;
  currency: string;
};

const id = 10;

export const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItemData[]>([]);
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0);
  const isCartEmpty = cartItems.length === 0;


  // Function to calculate the total cart price
  const calculateTotalCartPrice = () => {
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalCartPrice(newTotalPrice);
    localStorage.setItem('cartPrice', JSON.stringify(newTotalPrice));
  };

 

  useEffect(() => {
    const localStorageCartData = localStorage.getItem('cartData');

    if (localStorageCartData) {
      const cartItems = JSON.parse(localStorageCartData);
      setCartItems(cartItems);
    } else {

      fetch(`http://localhost:8000/user/${id}/`)

        .then((response) => response.json())
        .then((data) => {
          const cartItems = data.cartData.map((item: CartItemData) => ({
            ...item,
            quantity: parseInt(`${item.quantity}`),
            price: parseFloat(`${item.price}`),
          }));
          setCartItems(cartItems);
          
          localStorage.setItem('cartData', JSON.stringify(cartItems));
        })
        .catch((error) => {
          console.error('Error fetching cart data:', error);
        });
    }
  }, []); 

// useEffect to update total cart price whenever cart items change
useEffect(() => {
  calculateTotalCartPrice(); // Initial calculation when component mounts
}, [cartItems]);

  // const handleQuantityChange = (itemid: number, newQuantity: number) => {
  //   const newCartItems = [...cartItems];
  //   const itemIndex = newCartItems.findIndex((item) => item.id === itemid);
  //   if (itemIndex !== -1) {
  //     newCartItems[itemIndex].quantity = newQuantity;
  //     setCartItems(newCartItems);
    
  //     localStorage.setItem('cartData', JSON.stringify(newCartItems));
  //   }
  // };

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        item.quantity = newQuantity;
      }
      return item;
    });
    setCartItems(newCartItems);
    localStorage.setItem('cartData', JSON.stringify(newCartItems));
    calculateTotalCartPrice(); // Calculate total cart price when quantity changes
  };


  const handlePriceChange = (itemid: number, newPrice: number) => {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex((item) => item.id === itemid);
    if (itemIndex !== -1) {
   
      newCartItems[itemIndex].price = newPrice;
      setCartItems(newCartItems);
      
      localStorage.setItem('cartData', JSON.stringify(newCartItems));
    }
  };

  

  const handleRemoveItem = (itemid: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemid);
    setCartItems(newCartItems);

    localStorage.setItem('cartData', JSON.stringify(newCartItems));
  };

  const handleContinueShopping = () => {
   
    window.location.href = '/';
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
      marginTop={10}
      marginBottom={10}
     className="color-changing-box"
     transition="box-shadow 0.3s ease-in-out" 
     _hover={{
       boxShadow: "0px 0px 20px 0px #ffb128",
     }}
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
            
                color={''}
                 about={''} 
                 image={''}
                key={item.id}
                {...item}
                onChangeQuantity={(newQuantity: number) => handleQuantityChange(item.id, newQuantity)}
                onPriceChange={(newPrice: number) => handlePriceChange(item.id, newPrice)}
                onClickDelete={() => handleRemoveItem(item.id)}              />
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
  );
};
