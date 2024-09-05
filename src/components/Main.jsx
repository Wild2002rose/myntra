import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Home from './Home'
import Offertime from './Offertime'
//import Products from './Products'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Shop from './Shop'
//import Footer from "./Footer"
import End from "./End"
import AddProduct from './AddProduct'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test1 from './Test1'

function Main() {

  const [product, setProduct] = useState([]);
  const location =useLocation()


    const getProducts = async () => {
        try {
            await fetch('https://fakestoreapi.com/products')
                .then(res => res.json(
                  console.log(res.data)
                ))
                .then(json => setProduct(json));
                
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);


  return (
    <div>
        <Nav/>
        <Offertime/>
        <Banner/>
        <Home/>
        {/* <Products product = {product}/> */}
        <Shop/>
        {/* <AddProduct/> */}
        <End/>
        

    </div>
  )
}

export default Main