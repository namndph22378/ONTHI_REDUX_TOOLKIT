import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './component/ProductDetail';
import ProductList from './component/admin/ProductList';
import AddProduct from './component/admin/AddProduct';
import UpdateProduct from './component/admin/UpdateProduct';
import HomePage from './component/HomePage';
import Signup from './component/Signup';
import Signin from './component/Signin';
function App() {
  return (
    <div className="App">
        <Routes>
            <Route  path='/' element={<HomePage />} />
            <Route  path='product/:id' element={<ProductDetail />} />
            <Route  path='admin/product' element={<ProductList />} />
            <Route  path='admin/product/add' element={<AddProduct />} />
            <Route  path='admin/product/update/:id' element={<UpdateProduct />} />

            <Route  path='signup' element={<Signup />} />
            <Route  path='signin' element={<Signin />} />


        </Routes>
    </div>
  );
}

export default App;
