import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import { formatPrice } from './PriceTag'
import React, { useState } from 'react';



type OrderSummaryItemProps = {
  label: string
  value?: string
  children?: React.ReactNode
}
type CartOrderSummaryProps = {
  totalCartPrice: number; 
  cartItems: unknown;
};




const OrderSummaryItem = (props: OrderSummaryItemProps) => {


  const { label, value, children } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  )
}



export const CartOrderSummary = ({ cartItems, totalCartPrice }: CartOrderSummaryProps) => {

 
  const formattedPrice = formatPrice(totalCartPrice);
  console.log('Total Price:', totalCartPrice);
  console.log('Formatted Price:', formattedPrice);
  const [checkoutStatus, setCheckoutStatus] = useState('');



  const handleCheckout = async () => {
    try {
      const ordersData = [
        {
          cartItems: cartItems, 
          totalCartPrice: totalCartPrice, 
  
        },
      ];
      // Store the orders data in local storage
      localStorage.setItem('orders', JSON.stringify(ordersData));
      window.location.href = '/checkout';
    } catch (error) {
      console.error('Error placing order:', error);
      setCheckoutStatus('Error placing the order.');
    }
  };

  return (
    <Stack spacing="8" 
    borderWidth="1px" 
    padding="8" width="full" boxShadow='md' p='6' rounded='md' bg='white'>
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formattedPrice} />
        <OrderSummaryItem label="Shipping + Tax">
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formattedPrice}


          </Text>
        </Flex>
      </Stack>
    
      <Button
        bg="#0b3954"
        color="#ffb128"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={handleCheckout} 
      >
       Continue to checkout
      </Button>
      {checkoutStatus && <Text color={checkoutStatus.includes('Error') ? 'red' : 'green'}>{checkoutStatus}</Text>}
    </Stack>
  )
}