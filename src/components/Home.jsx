//import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
//import Logo from './Logo.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Carousel } from 'react-responsive-carousel';


import shoe1 from "../shoe/shoe6.jpeg";
import shoe2 from "../shoe/shoe2.jpg";
import shoe3 from "../shoe/shoe1.jpeg";
import shoe4 from "../shoe/heel2.jpg";
import shoe5 from "../shoe/shoe6.jpeg";


import men1 from "../men/men1.webp";
import men2 from "../men/men3.jpeg";
import men3 from "../men/men4.avif";
import men4 from "../men/men5.avif";
import men5 from "../men/men9.jpg";
import men6 from "../men/men9.webp";
import men7 from "../men/men11.avif";
import men8 from "../men/men21.jpeg";
import men9 from "../men/men2.jpg"

import women1 from "../women/lady1.jpeg";
import women2 from "../women/lady2.webp";
import women3 from "../women/lady3.webp";
import women4 from "../women/lady4.jpg";
import women5 from "../women/lady8.jpg";
import women6 from "../women/lady9.jpeg";

import bag1 from "../bag/bag5.jpg";
import bag2 from "../bag/bag2.webp";
import bag3 from "../bag/bag3.jpeg";
import bag4 from "../bag/bag4.jpeg";
import bag5 from "../bag/bag1.jpeg"

import belt from "../men/men15.jpeg";

import perfume1 from "../skin/perfume.webp"

import makeup1 from "../images/Cloth.webp";

import shop1 from "../images/shop1.webp"





const Home = () => {
    
    

    return (
        <> 
        <div className="slider-container">
        
        <Carousel showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={5000}
                transitionTime={500}>
        <div className=' bar flex flex-row justify-between bg-gradient-to-b from-gray-100 to-gray-50 mt-2 mb-2 '>
            <Link to="/Products" state={{category:"men's clothing"}}>
            <div 
                style={{
                    backgroundImage: `url(${men1})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Trendy Suits</h1>
                <h1 className='text-2xl font-bold '>MIN 40% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"women's clothing"}}>
            <div 
                style={{
                    backgroundImage: `url(${women1})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Fabulously Designed</h1>
                <h1 className='text-2xl font-bold '>MIN 50% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"jewelery"}}>
            <div 
                style={{
                    backgroundImage: `url(${bag1})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Exquisite Buys</h1>
                <h1 className='text-2xl font-bold '>MIN 70% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"electronics"}}>
            <div 
                style={{
                    backgroundImage: `url(${shoe1})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Sporty Collection</h1>
                <h1 className='text-2xl font-bold '>MIN 30% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${women2})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Printed Kurtas & More</h1>
                <h1 className='text-2xl font-bold '>MIN 55% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${men2})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Best Of Casuals</h1>
                <h1 className='text-2xl font-bold '>MIN 40% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${men3})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Top Rated Style</h1>
                <h1 className='text-2xl font-bold '>MIN 60% OFF</h1>
                
            </div>
            </div>
            </Link>
            
        </div>


        <div className='bar flex flex-row justify-between bg-gradient-to-b from-gray-100 to-gray-50 mt-2 mb-2'>
            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${women4})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Trendy Sarees</h1>
                <h1 className='text-2xl font-bold '>MIN 40% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${men6})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Sophisticated Workwear</h1>
                <h1 className='text-2xl font-bold '>MIN 60% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:" Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${shoe2})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Walk In Style</h1>
                <h1 className='text-2xl font-bold '>MIN 65% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men Wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${men5})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Trendy Shirts</h1>
                <h1 className='text-2xl font-bold '>MIN 45% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Accessories "}}>
            <div 
                style={{
                    backgroundImage: `url(${bag2})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Versatile Slings</h1>
                <h1 className='text-2xl font-bold '>MIN 75% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${women3})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Stunning Styles</h1>
                <h1 className='text-2xl font-bold '>MIN 70% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${men4})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Hottest New Trend </h1>
                <h1 className='text-2xl font-bold '>MIN 30% OFF</h1>
                
            </div>
            </div>
            </Link>
            
        </div>

        <div className=' bar flex flex-row justify-between bg-gradient-to-b from-gray-100 to-gray-50 mt-2 mb-2'>
            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${shoe2})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>premium Edit</h1>
                <h1 className='text-2xl font-bold '>MIN 40% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${men7})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Trendy Jeans</h1>
                <h1 className='text-2xl font-bold '>MIN 35% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Accessories "}}>
            <div 
                style={{
                    backgroundImage: `url(${bag3})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Versatile Slings</h1>
                <h1 className='text-2xl font-bold '>MIN 40% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men Wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${men8})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Workwear Collections</h1>
                <h1 className='text-2xl font-bold '>MIN 30% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Accessories "}}>
            <div 
                style={{
                    backgroundImage: `url(${belt})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Leather Belts</h1>
                <h1 className='text-2xl font-bold '>MIN 35% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${women5})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Gram ready</h1>
                <h1 className='text-2xl font-bold '>MIN 20% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Accessories "}}>
            <div 
                style={{
                    backgroundImage: `url(${bag5})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>All In One</h1>
                <h1 className='text-2xl font-bold '>MIN 80% OFF</h1>
                
            </div>
            </div>
            </Link>
            
        </div>
            

        <div className='bar flex flex-row justify-between bg-gradient-to-b from-gray-100 to-gray-50 mt-2 mb-2'>
        <Link to="/Products" state={{category:"Accessories "}}>
            <div 
                style={{
                    backgroundImage: `url(${bag4})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Big Pocket</h1>
                <h1 className='text-2xl font-bold '>MIN 85% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${shoe3})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Light Your Road</h1>
                <h1 className='text-2xl font-bold '>MIN 30% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${shoe4})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Raise Your Height</h1>
                <h1 className='text-2xl font-bold '>MIN 20% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men Wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${men9})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Gym Ready Fits</h1>
                <h1 className='text-2xl font-bold '>MIN 50% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Women Wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${women6})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Choose Your Comfort</h1>
                <h1 className='text-2xl font-bold '>MIN 25% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${perfume1})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Leave Your Presence</h1>
                <h1 className='text-2xl font-bold '>MIN 20% OFF</h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${shoe5})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-72 w-52 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Function & Style</h1>
                <h1 className='text-2xl font-bold '>MIN 40% OFF</h1>
                
            </div>
            </div>
            </Link>


        </div>

        </Carousel>

        
</div>
<div className='flex flex-col justify-center items-center '>
<h1 className='text-3xl text-orange-600 font-bold mt-5 ml-200'> SHOP BY CATEGORY </h1>
</div>


        
        </>
    );
};

export default Home;





