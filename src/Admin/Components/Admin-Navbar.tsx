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
  } from '@chakra-ui/react'
  import {
    HamburgerIcon,
    CloseIcon,
  } from '@chakra-ui/icons'
  import {RxDashboard } from "react-icons/rx";
  import { Link, useNavigate } from 'react-router-dom';
  import { PiUserCircle } from "react-icons/pi";
  import { BsFillBoxSeamFill } from "react-icons/bs";
  const linkColor:string = '#0b3954';
  const linkHoverColor:string = '#ffb128';

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
            <Image src={"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/abbpihhn1ujbkght2zby.png"} w={["100%","100%","30%"]}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })} margin={"10px 0"} onClick={()=>Navigate("/admin")} >
             
            </Image>
  
            
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            alignItems={"center"}
            spacing={[1,10]} 
            >
  <Link to="/admin"> 
               <Button
                color={linkColor}
                display={{ base: 'none', md: 'inline-flex' }} 
                colorScheme='white'
                _hover={{
                    color:linkHoverColor
                }}
             >
             DASHBOARD
              </Button>
              </Link>
              <Link to="/admin/users"> 
                <Button 
                   color={linkColor}
                   display={{ base: 'none', md: 'inline-flex' }} 
                   colorScheme='white'
                   _hover={{
                       color:linkHoverColor
                   }}
                  >
            USERS
              </Button>
              </Link>
              <Link to="/admin/products"> 
                <Button 
                   color={linkColor}
                   display={{ base: 'none', md: 'inline-flex' }} 
                   colorScheme='white'
                   _hover={{
                       color:linkHoverColor
                   }}
                 >
           PRODUCTS
              </Button>
              </Link>

               {/* Admin- user */}
              <Link to="/admin/admin-user"> {/* Wrap the button with a Link component */}       
        <Button variant="link">
          <Image
            src="https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-user.svg"
            w={["15%","15%", "55%"]}
            alt="User Icon" // Add an alt attribute for accessibility
          />
        </Button>
      </Link>
  
  
  
  
  
  
  
  
           
  
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

  const MobileNavItem = ({ label, href}: any) => {
 
  
    return (
      <Link to={`${href}`}>
      <Stack spacing={4} >
        <Box
          py={2}
          as="a"
          // href={href ?? '#'}
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: 'none',
          }}>
            <Box display={"flex"} alignItems={"center"}  w={"100%"}  >
              {/* <Box> */}
              {/* <Image src={src} w={"8%"}></Image> */}
              {label==="DASHBOARD"?<RxDashboard />:label==="USERS"?<PiUserCircle />:<BsFillBoxSeamFill />}
              
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
      </Link>
    )
  }
  
  interface NavItem {
    label: string
    src?:string
    href?: string
  }
  
  const NAV_ITEMS: Array<NavItem> = [
   
    {
      label: 'DASHBOARD',
    //   src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category1.svg',
   href:"/admin"
    },
    {
      label: 'USERS',
    //   src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category2.svg',
      href:"/admin/users"
    },
    {
      label: 'PRODUCTS',
      href:"/admin/products",
    //   src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category3.svg',
    },
    // {
    //   label: 'ORDERS',
    //   href:"#",
    //   src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category4.svg',
    // }
    // ,
    // {
    //   label: 'CABINETS',
    //   href:"#",
    //   src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category5.svg',
    // },
    // {
    //   label: 'LIGHTING',
    //   href:"#",
    //   src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category6.svg',
    // },
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
  ];