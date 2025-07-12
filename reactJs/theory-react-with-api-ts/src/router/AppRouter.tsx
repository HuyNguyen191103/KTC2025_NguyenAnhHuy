import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from '../main/products/ProductList'
import ProductAdd from '../main/products/ProductAdd'
import ProductDetail from '../main/products/ProductDetail'
import ProductDetailEdit from '../main/products/ProductDetailEdit'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ProductList />}></Route>
            <Route path='/product/add' element={<ProductAdd />}></Route>
            <Route path='/products/:id' element={<ProductDetail />}></Route>
            <Route path='/product/:id/edit' element={<ProductDetailEdit />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter