/* eslint-disable no-irregular-whitespace */

import { Route, Routes } from 'react-router-dom'

import { Alert, AlertIcon, Stack } from '@chakra-ui/react'
import HomePage from '../Pages/HomePage'
import ProductPage from '../Pages/ProductPage'
import SingleProduct from '../Pages/SingleProduct'
import {Checkout} from '../user/Checkout'
import OrderConfirmation from '../user/OrderConfirmation'



const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}   />  
        <Route path=":name" element={<ProductPage/>} />
        <Route path="/product:id" element={<SingleProduct/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/order-confirmation" element={<OrderConfirmation/>} />
        <Route path="*" element={<Stack spacing={3}>
  <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>  </Stack>} />
    </Routes>
  )
}

export default MainRoutes