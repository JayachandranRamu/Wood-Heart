import { CloseButton, Flex, Link, useColorModeValue,Text } from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useState,useEffect } from 'react';

type CartItemProps = {
  isGiftWrapping?: boolean;
  id: number; 
  name: string;
  about: string;
  category: string;
  color: string;
  quantity: number;
  price: number;
  currency: string;
  image: string;
  availableQuantity?: number; 
  onChangeQuantity?: (id: number, newQuantity: number) => void;
  onPriceChange?: (id: number, newPrice: number) => void;
  onClickGiftWrapping?: () => void;
  onClickDelete?: (id: number) => void; 
  onUpdateTotalPrice?: (newTotal: number) => void;
};


export const CartItem = (props: CartItemProps) => {
  const {
    isGiftWrapping,
    id,
    name,
    // about,
    category,
    color,
    quantity: initialQuantity,
    image,
    price,
    availableQuantity, 
    onChangeQuantity,
    onClickDelete,
    onUpdateTotalPrice,
  } = props

  
  
  // Use state to track gauris quantity
  const [quantity, setQuantity] = useState(initialQuantity);

  const borderColor = useColorModeValue('#0b3954', '#0b3954'); 
  
    const quantityLimit = availableQuantity || 50;



const handleQuantityChange = (newQuantity: number) => {
  setQuantity(newQuantity);
  onChangeQuantity?.(id, newQuantity);
  const updatedPrice = calculateUpdatedPrice(newQuantity);

    onUpdateTotalPrice?.(updatedPrice);
};


// eslint-disable-next-line react-hooks/exhaustive-deps
const calculateUpdatedPrice = (newQuantity: number) => {
  return price * newQuantity;
};


  const incrementQuantity = () => {
    if (quantity < quantityLimit) {
    
      handleQuantityChange(quantity+1);
    }
  };


  const decrementQuantity = () => {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };

  useEffect(() => {
    onUpdateTotalPrice?.(calculateUpdatedPrice(quantity));
  }, [calculateUpdatedPrice, onUpdateTotalPrice, quantity]);

  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      <CartProductMeta
        name={name}
        // description={about}
        category={category}
        color={color}
        image={image}
        isGiftWrapping={isGiftWrapping}
      />

      {/* gbDesktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>

        <Flex align="center" gap={5} 
        justify="space-between" 
        border="1px solid " 
         borderColor={ "gray.200"} 
         borderRadius='4'
         boxShadow='base' 
         p='1' 
         rounded='md'
        bg='white'>
          <button onClick={decrementQuantity} disabled={quantity <= 1}   
           style={{
            border: `1px solid ${borderColor}`,
            borderRadius: '4px', 
            padding: '4px', 
          }}
          >-</button>
          <Text>{quantity}</Text>
          <button onClick={incrementQuantity} disabled={quantity >= quantityLimit}
           style={{
            border: `1px solid ${borderColor}`,
            borderRadius: '4px', 
            padding: '4px', 
          }}
          
          >+</button>
        </Flex>

        <PriceTag price={calculateUpdatedPrice(quantity)} currency={"INR"} />
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={()=>{onClickDelete?.(id)} }/>
      </Flex>

      {/* gbMobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline" onClick={() => onClickDelete?.(id)}>
          Delete
        </Link>
  

        <Flex align="center" gap={5} 
        justify="space-between" 
        border="1px solid  "  
        borderColor={"gray.200"}  
        borderRadius='4'
        boxShadow='base' p='1' 
        rounded='md' bg='white'>
          <button onClick={decrementQuantity} disabled={quantity <= 1}
           style={{
            border: `1px solid ${borderColor}`,
            borderRadius: '4px', 
            padding: '4px', 
          }}
          >-</button>
          <Text>{quantity}</Text>
          <button onClick={incrementQuantity} disabled={quantity >= quantityLimit}
           style={{
            border: `1px solid ${borderColor}`,
            borderRadius: '4px', 
            padding: '4px', 
          }}
          
          
          >+</button>
        </Flex>
        <PriceTag price={calculateUpdatedPrice(quantity)} currency={"INR"} />
      </Flex>
    </Flex>
  )
}


