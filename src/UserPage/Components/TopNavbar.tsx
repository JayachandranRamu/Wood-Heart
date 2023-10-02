import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons'
import { FaSearch} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import LoginMenu from './Login';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

const Navigate=useNavigate();
  return (
    <Box fontFamily={"Poppins"} mt={[0,"10px"]}>
      <Flex   w={["100%","100%","80%"]} m={"auto"}
        bg={"white"}
  
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}

        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image src={"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/abbpihhn1ujbkght2zby.png"} w={["100%","100%","60%"]}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })} margin={"10px 0"} onClick={()=>Navigate("/")} >
           
          </Image>

          
        </Flex>
        <Box m={"auto"} mr={"150px"}  display={{ base: 'none', md: 'inline-flex' }} >
        <InputGroup>
    <InputLeftElement pointerEvents='none'>

    <FaSearch />
    </InputLeftElement>
    <Input placeholder='What are you looking for?' variant='filled' type='search' w={["400px","400px","550px"]} />
  </InputGroup>
      
</Box>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={1}
          >
<Link to="/cart"> 
             <Button
              display={{ md: 'inline-flex' }} 
              variant={'link'} >
            <Image   w={['30%', '30%', '55%']}

              m={[ 0]}
              ml={["85%",0]}
alignItems={"center"}

              alt="User Icon" src='https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-cart.svg'  >

            </Image></Button>
            </Link>
            {/* <Link to="/admin"> 
              <Button 
               display={{ base: 'none', md: 'inline-flex' }}
                variant={'link'}>
            <Image src='https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-wishlist.svg'  w={["45%","55%"]} >

            </Image></Button>
            </Link> */}
            {/* <Link to="#" te> Wrap the button with a Link component */}
     
        {/* <Image
          src="https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-user.svg"
          w={["15%","15%", "55%"]}
          alt="User Icon" // Add an alt attribute for accessibility
        /> */}
        <LoginMenu />
     
    {/* </Link> */}


        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}



const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}
const linkColor:string = '#0b3954';
const linkHoverColor:string = '#ffb128';
const MobileNavItem = ({ label, href,src }: NavItem) => {
 

  return (
    <Stack spacing={4} >
      <Box
        py={2}
        as="a"
        href={href}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
          <Box display={"flex"} alignItems={"center"}  w={"100%"}  >
            {/* <Box> */}
            <Image src={src} w={"8%"}></Image>
            {/* </Box> */}
            {/* <Box> */}
            <Text fontWeight={600}  ml={"20px"} color={linkColor} 
             _hover={{
                      color: linkHoverColor,
                    }}
                  
                    >
          {label}
        </Text>
            {/* </Box> */}
          </Box>
       
      
      </Box>
    </Stack>
  )
}

interface NavItem {
  label: string
  src?:string
  href?: string
}


//   {
//     label: 'CHECKOUT',
//     src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-cart.svg',
//  href:"#"
//   },
//   {
//     label: 'WISHLIST',
//     src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-wishlist.svg',
//  href:"#"
//   },

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'CHAIRS',
    src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category1.svg',
 href:"/Chairs"
  },
  {
    label: 'BEDS',
    src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category2.svg',
    href:"/Beds"
  },
  {
    label: 'TABLES',
    href:"/Tables",
    src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category3.svg',
  },
  {
    label: 'DESKS',
    href:"/Desks",
    src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category4.svg',
  },
  {
    label: 'CABINETS',
    href:"/Cabinets",
    src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category5.svg',
  },
  {
    label: 'LIGHTING',
    href:"/Lighting",
    src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category6.svg',
  }
];