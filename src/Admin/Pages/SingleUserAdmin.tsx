
import AdminNavbar from "../Components/Admin-Navbar";
import {  Box,  Center, CircularProgress, Heading, Image, SimpleGrid, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Table, Tabs, Text, useBreakpointValue } from '@chakra-ui/react';
import { Card, CardBody} from '@chakra-ui/react'
import { AdminFooter } from './AdminFooter';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getSingleUserby } from '../../UserPage/Redux/Admin/userAction';
import ProductCard from '../../UserPage/Components/ProductCard';
const SingleUserAdmin = () => {
  const fontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  // const tableWidth = useBreakpointValue({ base: '90%', sm: '70%', md: '70%' });

  const dispatch=useDispatch();
  const singleUser=useSelector((store:any)=>{
    return store.adminReducer.singleUser
  },shallowEqual);
  
  const isLoading=useSelector((store:any)=>{
    return store.adminReducer.isLoading;
  },shallowEqual);


  console.log(singleUser,"single user got it========>>>");

  
  const {id} =useParams();
    const email:string=singleUser.email;
    const username:string=singleUser.username;
    //const password
    const phone:string=singleUser.phone;;
    // const {city ,street,number,zipcode }:string=singleUser.address;
    const address= singleUser.address;

  
    // console.log(email,"/n",username,"/n")
        // address:{}
  useEffect(()=>{
    
    dispatch(getSingleUserby(Number(id)))

  },[dispatch,id]);


  return (<>
    
    <AdminNavbar/>
    
    <Box w={"100%"} position='relative' padding='10' color={"#0b3954"}>
  
   <Text textAlign={"center"} fontSize={"35px"} m={"20px 0"} fontWeight={"bold"} bg='white' px='4'>
    USER DETAILS
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
    !isLoading&& <Card
    m={"auto"}
    width={{ base: '90%', sm: '80%', md: '70%', lg: '60%' }}
   direction={{ base: 'column', sm: 'row' }}
   overflow='hidden'
   variant='outline'
 >
   <Image
    m={"auto"}
     objectFit='cover'
     maxW={{ base: '50%', sm: '30%' }}
     src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
     alt='Caffe Latte'
   />
 
   <Stack m="auto">
     <CardBody fontSize={fontSize} bg={"#f5f5f5"} borderRadius={"20px"}>
       <Heading size='md'></Heading>
       <Table   ml={"20px"} w={"100%"}>
         <tr><td >NAME :</td><td>       {`${username}`||"not read"}                     </td></tr>
         <tr ><td>EMAIL :</td><td>     {`${email}`||"not read"}                        </td></tr>
         <tr ><td>CITY :</td><td>     {`${address?.city}`||"not read"}                        </td></tr>
         <tr ><td>PIN CODE :</td><td>     {`${address?.zipcode}`||"not read"}                        </td></tr>
         {/* <tr><td>CITY :</td>  <td style={{backgroundColor:"white"}}><tr><td>CITY :</td>{`${address?.city}`||"not read"}</tr>
                               <tr><td>--Street:</td>{`${address?.street}`||"not read"}</tr>
                               <tr><td>--Pincode:</td>{`${address?.zipcode}`||"not read"}</tr> */}
                               {/* </td></tr> */}
         <tr><td>PHONE :</td> <td>      {phone}                        </td></tr>
       </Table>
     </CardBody>
   </Stack>
 </Card>
  }

      {/* tabs to attain multiple container showcase */}
    {
      !isLoading&&  <Center>
      <Tabs isFitted 
      variant='unstyled'
      // borderBottom={"2px solid black"}
        w={"80%"} mt={"40px"} size='md'
        //  variant='enclosed'
       >
  <TabList>
    <Tab fontSize={fontSize}>Orders</Tab>
    <Tab fontSize={fontSize}>Cart Items</Tab>
  </TabList>
  <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
  <TabPanels>

    <TabPanel>
      {/* --------------------------1------------------- */}
      
     {
       singleUser.orders&&singleUser.orders.length===0&&
       <img style={{width:"50%",margin:"auto"}} 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmijcBU3C1ir1i3w6-9WBstlyK-wdboFki3ll4yTyPbyjZEpu2oGvJlmYXDQ0h9AXffyk&usqp=CAU" alt="" />
       
     }
      {
     
          <SimpleGrid spacing={10} columns={[1,2,3]}  m={"80px auto"} mt={"40px"} w={"80%"} >
          {singleUser.orders&&singleUser.orders.map((el:any)=><ProductCard key={el.id} {...el} />)}
          </SimpleGrid>
      //     <Box justifyContent={"center"}
      //     // m={"auto"}
      //     mb={"20px"}
      //     width={{ base: '90%', sm: '90%', md: '90%', lg: '95%' }}
      //    direction={{ base: 'column', sm: 'row' }}
      //    overflow='hidden'
      //    variant='outline'
      //  >
      //    <Image
      //     // m={"auto"}
      //      objectFit='cover'
      //      maxW={{ base: '50%', sm: '150px' }}
      //      src={ele.image}
      //          alt='Caffe Latte'
      //    />
       
      //    <Stack >
      //      <CardBody fontSize={fontSize}>
      //        <Heading size='md'></Heading>
      //        <Table   ml={"20px"} w={"100%"}>
      //          <tr><td >Product</td><td> -----{ele.name}</td></tr>
      //          <tr ><td>Category</td><td>-----{ele.category}</td></tr>
      //          <tr><td>Price</td><td>-----₹{ele.price}</td></tr>
      //          <tr><td>Order Placed</td> <td>-----Ordered date</td></tr>
      //        </Table>
      //      </CardBody>
      //    </Stack>
      //  </Box>
        // ))
      }
    </TabPanel>
    <TabPanel>
    {
       singleUser.addToCart&&singleUser.addToCart.length===0&&
       <img style={{width:"50%",margin:"auto"}} 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmijcBU3C1ir1i3w6-9WBstlyK-wdboFki3ll4yTyPbyjZEpu2oGvJlmYXDQ0h9AXffyk&usqp=CAU" alt="" />
       
     }
         {/* --------------------------1------------------- */}
         {
         
            <SimpleGrid spacing={10} columns={[1,2,3]}  m={"40px auto"} mt={"40px"} w={"80%"} >
          { singleUser.addToCart&&singleUser.addToCart.map((el:any)=><ProductCard key={el.id} {...el} />)}
          </SimpleGrid>
         }
    </TabPanel>
  </TabPanels>
</Tabs>
</Center>
    }

{/* ======================================== */}
     <AdminFooter/>
  </>);
}

export default SingleUserAdmin;