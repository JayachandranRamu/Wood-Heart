
import React, { useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";
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
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { BiSolidLockAlt } from "react-icons/bi";
import { PiEyeBold, PiEyeClosedBold, } from 'react-icons/pi';
import { useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_SUCCESS } from '../Redux/actionTypes';
import { GetAllUserData, LogoutStoringUserDatainLS, StoringUserDatainLS } from '../Redux/Auth/action';
import { SignupModal } from './Signup';
import { BsSimFill } from 'react-icons/bs';
const LoginMenu = () => {
  const [SignOpen, setSignOpen] = useState<boolean>(false);

  function SignClose() {
    setSignOpen(!SignOpen);
  }

  const [show, setShow] = React.useState(false)
  const toast = useToast()
  const handleClick = () => setShow(!show)
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [username,setUsername]=useState("");
  const dispatch=useDispatch();
  const [password,setPassword]=useState("");
let allUserData=useSelector((store:any)=>store.authReducer.allUserData);
let isAuth=useSelector((store:any)=>store.authReducer.isAuth);
let userData=useSelector((store:any)=>store.authReducer.UserData);




function HandleLogout(){
  dispatch(LogoutStoringUserDatainLS);
  toast({
    title: 'Logout Succesfully',
    position: 'top',
    description: "You are logged out from our website",
    status: 'success',
    duration: 2000,
    isClosable: true,
  })
}

  function HandleSubmit(e:any){

e.preventDefault();

let obj={
  username,password
}
console.log(obj);
console.log(allUserData);
let ans=allUserData.find(((el:any)=>el.email==username && el.password==password));
if(ans){
dispatch(StoringUserDatainLS(ans))
  toast({
    position: 'top',
    title: 'Login Succesfully',
    description: "You can order the products now.",
    status: 'success',
    duration: 2000,
    isClosable: true,
  })
}else{
  toast({
    title: 'Credentials Incorrect',
    position: 'top',
    description: "Kindly check your credentials",
    status: 'error',
    duration: 2000,
    isClosable: true,
  })
}
setPassword("");
setUsername("");
onClose()
  }

  useEffect(()=>{
    dispatch(GetAllUserData);
  },[])

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
       {isAuth?<PopoverContent w={"90%"} border={"none"}  m="5px" p="10px" borderRadius={"15px"}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader border="none" fontWeight={"bold"}  color="#2b3954"
              fontSize="22">Welcome,<Text textTransform={"capitalize"}>{userData?.username}</Text></PopoverHeader>
              
          <PopoverBody >
         
            <Button w={"100%"}        fontSize="16" mb={"10px"}  variant='outline'  color={"#2b3954"} alignItems={"center"}>Profile</Button>
            
        
            <Button
              colorScheme="white"
              fontSize="16"
              w="100%"
              fontWeight="400"
              bg="#2b3954"
              _hover={{ bgColor: "#e89f22" }}
              letterSpacing={"1px"}
              onClick={HandleLogout}
            >
              LOGOUT
            </Button>

          
          </PopoverBody>
        </PopoverContent>:<PopoverContent m="5px" p="10px" borderRadius={"15px"}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader border="none" fontWeight={"bold"}  color="#2b3954"
              fontSize="25">Login</PopoverHeader>
          <PopoverBody>
          <InputGroup>
    <InputLeftElement pointerEvents='none' alignItems={"center"} textAlign={"center"} fontSize={"22px"} justifyContent={"center"}>
     <MdEmail />

    </InputLeftElement>
    <Input value={username} type='email' onChange={(e:any)=>setUsername(e.target.value)} placeholder="User Email"  marginBottom={2}  />
  </InputGroup>
        
  <InputGroup>
    <InputLeftElement pointerEvents='none' alignItems={"center"} textAlign={"center"} fontSize={"22px"} justifyContent={"center"}>

     <BiSolidLockAlt />
    </InputLeftElement>  <Input
            value={password}
            onChange={(e:any)=>setPassword(e.target.value)}
            type={show ? 'text' : 'password'}
              placeholder="Password"

              marginBottom={2}
            />
            <InputRightElement>
          {!show ? <PiEyeClosedBold alignItems={"center"} textAlign={"center"} fontSize={"18px"} justifyContent={"center"}  onClick={handleClick} /> : <PiEyeBold alignItems={"center"} textAlign={"center"} fontSize={"18px"} justifyContent={"center"} onClick={handleClick} />}
     
            </InputRightElement>
  </InputGroup>

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
            <Button
              color="#2b3954"
              fontSize="sm"
              variant={"link"}
             onClick={()=>{
              setSignOpen(!SignOpen)
             }}
              textDecoration="none"
            >
              New User ?
            </Button>
            {SignOpen && <SignupModal onOpen={SignOpen} LetClose={SignClose} />}
            </Box>
          
          </PopoverBody>
        </PopoverContent>}
      </Popover>
    </VStack>
  );
};

export default LoginMenu;
