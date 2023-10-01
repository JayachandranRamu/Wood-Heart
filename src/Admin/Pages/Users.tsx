import React, { useEffect } from 'react'
import   AdminNavbar  from '../Components/Admin-Navbar'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getAllusers,deleteSingleUser } from '../../UserPage/Redux/Admin/userAction'
import { user } from '../../UserPage/Redux/Admin/constants'
import styled from 'styled-components'
import { AbsoluteCenter, Box, Button, Divider, Flex, Table, Tbody, Td, Tfoot, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AdminFooter } from './AdminFooter'





const Users = () => {
  const dispatch=useDispatch();
  const userData=useSelector((store:unknown)=>{
     return store.adminReducer.users
  })
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  const fontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  // const headerSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
console.log(userData,"from user store data");

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
    dispatch(deleteSingleUser(id)); 
    
  };

  return (
    <>
         <AdminNavbar />
         <Box position='relative' padding='10'>
  <Divider />
  <AbsoluteCenter fontSize={fontSize} bg='white' px='4'>
    Customers
  </AbsoluteCenter>
   </Box>
         <Table w="80%" m="auto" >
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
                    Del
                  </Button>
              </Flex>  
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot w="100%">
        <Tr>
          <Td colSpan={4}>
            <Flex justifyContent="end" >
              <Button variant="outline" colorScheme="green" size={buttonSize} ml={2}>
                Prev
              </Button>
              <Button variant="outline" colorScheme="green" size={buttonSize} ml={2}>
                Next
              </Button>
            </Flex>
          </Td>
        </Tr>
      </Tfoot>
    </Table>
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