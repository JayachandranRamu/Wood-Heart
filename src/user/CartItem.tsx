import { CloseButton, Flex, Link, Text } from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useState,useEffect } from 'react';



export const CartItem = (props: any) => {
  const {
    isGiftWrapping,
    id,
    name,
    category,
    brand,
    quan,
    image,
    price,
    availableQuantity, 
    onChangeQuantity,
    onClickDelete,
    onUpdateTotalPrice,
  } = props

  
  console.log(quan)
  // Use state to track gauris quantity
  const [quantity, setQuantity] = useState(quan);


  
    const quantityLimit = availableQuantity || 50;



const handleQuantityChange = (newQuantity: number) => {

  setQuantity(newQuantity);
  onChangeQuantity(id, newQuantity);
  const updatedPrice = calculateUpdatedPrice(newQuantity);
    onUpdateTotalPrice?.(updatedPrice);
};


// eslint-disable-next-line react-hooks/exhaustive-deps
const calculateUpdatedPrice = (newQuantity: number) => {

  return price * newQuantity;
};


  const incrementQuantity = () => {
    if (quantity < quantityLimit) {
    
      handleQuantityChange(+quantity+1);
    }
  };


  const decrementQuantity = () => {
    if (quantity > 1) {
      handleQuantityChange((+quantity) - 1);
    }
  };

  useEffect(() => {
    onUpdateTotalPrice?.(calculateUpdatedPrice(quantity));
  }, [calculateUpdatedPrice, onUpdateTotalPrice, quantity]);

  return (
    <Flex fontFamily={"poppins"}  bgColor={"white"} p={"20px 30px"} borderRadius={"20px"} direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      <CartProductMeta
        name={name}
        description={category}
        image={image}
        price={price}
        brand={brand}
        isGiftWrapping={isGiftWrapping}
      />

      {/* gbDesktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>

        <Flex align="center" gap={5} 
        justify="space-between" 
        border="1px solid " 
 fontSize={"16px"}
 fontWeight={"600"}
         borderRadius='4'
         boxShadow='base' 
         p='1' 
         color={"white"}
         rounded='md'
        bg="#174b69">
          <button onClick={decrementQuantity} disabled={quantity <= 1}   
           style={{
    
            borderRadius: '4px', 
            padding: '4px', 
            paddingLeft:"10px"
          }}
          >-</button>
          <Text>{quantity}</Text>
          <button onClick={incrementQuantity} disabled={quantity >= quantityLimit}
           style={{
       
            borderRadius: '4px', 
            padding: '4px', 
            paddingRight:"10px"
          }}
          
          >+</button>
        </Flex>

        <PriceTag price={calculateUpdatedPrice(quantity)} currency={"USD"} />
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={()=>{onClickDelete?.(id)} }/>
      </Flex>


      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="m" color={"red"} fontWeight={"500"} letterSpacing={"1px"} border={"1px solid red"} padding={"8px 10px"} borderRadius={"10px"}
         onClick={() => onClickDelete?.(id)}>
          DELETE
        </Link>
  

        <Flex align="center" gap={5} 
        justify="space-between" 
        border="1px solid  "  
        borderColor={"gray.200"}  
        borderRadius='4'
        boxShadow='base' p='1' 
        rounded='md'
        color={"white"}
   bg="#174b69">
          <button onClick={decrementQuantity} disabled={quantity <= 1}
           style={{
         
            borderRadius: '4px', 
            padding: '4px', 
          }}
          >-</button>
          <Text>{quantity}</Text>
          <button onClick={incrementQuantity} disabled={quantity >= quantityLimit}
           style={{
          
            borderRadius: '4px', 
            padding: '4px', 
          }}
          
          
          >+</button>
        </Flex>
        <PriceTag price={calculateUpdatedPrice(quantity)} currency={"USD"} />
      </Flex>
    </Flex>
  )
}


