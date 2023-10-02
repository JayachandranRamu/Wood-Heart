import  { useEffect } from 'react'
import   AdminNavbar  from '../Components/Admin-Navbar'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getAllusers,deleteSingleUser } from '../../UserPage/Redux/Admin/userAction'


import {  Box, Button, CircularProgress,  Flex, Stack, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AdminFooter } from './AdminFooter'






const Users = () => {
  const dispatch=useDispatch();
  const userData=useSelector((store:any)=>{
     return store.adminReducer.users
  });
  const isLoading=useSelector((store:any)=>{
    return store.adminReducer.isLoading;
  },shallowEqual);
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  const fontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  // const headerSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
// console.log(userData,"from user store data");

  
  useEffect(()=>{
       dispatch(getAllusers());
  },[]);
  
  
  // axios.get(`http://localhost:8080/user`)
  // .then(res=>{
  //   console.log(res.data)
  // })
  // .catch(err=>{
  //   console.log(err);
  // })

  const handleDeleteUser = (id: number) => {
    let a=userData;
    dispatch(deleteSingleUser(id,a)); 
  };

  return (
    <>
         <AdminNavbar />
         <Box position='relative' padding='10'>

         <Text textAlign={"center"} fontSize={"35px"} m={"10px 0"} fontWeight={"bold"} bg='white' px='4'>
    USERS 
   </Text>
   </Box>
   {isLoading&&
   <Stack bg={"white"}
   m={"auto"}
   w={"80%"}
   h={"350px"}
   >
   <CircularProgress  m={"auto"} isIndeterminate color='green.300' />
   </Stack>
}
      {
      !isLoading&&  <Table w="80%" m="auto" >
      <Thead>
        <Tr>
          <Th textAlign="center" fontSize={fontSize}>User name</Th>
          <Th textAlign="center"  fontSize={fontSize}>E-mail</Th>
          <Th textAlign="center" fontSize={fontSize}>Orders</Th>
          <Th textAlign="center" fontSize={fontSize}>Manage</Th>
        </Tr>
      </Thead>
      <Tbody>
        {/*  */}
      
        {userData?.map((ele:any) => (
          <Tr key={ele.id}>
            <Td textAlign="center" fontSize={fontSize}>{ele.username}</Td>
            <Td textAlign="center" fontSize={fontSize}>{ele.email}</Td>
            <Td textAlign="center" fontSize={fontSize}>{ele.orders.length}</Td>
            <Td>
            <Flex justifyContent="center">
            <Link to={`/admin/singleUser/${ele.id}`}> <Button variant="outline" colorScheme="teal" size={buttonSize}>
                View
              </Button></Link>
              <Button variant='outline' 
              colorScheme='red' 
              size={buttonSize} ml={2} 
              onClick={() => handleDeleteUser(ele.id)}>
                    Delete
                  </Button>
              </Flex>  
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot w="100%">
        <Tr>
          <Td colSpan={4}>
            {/* {paginate} */}
            {/* <Flex justifyContent="end" >
              <Button variant="outline" colorScheme="green" size={buttonSize} ml={2}>
                Prev
              </Button>
              <Button variant="outline" colorScheme="green" size={buttonSize} ml={2}>
                Next
              </Button>
            </Flex> */}
          </Td>
        </Tr>
      </Tfoot>
    </Table>
      } 
    <AdminFooter/>
    </>
  )
}


// const Table=styled.table`
//    width:100%;
//    height:100%;
//    background-color: red;;
// `
export default Users