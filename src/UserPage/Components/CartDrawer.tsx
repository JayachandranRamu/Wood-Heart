import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Text, useDisclosure } from "@chakra-ui/react"
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
           
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }