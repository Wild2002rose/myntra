import React from 'react'
import './App.css';
import Login from './components/Login';
import {Routes,Route} from "react-router-dom"
import Main from './components/Main';
import Products from './components/Products';
import Details from './components/Details';
import AddProduct from './components/AddProduct';
import Test1 from './components/Test1';
import pic1 from "./men/blazer.jpg";
import Bag from './components/cart/Bag';
import { CartProvider } from './components/cart/Cartcontext';
import Wishlist from './components/wishlist/Wish';
import { WishProvider } from './components/wishlist/Wishcontext';



const initialProducts = [
  {
    id: 1,
    title: 'Blazers',
    price: 2000,
    images: [pic1, pic1, pic1],
    category: { name: 'Men wear' }
  },
  
];

const App = () => {
  return (
    <>
    <WishProvider>
    <CartProvider>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/products' element={<Products/>}/>
      {/* <Route path="/" element={<Products initialProducts={initialProducts} />}/> */}
      <Route path='/Test1' element={<Test1/>}/>
      <Route path='products/:id' element= {<Details/>} />
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='/cart' element={<Bag/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>
    </CartProvider>
    </WishProvider>
    
      
    </>
  )
}


export default App;