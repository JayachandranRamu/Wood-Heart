
import   AdminNavbar  from '../Components/Admin-Navbar'

import { useSelector } from 'react-redux'

import { Box, Center, Container, useColorModeValue } from '@chakra-ui/react'
import MainScreen from './MainsScreen'
import { AdminFooter } from './AdminFooter'


const Admin = () => {
  
const isAuth=useSelector((store:any)=>{
  return store.adminReducer.isAuth
})
  
  
  const bg = useColorModeValue('white', '#2f3244');
  return ( <>  
    <AdminNavbar />
   {
    isAuth&& <Container bg={"grey"} h={"550px"} maxW="7xl" p={{ base: 5, md: 10 }}>
    <Center >
      <Box
        maxH="400px"
        minH="354px"
        w="345px"
        boxShadow="lg"
        rounded="md"
        p={6}
        overflow="hidden"
        cursor="pointer"
        _hover={{ boxShadow: 'lg' }}
        bg={bg}
        role="group"
      >
        
        <MainScreen />
      
        
      </Box>
    </Center>
  </Container>
   }
   <AdminFooter/>
  </>)

  
}

export default Admin

