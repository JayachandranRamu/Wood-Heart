
import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import OrderSummary from './OrderSummary';

import { ChakraProvider, Icon } from '@chakra-ui/react';
import { FaCcVisa, FaCcAmex, FaCcMastercard, FaCcDiscover } from 'react-icons/fa';
import Footer from "../UserPage/Components/Footer";
import FAQ from "../UserPage/Components/FAQ";
import { DesktopNav } from "../UserPage/Components/BottomNavbar";

import TopNavbar from "../UserPage/Components/TopNavbar"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddCartProduct } from "../UserPage/Redux/Auth/action";


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

let Nav=useNavigate()
  const toast = useToast()
  let dispatch=useDispatch();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
//   let Data=useSelector((store:any)=>store.authReducer.UserData)
//   let cartItems=Data.addToCart;
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
// Data.orders=cartItems;
// Data.addToCart=[];
// dispatch(AddCartProduct(Data));

//     toast({
//       position: 'top',
//       title: 'Ordered Succesfully',
//       description: "You orders are now placed successfully.",
//       status: 'success',
//       duration: 2000,
//       isClosable: true,
//     })
//    Nav("/");
    
//   };

  let Data=useSelector((store:any)=>store.authReducer.UserData)
  let cartItems=Data.addToCart;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

Data.orders=[...Data.orders,...cartItems];
Data.addToCart=[];
dispatch(AddCartProduct(Data));

   Nav("/");
   toast({
    position: 'top',
    title: 'Ordered Succesfully',
    description: "You orders are now placed successfully.",
    status: 'success',
    duration: 2000,
    isClosable: true,
  })
  alert("Ordered Succesfully");
  };


  
  const [isSameAddress, setIsSameAddress] = useState(true);
    // const TotalCartPrice = localStorage.getItem('cartPrice');
  return (
    <>
    <TopNavbar />
    <DesktopNav />

    <Box 
  
    w={"100%"}
    borderRadius={10}  
    color="#0b3954"
 m={"auto"}
 pt={"50px"}
    bg={"#f5f5f5"}
    fontFamily={"poppins"}
 
    >
      <Text fontSize={["32","48"]} fontWeight={"600"} bgColor={"#f5f5f5"}  textAlign={"center"} pb={"50px"} fontFamily={"poppins"} >
            CheckOut Page</Text>

      <Flex   justify="center" margin={["20px",0]}  bgColor={"#f5f5f5"} align="center"  >
        {cartItems && cartItems.length > 0 ? (
          <form   onSubmit={handleSubmit} >
                <Flex   bgColor={"#f5f5f5"} >
                    {/* order summary */}
                    
                        <OrderSummary />
                        </Flex>


            <Divider />
            {/* Billing Address */}
            <Box 
             boxShadow='2xl'
              p='6' 
             rounded='md' bg='white'  
             marginTop={5}
             marginBottom={5} 
              borderRadius={20}
              className="color-changing-box"
              transition="box-shadow 0.3s ease-in-out" 
              _hover={{
                boxShadow: "0px 0px 20px 0px #ffb128",
              }}
              
               >
            <Grid templateColumns="1fr" gap={3}   >
              <Heading fontFamily={"poppins"} as="h3" size="lg">
                Billing Address
              </Heading>
              <FormControl id="name">
                <FormLabel>Full Name</FormLabel>
                <Input type="text" placeholder="Enter Your Name" name="username"  value={formData.username}
              onChange={handleInputChange}
              />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter Your Email"  name="email"
              value={formData.email}
              onChange={handleInputChange}
              required />
              </FormControl>
              <FormControl id="address">
                <FormLabel>Address</FormLabel>
                <Input type="text" placeholder="Enter Your Address"   name="street"
              value={formData.street}
              onChange={handleInputChange}
              required />
              </FormControl>
              <Grid templateColumns="1fr 1fr 1fr" gap={3}>
              <FormControl id="city">
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder="City"  name="city"
              value={formData.city}
              onChange={handleInputChange}
              required />
              </FormControl>
             
                <FormControl id="state">
                  <FormLabel>State</FormLabel>
                  <Input type="text" placeholder="State"  name="state"
              value={formData.state}
              onChange={handleInputChange}
               />
                </FormControl>
                <FormControl id="zip">
                  <FormLabel>Pincode</FormLabel>
                  <Input type="number" placeholder="Pincode"   name="zipCode"
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
              borderRadius={20}
              className="color-changing-box"
              transition="box-shadow 0.3s ease-in-out" 
              _hover={{
                boxShadow: "0px 0px 20px 0px #ffb128",
              }}
               >
            {/* Payment */}
            <Grid templateColumns="1fr" 
            gap={3} mt={4}  
         
            marginBottom={10}>
              <Heading fontFamily={"poppins"} as="h3" size="lg">
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
              placeholder="Enter Your Name" 
              required/>
              </FormControl>
              <FormControl id="ccn">
                <FormLabel>Credit Card Number</FormLabel>
                <Input type="number" placeholder="XXXX XXXX XXXX XXXX"  name="cardNumber"
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
                  <Input type="number" placeholder="XXX"  name="cvc"
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
              borderRadius={20}
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
                  <Input type="text" placeholder="Enter Your Name" />
                </FormControl>
                <FormControl id="address2">
                <FormLabel>Address</FormLabel>
                <Input type="text" placeholder="Enter Your Address" />
              </FormControl>
              <Grid templateColumns="1fr 1fr 1fr" gap={3}>
              <FormControl id="city2">
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder="City" />
              </FormControl>
                <FormControl id="state2">
                  <FormLabel>State</FormLabel>
                  <Input type="text" placeholder="State" />
                </FormControl>
                <FormControl id="zip2">
                  <FormLabel>Pincode</FormLabel>
                  <Input type="number" placeholder="Pincode" />
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
          <Box m={"auto"} justifyContent={"center"}>
            <Button type="submit" 
            // colorScheme="blue" mt={4} 
            //  bg="#0b3954"
            // color="#ffb128"
            // size="lg"
            // fontSize="md"
            marginTop={10}
            marginBottom={20}
 
            bg="#0b3954"
            color="white"
            size="lg"
            letterSpacing={"1px"}
            fontWeight={"500"}
            fontSize="18px"
    _hover={
      {bg:"#e89f22"}}
      w={"100%"}
            >
            COMPLETE ORDER
            </Button>
            </Box>

          </form>
            ) : (
          <Box>
            <Text color="#0b3954"><h1>Your cart is empty.</h1></Text>
          </Box>
            )}

      </Flex>
    </Box>
       <FAQ />
       
       <Footer />
       </>
  );
};
