import { CloseButton, Flex, Link, Select, SelectProps, useColorModeValue } from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import React, { useState,useEffect } from 'react';


type CartItemProps = {
  isGiftWrapping?: boolean
  name: string
  description: string
  quantity: number
  price: number
  currency: string
  imageUrl: string
  onChangeQuantity?: (quantity: number) => void
  onClickGiftWrapping?: () => void
  onClickDelete?: () => void
  onUpdateTotalPrice?: (newTotal: number) => void; 
}

const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('#0b3954', '#0b3954')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

export const CartItem = (props: CartItemProps) => {
  const {
    isGiftWrapping,
    id,
    name,
    description,
    quantity: initialQuantity,
    imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
    onUpdateTotalPrice,
  } = props


  // Use state to track gauris the quantity
  const [quantity, setQuantity] = useState(initialQuantity);

   // Function gauri to handle quantity change
   const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity); // Update the local state
    onChangeQuantity?.(id, newQuantity); // Call the prop function
    onUpdateTotalPrice?.(calculateUpdatedPrice(newQuantity)); //Gauri Call the function to update total price
  
  };

   // Function to calculate the updated price based on quantity
   const calculateUpdatedPrice = (newQuantity: number) => {
    // return price * quantity;
    return price * newQuantity;
  };


    // // Function to remove an item from the cart
    // const handleRemoveItem = () => {
    //   onClickDelete?.(id); // Pass "id" here instead of "name"
    // };
  

   // Update the total cart price when quantity changes
  useEffect(() => {
    onUpdateTotalPrice?.(calculateUpdatedPrice(quantity));
  }, [quantity, onUpdateTotalPrice]);

  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      <CartProductMeta
        name={name}
        description={description}
        image={imageUrl}
        isGiftWrapping={isGiftWrapping}
      />

      {/* gbDesktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            handleQuantityChange(+e.currentTarget.value); 
          }}
        />
        <PriceTag price={calculateUpdatedPrice(quantity)} currency={currency} />
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
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            handleQuantityChange(+e.currentTarget.value);
          }}
        />
        <PriceTag price={calculateUpdatedPrice(quantity)} currency={currency} />
      </Flex>
    </Flex>
  )
}