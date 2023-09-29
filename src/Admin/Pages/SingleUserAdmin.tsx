import React from 'react'
import AdminNavbar from "../Components/Admin-Navbar";
import { Grid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
const SingleUserAdmin = () => {

  return (
    <div>
      <AdminNavbar />
div
     user and address
div
      <Tabs variant='enclosed'>
      {/* TabList for large screens and medium screens */}
      <TabList display={{ base: 'none', md: 'flex' }} 
       w={"80%"}
       bg={"grey"}
       m={"auto"}
      >
        <Tab>Orders</Tab>
        <Tab>Cart Items</Tab>
        <Tab>Wishlist</Tab>
      </TabList>

      {/* TabList for small screens */}
      <TabList display={{ base: 'flex', md: 'none' }}
       w={"90%"}
       bg={"grey"}
       m={"auto"}
      >
      <Tab>Orders</Tab>
        <Tab>Cart Items</Tab>
        <Tab>Wishlist</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one! for all orders</p>
        </TabPanel>
        <TabPanel>
          <p>two! for all cart items</p>
        </TabPanel>
        <TabPanel>
          <p>Three for all wishlist items</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
      </div>
  )
}

export default SingleUserAdmin