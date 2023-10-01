import { Center, Grid, GridItem, Stack, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, useBreakpointValue } from '@chakra-ui/react'
import React from 'react';
import AdminNavbar from "../Components/Admin-Navbar";
import { AdminFooter } from './AdminFooter';
const Dashboard = () => {
  const gridColumns = useBreakpointValue({ base: 1,sm:1, md: 2, lg: 2 });
  const gridRows=useBreakpointValue({base:2,sm:1,md:2,lg:2})
  return (
    <>
    <AdminNavbar />
    
   <Stack w={"95%"} m={"auto"}>
    <Grid
    mt="10px"
    w="100%"
  
  templateRows={`repeat(${gridRows},1fr )`}
  templateColumns={`repeat(${gridColumns},1fr )`}
  gap={"4"}
  bg='white'
>
  
<GridItem boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} h={"100%"} rowSpan={1} colSpan={1} bg="white">
<StatGroup m={"auto"}   w={"50%"} >
  <Stat mt={"20px"}>
    <StatLabel fontStyle={"Poppins"}  fontSize={useBreakpointValue({ base: "20px", sm: "30px", md: "40px", lg: "40px" })}>Orders</StatLabel>
    <StatNumber textDecor={"underline"} fontSize={useBreakpointValue({base:"30px"})}>345,670</StatNumber>
    <StatLabel fontSize={useBreakpointValue({ base: "20px", sm: "30px", md: "40px", lg: "40px" })}>Profit</StatLabel>
    <StatNumber textDecor={"underline"} fontSize={useBreakpointValue({base:"30px"})}>408,760,000</StatNumber>
    <StatHelpText fontSize={"2em"}>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>
  </StatGroup>
</GridItem>

<GridItem h={"300px"}  rowSpan={1} colSpan={1} bg="orange">
    curve chart for orders place

</GridItem>
<GridItem h={"300px"} rowSpan={1} colSpan={1} bg="orange">
  bar chart for orders placed
</GridItem>
<GridItem h={"300px"}  rowSpan={1} colSpan={1} bg="orange">
  pi chart for user gained
</GridItem>
  </Grid> 
  </Stack>
 
  <AdminFooter/>
    </>
  )
}

export default Dashboard