import { HStack, StackProps, Text, TextProps, useColorModeValue as mode } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface PriceTagProps {
  currency: string
  price: number
  salePrice?: number
  rootProps?: StackProps
  priceProps?: TextProps
  salePriceProps?: TextProps
}

export type FormatPriceOptions = { locale?: string; currency?: string }

// eslint-disable-next-line react-refresh/only-export-components
export function formatPrice(value: number, opts: { locale?: string; currency?: string } = {}) {
  const { locale = 'en-US', currency = 'USD' } = opts // Updated locale to 'en-IN' for Indian Rupees
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    currencyDisplay: 'symbol', // To display currency symbol
    maximumFractionDigits: 2,
  })
  return formatter.format(value)
}

export const PriceTag = (props: PriceTagProps) => {
  const { price, currency, salePrice, rootProps, priceProps, salePriceProps } = props
  return (
    <HStack spacing="1" {...rootProps}>
      <Price isOnSale={!!salePrice} textProps={priceProps}>
        {formatPrice(price, { currency })}
      </Price>
      {salePrice && (
        <SalePrice {...salePriceProps}>{formatPrice(salePrice, { currency })}</SalePrice>
      )}
    </HStack>
  )
}

interface PriceProps {
  children?: ReactNode
  isOnSale?: boolean
  textProps?: TextProps
}

const Price = (props: PriceProps) => {
  const { isOnSale, children, textProps } = props


  return (
    <Text
    color="#ffb431"
      as="span"
      fontWeight="bold"
      letterSpacing={"1px"}
   fontSize={"20px"}
      textDecoration={isOnSale ? 'line-through' : 'none'}
      {...textProps}
    >
     {children}
    </Text>
  )
}

const SalePrice = (props: TextProps) => (
  <Text as="span" fontWeight="semibold" color={mode('gray.800', 'gray.100')} {...props} />
)
