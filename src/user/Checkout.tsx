

// import React, { useState } from 'react';
// import {
//     Button,
//     Box,
//     Divider,
//     FormControl,
//     FormLabel,
//     Heading,
//     Input,
//     Stack,
  
//   } from '@chakra-ui/react';
//   import { FaArrowRight } from 'react-icons/fa';
//   import OrderSummary from './OrderSummary';
  

//   export const Checkout = () => {
//     const [formData, setFormData] = useState({
//       fullName: '',
//       streetAddress: '',
//       zipCode: '',
//       city: '',
//       emailAddress: '',
//       cardNumber: '',
//       cardName: '',
//       expiryDate: '',
//       cvc: '',
//     });
  

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const orderedData = JSON.parse(localStorage.getItem('ordered_data') || '[]');
//     orderedData.push(formData);
//     localStorage.setItem('ordered_data', JSON.stringify(orderedData));

//     alert('Your order has been successfully placed. Thank you!');
//     window.location.href = '/';
//   };

//   return (
//     <Box maxW="container.sm"  
//     display="grid"
//       boxShadow="dark-lg"
//       borderRadius={10}
//       mx="auto"
//       px={{ base: '4', md: '8', lg: '12' }}
//       py={{ base: '6', md: '8', lg: '12' }}
//       color="#0b3954"
//       marginTop={20}
//       marginBottom={20}>


//       <Heading as="h1" mt={8} mb={4}>
//         Shipping Information
//       </Heading>
//       <form onSubmit={handleSubmit}>
//         <Stack spacing={4}>
//           <FormControl id="fullName">
//             <FormLabel>Full Name</FormLabel>
//             <Input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>

//           <FormControl id="streetAddress">
//             <FormLabel>Street Address</FormLabel>
//             <Input
//               type="text"
//               name="streetAddress"
//               value={formData.streetAddress}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>

//           <FormControl id="zipCode">
//             <FormLabel>Zip Code</FormLabel>
//             <Input
//               type="text"
//               name="zipCode"
//               value={formData.zipCode}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>

//           <FormControl id="city">
//             <FormLabel>City</FormLabel>
//             <Input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>

//           <FormControl id="emailAddress">
//             <FormLabel>Email Address</FormLabel>
//             <Input
//               type="email"
//               name="emailAddress"
//               value={formData.emailAddress}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>

//           <Divider />

//           <Heading as="h2" mt={4} mb={4}>
//             Payment Information
//           </Heading>

//           <FormControl id="cardNumber">
//             <FormLabel>Credit Card Number</FormLabel>
//             <Input
//               type="text"
//               name="cardNumber"
//               value={formData.cardNumber}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>

//           <FormControl id="cardName">
//             <FormLabel>Name on Card</FormLabel>
//             <Input
//               type="text"
//               name="cardName"
//               value={formData.cardName}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>

//           <FormControl id="expiryDate">
//             <FormLabel>Expiry Date</FormLabel>
//             <Input
//               type="text"
//               name="expiryDate"
//               value={formData.expiryDate}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>

//           <FormControl id="cvc">
//             <FormLabel>CVV/CVC</FormLabel>
//             <Input
//               type="text"
//               name="cvc"
//               value={formData.cvc}
//               onChange={handleInputChange}
//               required
//             />
//           </FormControl>

//           <Divider />

//           <Heading as="h2" mt={4} mb={4}>
//             Order Summary
//           </Heading>

//           {/* order summary, discount code, subtotal, shipping cost, and order total here */}
         
//               <OrderSummary />
           

//             <Divider />
//           <Button
//             type="submit"
//             bg="#0b3954"
//             color="#ffb128"
//             size="lg"
//             fontSize="md"
//             rightIcon={<FaArrowRight />}
            
//           >
//             Complete Order
//           </Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// };






