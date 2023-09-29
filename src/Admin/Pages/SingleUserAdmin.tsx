import React from 'react'
import AdminNavbar from "../Components/Admin-Navbar";
import { AbsoluteCenter, Box, Button, Center, Divider, Grid, Heading, Image, Stack, Tab, TabList, TabPanel, TabPanels, Table, Tabs, Text, useBreakpointValue } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { AdminFooter } from './AdminFooter';

const SingleUserAdmin = () => {
  const fontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  const tableWidth = useBreakpointValue({ base: '90%', sm: '70%', md: '70%' });
  return (<>
    
    <AdminNavbar/>
    <Box w={"100%"} position='relative' padding='10'>
   <Divider />
   <AbsoluteCenter fontSize={fontSize} bg='white' px='4'>
     Customer Details
   </AbsoluteCenter>
   </Box>

   <Card
   m={"auto"}
   width={{ base: '90%', sm: '80%', md: '70%', lg: '60%' }}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
   m={"auto"}
    objectFit='cover'
    maxW={{ base: '50%', sm: '150px' }}
    src="https://w0.peakpx.com/wallpaper/466/249/HD-wallpaper-leonardo-dicaprio-profile-black-man-white-actor-blue.jpg"
    alt='Caffe Latte'
  />

  <Stack m="auto">
    <CardBody fontSize={fontSize}>
      <Heading size='md'></Heading>
      <Table   ml={"20px"} w={"100%"}>
        <tr><td >Name</td><td> ---------name-----------------------------------</td></tr>
        <tr ><td>E-mail</td><td>---------email-----------------------------------</td></tr>
        <tr><td>Address</td><td>-------address-----------------------------------</td></tr>
        <tr><td>Phone</td> <td>------phone-----------------------------------</td></tr>
      </Table>
    </CardBody>
  </Stack>
</Card>

     

      {/* tabs to attain multiple container showcase */}
      <Center>
      <Tabs w={"90%"} mt={"40px"} size='md' variant='enclosed'>
  <TabList>
    <Tab fontSize={fontSize}>Orders</Tab>
    <Tab fontSize={fontSize}>Cart Items</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      {/* --------------------------1------------------- */}
    <Card
   m={"auto"}
   width={{ base: '90%', sm: '80%', md: '70%', lg: '60%' }}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
   m={"auto"}
    objectFit='cover'
    maxW={{ base: '50%', sm: '150px' }}
    src="https://images.pexels.com/photos/3965520/pexels-photo-3965520.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt='Caffe Latte'
  />

  <Stack >
    <CardBody fontSize={fontSize}>
      <Heading size='md'></Heading>
      <Table   ml={"20px"} w={"100%"}>
        <tr><td >Product</td><td> ---------product name-----------------------------------</td></tr>
        <tr ><td>Category</td><td>---------category-----------------------------------</td></tr>
        <tr><td>Price</td><td>-------price-----------------------------------</td></tr>
        <tr><td>Order Placed</td> <td>------Ordered date-----------------------------------</td></tr>
      </Table>
    </CardBody>
  </Stack>
</Card>

      <p>one!</p>
      <p>one!</p>
      <p>one!</p>
      <p>one!</p>
      <p>one!</p>
      <p>one!</p>
      <p>one!</p>
      <p>one!</p>
      <p>one!</p>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
         {/* --------------------------1------------------- */}
    <Card
   m={"auto"}
   width={{ base: '90%', sm: '80%', md: '70%', lg: '60%' }}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
   m={"auto"}
    objectFit='cover'
    maxW={{ base: '50%', sm: '150px' }}
    src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt='Caffe Latte'
  />

  <Stack >
    <CardBody fontSize={fontSize}>
      <Heading size='md'></Heading>
      <Table   ml={"20px"} w={"100%"}>
        <tr><td >Product</td><td> ---------product name-----------------------------------</td></tr>
        <tr ><td>Category</td><td>---------category-----------------------------------</td></tr>
        <tr><td>Price</td><td>-------price-----------------------------------</td></tr>
        <tr><td>Order Placed</td> <td>------Ordered date-----------------------------------</td></tr>
      </Table>
    </CardBody>
  </Stack>
</Card>
      <p>two!</p>
      <p>two!</p>
      <p>two!</p>
      <p>two!</p>
      <p>two!</p>
      <p>two!</p>
      <p>two!</p>
      <p>two!</p>
      <p>two!</p>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
</Center>

{/* ======================================== */}
     <AdminFooter/>
  </>);
}

export default SingleUserAdmin;