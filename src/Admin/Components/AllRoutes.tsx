import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Analytics from '../Pages/Analytics'
import Users from '../Pages/Users'
import Products from '../Pages/Products'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/analytics" element={<Analytics/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/Products" element={<Products/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes