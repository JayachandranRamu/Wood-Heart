import React, { ReactNode, useState } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from '@chakra-ui/react';
import { PostUserData } from '../Redux/Auth/action';
import { useDispatch } from 'react-redux';

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SignupModalProps {
  isOpen: any;
  onClose: any;
}

export const SignupModal: React.FC<SignupModalProps> = ({onOpens,LetClose}:any):ReactNode => {
    const toast = useToast()
    const dispatch=useDispatch();

  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = () => {
    // Perform signup logic here, e.g., call an API
   let obj:any= {
    address: {
          geolocation: {
            lat: "40.12456",
            long: "20.5419"
          },
          city: "miami",
          street: "avondale ave",
          number: 345,
          zipcode: "96378-0245"
        },
        email: formData.email,
        username: `${formData.firstName} ${formData.lastName}`,
        password: formData.password,
        name: {
          "firstname": formData.firstName,
          "lastname": formData.lastName,
        },
        phone: "1-678-456-1934",
        orders: [],
        wishList: [],
        addToCart: []
      }
 
      dispatch(PostUserData(obj))
 
 
  toast({
    title: 'Account Created Succesfully',
    position: 'top',
    description: "You can login to our website",
    status: 'success',
    duration: 2000,
    isClosable: true,
  })
  setFormData({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  LetClose();
  };

  return (
    <Modal isOpen={onOpens} onClose={LetClose} size="sm" isCentered >
      <ModalOverlay />
      <ModalContent fontFamily={"poppins"} borderRadius={"15px"}>
     
        <ModalHeader border="none" fontWeight={"bold"}  color="#2b3954"
              fontSize="25" textAlign={"center"}>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"}  fontSize={"16px"} justifyContent={"center"}
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"}  fontSize={"16px"} justifyContent={"center"}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"}  fontSize={"16px"} justifyContent={"center"}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"}  fontSize={"16px"} justifyContent={"center"}
          />
        </ModalBody>

        <ModalFooter>

          <Button
              colorScheme="white"
              fontSize="16"
              w="100%"
              fontWeight="400"
              bg="#2b3954"
              _hover={{ bgColor: "#e89f22" }}
              letterSpacing={"1px"}
              onClick={handleSignup}
              
            >
              SIGN UP
            </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};


