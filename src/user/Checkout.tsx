

import React, { useState } from 'react';
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa'


export const Checkout = () => {
 
  const [formData, setFormData] = useState({
    fullName: '',
    streetAddress: '',
    zipCode: '',
    city: '',
    emailAddress: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvc: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };






  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission here,send data to a server, process payment, etc.
    window.location.href = ('/order-confirmation');
  };

  return (
    <Container maxW="container.sm">
      <Heading as="h1" mt={8} mb={4}>
        Shipping Information
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="fullName">
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl id="streetAddress">
            <FormLabel>Street Address</FormLabel>
            <Input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl id="zipCode">
            <FormLabel>Zip Code</FormLabel>
            <Input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl id="emailAddress">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <Divider />

          <Heading as="h2" mt={4} mb={4}>
            Shipping Method
          </Heading>
          {/*shipping method options here */}

          <Divider />

          <Heading as="h2" mt={4} mb={4}>
            Payment Information
          </Heading>

          <FormControl id="cardNumber">
            <FormLabel>Credit Card Number</FormLabel>
            <Input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl id="cardName">
            <FormLabel>Name on Card</FormLabel>
            <Input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl id="expiryDate">
            <FormLabel>Expiry Date</FormLabel>
            <Input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl id="cvc">
            <FormLabel>CVV/CVC</FormLabel>
            <Input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <Divider />

          <Heading as="h2" mt={4} mb={4}>
            Order Summary
          </Heading>

          {/* order summary, discount code, subtotal, shipping cost, and order total here */}

          <Button
            type="submit"
            bg="#0b3954"
            color="#ffb128"
            size="lg"
            fontSize="md"
            rightIcon={<FaArrowRight />}
            
          >
            Complete Order
          </Button>
        </Stack>
      </form>
    </Container>
  );
};