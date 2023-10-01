import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const OrderSummary: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0);

  useEffect(() => {
   
    const storedCartItems = localStorage.getItem('cartData');
    const storedTotalCartPrice = localStorage.getItem('cartPrice');

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    if (storedTotalCartPrice) {
      setTotalCartPrice(parseFloat(storedTotalCartPrice));
    }
  }, []);

  return (
    <Box boxShadow='2xl' 
    p='6' rounded='md' 
    bg='white'  
    marginTop={5}
     marginBottom={5} 
    // shadow={"dark-lg"}   
    borderRadius={10}  
    className="color-changing-box"
    transition="box-shadow 0.3s ease-in-out" 
    _hover={{
      boxShadow: "0px 0px 20px 0px #ffb128",
    }}
   >
   

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
      >
        {/* <Heading as="h1" size="xl" mb={6}>
          Cart Summary
        </Heading> */}
         <Heading as="h3" mt={4} mb={4}>
                    Order Summary
                    </Heading>

        <Stack spacing={4}>
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Flex
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  objectFit="cover"
                />
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  p={4}
                  flex="1"
                >
                  <Text fontSize="xl">{item.name}</Text>
                  <Text fontSize="lg">
                    Price: ${item.price.toFixed(1)}
                  </Text>
                </Flex>
              </Flex>
            </motion.div>
          ))}
        </Stack>
        <Box mt={6}>
          <Text fontSize="lg">
            Total Price: ${totalCartPrice.toFixed(1)}
          </Text>
        </Box>
      </Flex>
    </motion.div>
    </Box>
  );
};

export default OrderSummary;
