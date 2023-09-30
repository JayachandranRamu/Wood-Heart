import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

const OrderConfirmation = () => {
  return (
    <div>
      <Heading as="h1">Order Confirmation</Heading>
     
      <Text>Your order has been successfully placed. Thank you!</Text>
    </div>
  );
};

export default OrderConfirmation;