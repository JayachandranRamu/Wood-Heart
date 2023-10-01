import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from 'react-icons/fa';
import OrderSummary from './OrderSummary';

import { ChakraProvider, Icon } from '@chakra-ui/react';
import { FaCcVisa, FaCcAmex, FaCcMastercard, FaCcDiscover } from 'react-icons/fa';

   


export const Checkout = () => {


  const [formData, setFormData] = useState({
    username:'',
    street: '',
    state:'',
    zipCode: '',
    city: '',
    email: '',
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

    const orderedData = JSON.parse(localStorage.getItem('ordered_data') || '[]');
    orderedData.push(formData);
    localStorage.setItem('ordered_data', JSON.stringify(orderedData));

    alert('Your order has been successfully placed. Thank you!');
    window.location.href = '/';
  };


  const cartItems = localStorage.getItem('cartData') || [];
  const [isSameAddress, setIsSameAddress] = useState(true);
    // const TotalCartPrice = localStorage.getItem('cartPrice');
  return (
    <Container maxW="container.sm"
    // shadow={"dark-lg"}   
    borderRadius={10}  
    color="#0b3954"
    marginTop={20}
    marginBottom={20}
    
    // _hover={{
    //   boxShadow: "0px 0px 20px 0px #ffb128",
    //   transition: "box-shadow 0.3s ease-in-out",
    // }}
    // _focus={{
    //   boxShadow: "0px 0px 20px 0px #0b3954",
    //   transition: "box-shadow 0.3s ease-in-out",
    // }}
    // _active={{
    //   boxShadow: "0px 0px 20px 0px #0b3954",
    //   transition: "box-shadow 0.3s ease-in-out",
    // }}
    
    >
      <Flex justify="center" align="center" minH="100vh">
        {cartItems && cartItems.length > 0 ? (
          <form onSubmit={handleSubmit}>
                <Grid templateColumns="1fr" gap={3} >
                    {/* order summary */}
                    
                        <OrderSummary />
                        </Grid>


            <Divider />
            {/* Billing Address */}
            <Box 
             boxShadow='2xl'
              p='6' 
             rounded='md' bg='white'  
             marginTop={5}
             marginBottom={5} 
              borderRadius={10}
              className="color-changing-box"
              transition="box-shadow 0.3s ease-in-out" 
              _hover={{
                boxShadow: "0px 0px 20px 0px #ffb128",
              }}
               >
            <Grid templateColumns="1fr" gap={3}   >
              <Heading as="h3" size="lg">
                Billing Address
              </Heading>
              <FormControl id="name">
                <FormLabel>Full Name</FormLabel>
                <Input type="text" placeholder="Gauri Bidwai"  value={formData.username}
              onChange={handleInputChange}
              />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="gauribi@example.com"  name="email"
              value={formData.email}
              onChange={handleInputChange}
              required />
              </FormControl>
              <FormControl id="address">
                <FormLabel>Address</FormLabel>
                <Input type="text" placeholder="chat Street ,sadhu vihar"   name="street"
              value={formData.street}
              onChange={handleInputChange}
              required />
              </FormControl>
              <Grid templateColumns="1fr 1fr 1fr" gap={3}>
              <FormControl id="city">
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder="India"  name="city"
              value={formData.city}
              onChange={handleInputChange}
              required />
              </FormControl>
             
                <FormControl id="state">
                  <FormLabel>State</FormLabel>
                  <Input type="text" placeholder="MH"  name="state"
              value={formData.state}
              onChange={handleInputChange}
               />
                </FormControl>
                <FormControl id="zip">
                  <FormLabel>Zip</FormLabel>
                  <Input type="number" placeholder="40001"   name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              required/>
                </FormControl>
              </Grid>
            </Grid>
            </Box>
            <Divider />

            <Box 
             boxShadow='2xl'
              p='6' 
             rounded='md' bg='white'  
             marginTop={5}
             marginBottom={5} 
              borderRadius={10}
              className="color-changing-box"
              transition="box-shadow 0.3s ease-in-out" 
              _hover={{
                boxShadow: "0px 0px 20px 0px #ffb128",
              }}
               >
            {/* Payment */}
            <Grid templateColumns="1fr" 
            gap={3} mt={4}  
            marginTop={10}
            marginBottom={10}>
              <Heading as="h3" size="lg">
                Payment
              </Heading>
              <Stack spacing={4}>
                <Text fontSize="lg">Accepted Cards</Text>
                <ChakraProvider>
                  <Flex>
                  <Icon
                      as={FaCcVisa}
                      aria-label="visa"
                      boxSize={12}
                      color="blue.500"
                      boxShadow="md"
                      border="1px solid snow"
                      borderRadius="10px"
                      margin="8px"
                      padding="4px"
                    />
                    <Icon
                      as={FaCcAmex}
                      aria-label="amex"
                      boxSize={12}
                      color="green.500"
                      boxShadow="md"
                      border="1px solid snow"
                      borderRadius="10px" 
                      margin="8px"
                      padding="4px"
                    />
                    <Icon
                      as={FaCcMastercard}
                      aria-label="mastercard"
                      boxSize={12}
                      color="red.500"
                      boxShadow="md"
                      border="1px solid snow"
                      borderRadius="10px" 
                      margin="8px"
                      padding="4px"
                    />
                    <Icon
                      as={FaCcDiscover}
                      aria-label="discover"
                      boxSize={12}
                      color="orange.500"
                      boxShadow="md"
                      border="1px solid snow"
                      borderRadius="10px" 
                      margin="8px"
                      padding="4px"
                    />
                  </Flex>
                </ChakraProvider>
              </Stack>
              <FormControl id="nameoncard">
                <FormLabel>Name on Card</FormLabel>
                <Input type="text"  name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
              placeholder="Gauri A. Bidwai" 
              required/>
              </FormControl>
              <FormControl id="ccn">
                <FormLabel>Credit Card Number</FormLabel>
                <Input type="number" placeholder="1111-2222-3333-4444"  name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required/>
              </FormControl>
              <Grid gridTemplateColumns="1fr 1fr" gap={4}>
              <FormControl id="expmonth">
                <FormLabel>MM / YY</FormLabel>
                <Input type="month" placeholder="September"  name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required/>
              </FormControl>
              
                <FormControl id="cvv">
                  <FormLabel>CVV</FormLabel>
                  <Input type="number" placeholder="665"  name="cvc"
              value={formData.cvc}
              onChange={handleInputChange}
              required/>
                </FormControl>
              </Grid>
            </Grid>
            </Box>
            
            <Box 
             boxShadow='2xl'
              p='6' 
             rounded='md' bg='white'  
             marginTop={5}
             marginBottom={5} 
              borderRadius={10}
              className="color-changing-box"
              transition="box-shadow 0.3s ease-in-out" 
              _hover={{
                boxShadow: "0px 0px 20px 0px #ffb128",
              }}
               >
            {!isSameAddress && (
                <form action="">
            <Grid templateColumns="1fr" gap={3} mt={4}>
                <Heading as="h3" size="lg">
                  Shipping Address
                </Heading>
                <FormControl id="shipping-fullname">
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" placeholder="Gauri A. Bidwai" />
                </FormControl>
                <FormControl id="address2">
                <FormLabel>Address</FormLabel>
                <Input type="text" placeholder="chat Street ,sadhu vihar" />
              </FormControl>
              <Grid templateColumns="1fr 1fr 1fr" gap={3}>
              <FormControl id="city2">
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder="India" />
              </FormControl>
                <FormControl id="state2">
                  <FormLabel>State</FormLabel>
                  <Input type="text" placeholder="MH" />
                </FormControl>
                <FormControl id="zip2">
                  <FormLabel>Zip</FormLabel>
                  <Input type="number" placeholder="400001" />
                </FormControl>
                </Grid>
                </Grid>
              </form>
              
            )}
            <FormControl>
              <FormLabel htmlFor="issameaddress">
                <Checkbox id="issameaddress"    isChecked={isSameAddress}
                  onChange={() => setIsSameAddress(!isSameAddress)}>
                  Shipping address same as billing
                </Checkbox>
              </FormLabel>
            </FormControl>
            </Box>
          
            <Button type="submit" 
            colorScheme="blue" mt={4} 
             bg="#0b3954"
            color="#ffb128"
            size="lg"
            fontSize="md"
            marginTop={10}
            marginBottom={20}
            rightIcon={<FaArrowRight />}
            >
            Complete Order
            </Button>
          </form>
            ) : (
          <Box>
            <Text color="#0b3954"><h1>Your cart is empty.</h1></Text>
          </Box>
            )}

      </Flex>
    </Container>
  );
};


