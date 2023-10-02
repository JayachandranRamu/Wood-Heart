import { Box, Flex, Select, Text } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { useState,useEffect } from 'react';


const Sort = ({results}:any) => {

  const [searchParam,setSearchParam]=useSearchParams();

const [rating, setRating] = useState(searchParam.get("rating") || "");
const [order,setOrder] = useState(searchParam.get("_order") || "")


useEffect(() => {

  if (order && rating=="" ) {
    setSearchParam({
      _sort:"price",
_order:order
    });
  } else if(order && rating!="") {
    setSearchParam({
      rating,
           _sort:"price",
     _order:order
         });
  }else if(rating==""){
    setSearchParam({
    
         });
  }else{
    setSearchParam({
      rating
         });
  }
}, [order,rating]);


  return (
    <div>
      <Flex w={"80%"}  m={"auto"} mt={"40px"} gap={["25px",0,0]} alignItems={"center"} justifyContent={"space-between"} direction={["column","row"]}>
<Box>

<Text>Showing all {results} results.</Text>
</Box>
<Box w={["100%","30%"]}>
  <Flex  alignItems={"center"} justifyContent={"space-between"} gap={["20px",0,0]} direction={["column","row"]}>
      <Box>
      <Select variant='filled'  value={rating} name='rating' onChange={(e)=>setRating(e.target.value)}  bg={"#f5f5f5"}>
      <option value="">Filter By Rating</option>
      <option value='5'>5</option>
        <option value='4'>4</option>
  <option value='3'>3</option>
  <option value='2'>2</option>
  <option value='1'>1</option>
          </Select> 
      </Box>
       <Box>
       <Select variant='filled' value={order} name='price'  onChange={(e)=>setOrder(e.target.value)}  bg={"#f5f5f5"}>
       <option value=''>Sort By Price</option>
        <option value='asc'>Low To High</option>
  <option value='desc'>High To Low</option>

          </Select> 
          </Box>
          </Flex>
       </Box>
          </Flex>
    </div>
  )
}

export default Sort