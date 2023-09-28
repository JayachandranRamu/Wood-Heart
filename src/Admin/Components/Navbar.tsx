import React, { useEffect, useState } from 'react'
import { Grid, GridItem} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {


  type uselinks={
       link:string,
       title:string,
       image:string
  
      }
  const navLinks :uselinks[]=[{link:"/",title:"Dashboard",image:"https://i.ibb.co/MVHGh21/dashboard.png"},
                        {link:"/orders",title:"Orders",image:"https://i.ibb.co/g3gcLRq/analytics.png"},
                         {link:"/users",title:"Users",image:"https://i.ibb.co/GFK8shh/users.png"},
                         {link:"/products",title:"Products",image:"https://i.ibb.co/HNZv9Jp/products.png"}]



          const {pathname}=useLocation();
          const [page,setPage]=useState("");
          useEffect(()=>{
            switch(pathname){
              case "/":{
                return setPage("Dashboard");
              }
              case "/analytics":{
               return setPage("Analytics");
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
        <div className='vNavbar' style={{backgroundColor:"white",width:"90%",height:"100%",margin:"auto"}}>
    {/* logo div 
    nav bar titles
      - dashboard
      -Analytics
      -users
      -Products
      -Orders */}
          <Grid
  h='750px'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(1, 1fr)'
  gap={4}
  >
    <GridItem  colSpan={1} bg='white'>
    <img style={{backgroundColor:"white"}} src="https://i.ibb.co/LJVPxWK/WOOD-HEART-idle.png" alt="" />
    </GridItem>
    <GridItem rowSpan={4} colSpan={1}>
      <Grid h="100%" bg=""  templateRows='repeat(5, 1fr)' w="90%" m="auto" rowGap={10} >
        {
          navLinks.map((ele)=>(
            <GridItem colSpan={1} >
              <Link to={ele.link}> 
            <div style={{height:"100%",
            border:'1px solid white',
            borderRadius:"15px",
            display:"flex",
            backgroundColor:ele.link===pathname?"grey":"orange",
            justifyContent:"space-evenly",alignItems:"center"}}>
            <img src={ele.image} style={{height:"50px"}} alt="" />
            <h1 style={{fontSize:"25px",color:"white"}}>{ele.title}</h1> 
            </div>
            </Link>
            </GridItem>
          ))
        }
      </Grid>
    </GridItem>

   {/* logout section button */}
    
   <Link to=""> 
            <div style={{height:"50%",width:"50%",margin:"auto",
            border:'1px solid white',
            borderRadius:"15px",
            display:"flex",
            backgroundColor:pathname===""?"grey":"orange",
            justifyContent:"space-evenly",alignItems:"center"}}>
            <img src="https://i.ibb.co/kmXbJLJ/Logout.png" style={{height:"25px"}} alt="" />
            <h1 style={{fontSize:"25px" ,color:"white"}}>Logout</h1> 
            </div>
            </Link>
    </Grid>
   </div>
  )
}

export default Navbar

