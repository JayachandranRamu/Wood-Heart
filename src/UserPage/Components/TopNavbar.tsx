import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  LinkBox,
  Link,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import Logo from "/Users/Lenovo/Desktop/posh-division-4370/src/assets/Logo.png"
import { FaSearch} from 'react-icons/fa';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

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
          <Image src={"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5m15kyve20olnf5nvm31.png"} w={["100%","100%","60%"]}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })} margin={"10px 0"}>
           
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

             <Button 
              // display={{ base: 'none', md: 'inline-flex' }} 
               variant={'link'} href={'#'}>
            <Image src='https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-cart.svg'  w={["45%","55%"]}>

            </Image></Button>
              <Button 
              //  display={{ base: 'none', md: 'inline-flex' }}
                variant={'link'} href={'#'}>
            <Image src='https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-wishlist.svg'  w={["45%","55%"]} >

            </Image></Button>
          <Button variant={'link'} href={'#'}>
            <Image src='https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-user.svg' w={["45%","55%"]}>

            </Image>
          </Button>
         
 
      
<Box>
  <Link to="/cart">
    <Image
      src="https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-user.svg"
      w={["45%", "55%"]}
      alt="User" // Provide alt text for accessibility
    />
  </Link>
</Box>
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

const MobileNavItem = ({ label, href }: NavItem) => {
  const { isOpen } = useDisclosure()

  return (
    <Stack spacing={4} >
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
      </Box>
    </Stack>
  )
}

interface NavItem {
  label: string
  src?:string
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'CHAIRS',
    src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category1.svg',
 href:"#"
  },
  {
    label: 'BEDS',
    src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category2.svg',
    href:"#"
  },
  {
    label: 'TABLES',
    href:"#",
    src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category3.svg',
  },
  {
    label: 'DESKS',
    href:"#",
    src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category4.svg',
  },
  {
    label: 'CABINETS',
    href:"#",
    src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category5.svg',
  },
  {
    label: 'LIGHTING',
    href:"#",
    src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category6.svg',
  }
];