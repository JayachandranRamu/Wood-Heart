import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export function CartDrawer({onOpen,onClose}:any) {
  let UserData=useSelector((store:any)=>store.authReducer.UserData)
  let Nav=useNavigate()
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
           
              <Flex direction={"column-reverse"} >
                {UserData?.addToCart?.map((el:any)=>
                <Flex w={"100%"} m={"10px auto"} p={"10px"} gap={"20px"} alignItems={"center"} justifyContent={"space-between"} borderRadius={"20px"} direction={"row"} bg={"#f5f5f5"} >
                <Box w={"30%"}>
                  <Image w={"80%"} src={el.image} m={"5px"}>

                  </Image>
                </Box>
                <Box fontWeight={"500"} color={"#2b3954"} w={"40%"} borderRadius={"20px"} p={"10px"}>
<Text>{el.name}</Text>
<Text fontSize={"15"}>Price : $ {el.price}</Text>

                </Box>
                <Box alignItems={"center"} w={"30%"}>
                <Text bgColor={"#2b3954"} color={"white"} borderRadius={"7px"} p={"5px 0"} textAlign={"center"}>QTY : {el.quantity}</Text>
                  <Text color={"#ffb128"} fontWeight={"600"} fontSize={"20"} m={"5px 0"} >
                    $ {el.price.toFixed(1) * el.quantity}
                  </Text>
                </Box>
                </Flex>
)}
              </Flex>
            </DrawerBody>
  
            <DrawerFooter>
              <Box>

              </Box>
              <Button  onClick={()=>Nav("/cart")}   _hover={{ bgColor: "#e89f22" }} colorScheme='white' fontSize={"15"} fontWeight={"400"}  bg={"#2b3954"} mr={3} >
               PROCEED TO CHECKOUT
              </Button>
              <Button  variant='outline' color={"#2b3954"} fontSize={"15"} onClick={()=>Nav(-1)}>CONTINUE SHOPPING</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }