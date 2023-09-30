import { Center, Grid, GridItem, Stack, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import AdminNavbar from "../Components/Admin-Navbar";
import { AdminFooter } from './AdminFooter';
const Dashboard = () => {
  const gridColumns = useBreakpointValue({ base: 1, md: 3, lg: 3 });
  return (
    <>
    <AdminNavbar />
    
   <Stack w={"95%"} m={"auto"} h="600px">
    <Grid
    mt="10px"
  w="100%"
  h="100%"
  templateRows='repeat(4, 1fr)'
  templateColumns={`repeat(${gridColumns},1fr )`}
  gap={"4"}
  bg='grey'
>
  
<GridItem  rowSpan={2} colSpan={1} bg="orange">
</GridItem>
<GridItem  rowSpan={2} colSpan={1} bg="orange"></GridItem>
<GridItem  rowSpan={2} colSpan={1} bg="orange"></GridItem>
<GridItem  rowSpan={2} colSpan={2} bg="orange"></GridItem>
<GridItem  rowSpan={2} colSpan={1} bg="orange"></GridItem>
  </Grid> 
  </Stack>
  <AdminFooter/>
    </>
  )
}

export default Dashboard