import React, { useState } from "react";
import {
  Box,
  Button,
//   Divider,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
//   GridItem,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
// import { FaArrowRight } from 'react-icons/fa';
// import OrderSummary from './OrderSummary';


export const Checkout = () => {
//   Define your cart items and other variables here

//   const [formData, setFormData] = useState({
//     fullName: '',
//     streetAddress: '',
//     zipCode: '',
//     city: '',
//     emailAddress: '',
//     cardNumber: '',
//     cardName: '',
//     expiryDate: '',
//     cvc: '',
//   });

  const cartItems = localStorage.getItem('cartData') || [];
  const [isSameAddress, setIsSameAddress] = useState(true);
    // const TotalCartPrice = localStorage.getItem('cartPrice');
  return (
    <Container maxW="xl">
      <Flex justify="center" align="center" minH="100vh">
        {cartItems && cartItems.length > 0 ? (
          <form>
            {/* Billing Address */}
            <Grid templateColumns="1fr" gap={4}>
              <Heading as="h3" size="lg">
                Billing Address
              </Heading>
              <FormControl id="fullname">
                <FormLabel>Full Name</FormLabel>
                <Input type="text" placeholder="Gauri A. Bidwai" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="gauribi@example.com" />
              </FormControl>
              <FormControl id="address">
                <FormLabel>Address</FormLabel>
                <Input type="text" placeholder="chat Street ,sadhu vihar" />
              </FormControl>
              <FormControl id="city">
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder="India" />
              </FormControl>
              <Grid templateColumns="1fr 1fr" gap={4}>
                <FormControl id="state">
                  <FormLabel>State</FormLabel>
                  <Input type="text" placeholder="MH" />
                </FormControl>
                <FormControl id="zip">
                  <FormLabel>Zip</FormLabel>
                  <Input type="text" placeholder="40001" />
                </FormControl>
              </Grid>
            </Grid>

            {/* Payment */}
            <Grid templateColumns="1fr" gap={4} mt={4}>
              <Heading as="h3" size="lg">
                Payment
              </Heading>
              <Stack spacing={4}>
                <Text fontSize="lg">Accepted Cards</Text>
                <Flex>
                  <i className="fab fa-cc-visa" aria-label="visa" />
                  <i className="fab fa-cc-amex" aria-label="amex" />
                  <i className="fab fa-cc-mastercard" aria-label="mastercard" />
                  <i className="fab fa-cc-discover" aria-label="discover" />
                </Flex>
              </Stack>
              <FormControl id="nameoncard">
                <FormLabel>Name on Card</FormLabel>
                <Input type="text" placeholder="Gauri A. Bidwai" />
              </FormControl>
              <FormControl id="ccn">
                <FormLabel>Credit Card Number</FormLabel>
                <Input type="text" placeholder="1111-2222-3333-4444" />
              </FormControl>
              <FormControl id="expmonth">
                <FormLabel>Exp Month</FormLabel>
                <Input type="text" placeholder="September" />
              </FormControl>
              <Grid templateColumns="1fr 1fr" gap={4}>
                <FormControl id="expyear">
                  <FormLabel>Exp Year</FormLabel>
                  <Input type="text" placeholder="2027" />
                </FormControl>
                <FormControl id="cvv">
                  <FormLabel>CVV</FormLabel>
                  <Input type="text" placeholder="665" />
                </FormControl>
              </Grid>
            </Grid>

            {!isSameAddress && (
                  
                <form action="">
            <Grid templateColumns="1fr" gap={4} mt={4}>
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
              <FormControl id="city2">
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder="India" />
              </FormControl>
              </Grid>
              <Grid templateColumns="1fr 1fr" gap={4}>
                <FormControl id="state2">
                  <FormLabel>State</FormLabel>
                  <Input type="text" placeholder="MH" />
                </FormControl>
                <FormControl id="zip2">
                  <FormLabel>Zip</FormLabel>
                  <Input type="text" placeholder="400001" />
                </FormControl>
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

          
            <Button type="submit" colorScheme="blue" mt={4}>
              Continue to checkout
            </Button>
          </form>
            ) : (
          <Box>
            <Text>Your cart is empty.</Text>
          </Box>
            )}

      </Flex>
    </Container>
  );
};


