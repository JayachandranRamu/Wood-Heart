import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Text, useDisclosure } from "@chakra-ui/react"

import { useSelector } from "react-redux";
export function OrderDrawer() {
  let UserData=useSelector((store:any)=>store.authReducer.UserData)

  const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
      <Button w={"100%"}   fontSize="16" mb={"10px"}  variant='outline' onClick={onOpen}  color={"#2b3954"} alignItems={"center"}>ORDERS</Button>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
   
size={"sm"} 
        >
          <DrawerOverlay />
          <DrawerContent fontFamily={"poppins"}>
          <DrawerCloseButton />
            <DrawerHeader>
        
                <Text mb={"15px"} color={"#2b3954"} letterSpacing={"1px"} textAlign={"center"} fontSize={"25px"} fontWeight={"600"}>
                ORDER HISTORY
                </Text>
                <hr />
                </DrawerHeader>
                
            <DrawerBody>
           
              <Flex direction={"column-reverse"} >
                {UserData?.orders?.map((el:any)=>
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
                  $ {el.price.toFixed(2) * el.quantity}
                  </Text>
                </Box>
                </Flex>
)}
              </Flex>
            </DrawerBody>
  
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }