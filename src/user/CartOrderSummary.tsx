import {
  Button,
  Flex,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'

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
      <Text fontWeight="medium" fontSize={"16px"} letterSpacing={"1px"} color={mode('gray.600', 'gray.400')}>
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
    padding="8" width="full" 
    fontFamily={"poppins"} bgColor={"white"} p={"40px"} borderRadius={"20px"}  >
      <Text fontSize={"20px"} fontWeight={"lightbold"} size="md" fontFamily={"poppins"}>Order Summary</Text>

      <Stack spacing="6">
        <OrderSummaryItem  label="Subtotal" value={formattedPrice} />
        {/* <OrderSummaryItem label="Shipping + Tax">
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem> */}
        <Flex justify="space-between">
          <Text fontSize="22px" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="22px" fontWeight="bold" letterSpacing={"1px"}>
            {formattedPrice}


          </Text>
        </Flex>
      </Stack>
    
      <Button
        bg="#0b3954"
        color="white"
        size="lg"
        letterSpacing={"1px"}
        fontWeight={"500"}
        fontSize="18px"
_hover={
  {bg:"#e89f22"}
}
        onClick={handleCheckout} 
      >
       CHECKOUT
      </Button>
      {checkoutStatus && <Text color={checkoutStatus.includes('Error') ? 'red' : 'green'}
      >{checkoutStatus}</Text>}
    </Stack>
  )
}