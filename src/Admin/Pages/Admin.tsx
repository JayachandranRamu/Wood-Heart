import React, { useEffect, useState } from 'react'
import { Box, Button, Center, DarkMode, Grid, GridItem, InputGroup, InputRightElement, Show, Wrap, WrapItem, useEditable } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import AllRoutes from '../Components/AllRoutes'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon, Search2Icon, SunIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'

const Admin = () => {
  
  const [theme,setTheme]=useState("");


  let {pathname}=useLocation();
  const [page,setPage]=useState("");
  useEffect(()=>{
     switch(pathname){
       case "/":{
         return setPage("Dashboard");
       }
       case "/orders":{
        return setPage("Orders");
       }
       case "/users":{
        return setPage("Users")
       }
       case "/products":{
        return setPage("Products");
       }
       default:{
        return setPage("Dashboard");
       }
     }
  },[pathname]);
  
  return (

<div className='admin' style={{border:"1px solid red"}}>
       <Grid
  m="10px" 
  h='750px'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(9, 1fr)'
  gap={4}
  bg='white'
>

{/*  here   navbar section */}
  <GridItem  rowSpan={6} colSpan={2} bg="white">
   <Navbar/>
  </GridItem>
  {/*   till here   navbar section */}


                                                      {/* header */}
  <GridItem  colSpan={7} borderRadius="20px" bg='orange'
   display="flex" 
   alignItems="center"
   justifyContent="center">  
 {/* 1 . Active page name 
 2 . search bar 
 3 . theme mode 
 4 . user profile 
     */}
     <div style={{width:"95%",height:"60%",border:"1px solid orange"}}>
     <Grid
     h="100%"
      gap="5px"
      templateColumns='repeat(6, 1fr)'
      bg="orange"
     >
                  {/*    page name shows here */}
       <GridItem  colSpan={2} bg='orange'>
       <h2 style={{color:"white",fontSize:"30px",textAlign:"center",marginTop:"10px"}}>{page}</h2>
       </GridItem>

       <GridItem  colSpan={3} bg='orange'>
       <Input w="80%" bg="white"  mt="10px" placeholder='Search '  />
       <Box as='button' borderRadius='md' bg='tomato' color='white' m="10px" px={4} h="40px">
       <Search2Icon h="20px"/>
       </Box>
       </GridItem>
       <GridItem  colSpan={1} bg='orange'>
       <Wrap w="80%"  mt="10px" >
  <WrapItem w="40%" >
    <Avatar name='Dan Abrahmov' src='https://static.vecteezy.com/system/resources/previews/000/550/828/original/sun-icon-vector.jpg' />
  </WrapItem>
  <WrapItem w="40%">
    <Avatar name='Abhay V' src='https://bit.ly/tioluwani-kolawole' />
  </WrapItem>
   </Wrap>
       </GridItem>
     </Grid>

     </div>
  </GridItem>
{/*  till here header */}



{/* all routes wrapper (contentss) */}
  <GridItem rowSpan={5} borderRadius="20px" colSpan={7} bg='orange'>
   <AllRoutes/>
  </GridItem>
  {/*  till here */}
</Grid>

    </div>
  )
}

export default Admin