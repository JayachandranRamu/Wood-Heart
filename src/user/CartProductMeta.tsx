import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { FiGift } from 'react-icons/fi'

export type CartProductMetaProps = {
  isGiftWrapping?: boolean
  name: string
  description: string
  image: string
  price:any
  brand:string
}

export const CartProductMeta = (props: CartProductMetaProps) => {
  const { isGiftWrapping = true, image,brand, name, description,price } = props
  return (
    <Stack direction="row" spacing="5" width="full" >
      <Image
        rounded="lg"

        height="150px"

        src={image}
        alt={name}
  
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            {description}
          </Text>
          {/* <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            {brand}
          </Text> */}
      
          <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            Price : $ {price}
          </Text>
        </Stack>
      </Box>
    </Stack>
  )
}