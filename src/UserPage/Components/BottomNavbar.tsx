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
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { FaArrowDown } from 'react-icons/fa';
  interface NavItem {
    label: string;  
    src?:string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  export const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Box
        as="a"
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    );
  };
  
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
  
  export const DesktopNav = () => {
    // Use useBreakpointValue to determine if the component should be displayed
    const isDesktop = useBreakpointValue({ base: false, md: true });
  
    if (!isDesktop) {
      // Return null if it's not desktop view
      return null;
    }
  
    const linkColor = useColorModeValue('#0b3954', 'gray.200');
    const linkHoverColor = useColorModeValue('#ffb128', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Box fontFamily={"Poppins"} boxShadow="rgba(0, 0, 0, 0.1) -4px 9px 25px -6px" m={"auto"} mt={"10px"}>
        <Stack direction="row" spacing={4} w="70%" m="auto">
          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label} m={"auto"} 
            // borderRight={"1.5px solid #f5f5f5"}
            >
           <Image src={navItem.src} w={"25%"} m={"auto"}></Image>
 
                  <Box
              
                    // as="a"
                    p={1.5}
                    href={navItem.href}
                    fontSize={'16px'}
                    fontWeight={500}
                    color={linkColor}
                    cursor={'pointer'}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}
                  textAlign={"center"}
                    >
                  <Box display={"flex"} justifyContent={'space-evenly'} alignItems={"center"}>
                    <Box>
                    {navItem.label}   
                    </Box>
                    <Box>
                    <FaArrowDown /> 
                    </Box>
                  </Box>
                               
                   
                  </Box>
     
            </Box>
          ))}
        </Stack>
      </Box>
    );
  };
  