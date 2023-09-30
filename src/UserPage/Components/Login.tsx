// import React from 'react';
// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Button,
//   Input,
//   Link,
//   VStack,
//   Image,
// } from '@chakra-ui/react';

// const LoginMenu = () => {
//   return (
//     <VStack spacing={4} align="end">
//       <Menu autoSelect closeOnSelect={false} >
//         <MenuButton border={"none"} as={Button} variant='link'  >
//         <Image  
//           src="https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-user.svg"
//           w={["20%","20%", "55%"]}
//           m={["auto",0]}
//           alt="User Icon" // Add an alt attribute for accessibility
//         />
//         </MenuButton>
//         <MenuList  m={"5px"} p={"10px"}>
//           <MenuItem>
//             <Input placeholder="Username" size="lg" marginBottom={2} />
//           </MenuItem>
//           <MenuItem>
//             <Input
//               type="password"
//               placeholder="Password"
//               size="lg"
//               marginBottom={2}
//             />
//           </MenuItem>
//           <MenuItem>
//           <Button  colorScheme='white' fontSize={"16"} w={"100%"} fontWeight={"400"}  bg={"#2b3954"}  >
//              LOGIN
//               </Button>
//           </MenuItem>
//           <MenuItem>
//             <Link color="#2b3954" fontSize="sm" href="#" m={"auto"}  textDecoration={"none"}>
//               New User ? 
//             </Link>
//           </MenuItem>
//         </MenuList>
//       </Menu>
//     </VStack>
//   );
// };

// export default LoginMenu;
import React, { useState } from 'react';
import {
  Button,
  Input,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  VStack,
  Image,
  Box,
  useDisclosure,
} from '@chakra-ui/react';

const LoginMenu = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  function HandleSubmit(e:any){
e.preventDefault();
let obj={
  username,password
}
console.log(obj);
onClose()
  }

  return (
    <VStack  align="end">
      <Popover isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose} placement="bottom-end">
        <PopoverTrigger>
          <Button as="div" border="none" variant="link">
            <Image
              src="https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-user.svg"
              w={['20%', '20%', '55%']}
              m={['auto', 0]}
              alt="User Icon"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent m="5px" p="10px" borderRadius={"15px"}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader border="none" fontWeight={"bold"}  color="#2b3954"
              fontSize="25">Login</PopoverHeader>
          <PopoverBody>
            <Input value={username} onChange={(e:any)=>setUsername(e.target.value)} placeholder="Username" size="lg" marginBottom={2} />
            <Input
            value={password}
            onChange={(e:any)=>setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              size="lg"
              marginBottom={2}
            />
            <Button
              colorScheme="white"
              fontSize="16"
              w="100%"
              fontWeight="400"
              bg="#2b3954"
              _hover={{ bgColor: "#e89f22" }}
              letterSpacing={"1px"}
              onClick={HandleSubmit}
              
            >
              LOGIN
            </Button>
            <Box m={"10px 35%"} mb={"0"} alignItems={"center"} justifyContent={"center"} w={"100%"}>
            <Link
              color="#2b3954"
              fontSize="sm"
              href="#"
             
              textDecoration="none"
            >
              New User ?
            </Link>
            </Box>
          
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </VStack>
  );
};

export default LoginMenu;
