import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"
export function CartDrawer({onOpen,onClose}:any) {
console.log(onOpen)
    function onClosed(){
        onClose(false);
    }
    return (
      <>
     
        <Drawer
          isOpen={onOpen}
          placement='right'
          onClose={onClosed}
size={"sm"} 
        >
          <DrawerOverlay />
          <DrawerContent fontFamily={"poppins"}>
          <DrawerCloseButton />
            <DrawerHeader>
        
                <Text mb={"15px"} color={"#2b3954"} letterSpacing={"1px"} textAlign={"center"} fontSize={"25px"} fontWeight={"600"}>
                CART
                </Text>
                <hr />
                </DrawerHeader>
                
            <DrawerBody>
           
              <Flex>
                <Flex w={"100%"} m={"auto"}>
                <Box w={"50%"}>
                  <Image src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n9z22hla9a1iopdhugz5.png">

                  </Image>
                </Box>
                <Box>
<Text>Chairdfdf</Text>
<Text>Pricedfdfdf</Text>
                </Box>
                </Flex>
               
              </Flex>
            </DrawerBody>
  
            <DrawerFooter>
              <Box>

              </Box>
              <Button  colorScheme='white' fontSize={"16"} fontWeight={"400"}  bg={"#2b3954"} mr={3} >
               PROCESSED TO CHECKOUT
              </Button>
              <Button  variant='outline' color={"#2b3954"}>VIEW CART</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }