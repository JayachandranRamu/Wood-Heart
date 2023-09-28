import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Alert, AlertIcon, Stack } from '@chakra-ui/react'
import HomePage from '../Pages/HomePage'
import ProductPage from '../Pages/ProductPage'
import SingleProduct from '../Pages/SingleProduct'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}   />  
        <Route path=":name" element={<ProductPage/>} />
        <Route path="/product:id" element={<SingleProduct/>} />
        <Route path="*" element={<Stack spacing={3}>
  <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>  </Stack>} />
    </Routes>
  )
}

export default MainRoutes