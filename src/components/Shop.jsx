import React from 'react'
import { Link } from 'react-router-dom'

import pic1 from "../men/pic1.avif";
import pic2 from "../men/blazer.jpg";
import pic3 from "../men/men20.jpg";
import pic4 from "../men/men17.webp";
import pic5 from "../men/men16.jpg";
import pic6 from "../men/track.jpg";
import pic7 from "../men/men14.jpg";
import pic8 from "../men/men13.jpg";
import pic9 from "../men/men7.jpg";
import pic10 from "../men/men10.jpg";

import pic11 from "../women/pic11.jpg";
import pic12 from "../women/lady6.avif";
import pic13 from "../women/lady7.png";
import pic14 from "../women/lady18.jpg";
import pic15 from "../women/lady5.jpg";
import pic16 from "../women/lady19.avif";
import pic17 from "../women/lady20.jpeg";
import pic18 from "../women/women21.webp";
import pic19 from "../women/lady12.webp";
import pic20 from "../women/lady22.avif";

import pic21 from "../skin/toner.jpeg";
import pic22 from "../skin/skin4.webp";
import pic23 from "../skin/shampoo2.jpg";
import pic24 from "../skin/perfume2.jpg";
import pic25 from "../skin/sunscreen2.avif";
import pic26 from "../women/lady10.webp";
import pic27 from "../women/lady13.jpg";
import pic28 from "../women/lady16.webp";
import pic29 from "../skin/perfume3.avif";
import pic30 from "../skin/skin.jpg";

import pic31 from "../makeup/kajal.webp";
import pic32 from "../makeup/lipcare.webp";
import pic33 from "../makeup/muskara.jpg";
import pic34 from "../makeup/nailpolish.jpg";
import pic35 from "../makeup/lipsticks.jpg";
import pic36 from "../makeup/wax.webp";
import pic37 from "../makeup/shave.jpeg";
import pic38 from "../makeup/straightner.webp";
import pic39 from "../makeup/trimmer.jpg";
import pic40 from "../makeup/body.avif";

import pic41 from "../shoe/heel2.jpg";
import pic42 from "../shoe/sandal1.webp";
import pic43 from "../shoe/sandal3.avif";
import pic44 from "../shoe/shoe7.jpeg";
import pic45 from "../shoe/shoe8.jpg";
import pic46 from "../shoe/shoe3.jpg";
import pic47 from "../shoe/shoe.webp";
import pic48 from "../shoe/sandal2.webp";
import pic49 from "../shoe/sandal4.jpg";
import pic50 from "../shoe/sandal5.avif";


function Shop() {
  return (
    <div>

      <div className=' bar flex flex-row justify-between bg-white mt-2 mb-2 '>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic1})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='slide h-68 w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Nehru Jackets</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>749</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic2})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Blazers</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>1799</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic3})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Kurta Sets</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>899</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic4})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Kurtas</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>599</span></h1>
                
            </div>
            </div>
            </Link>
            
            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic5})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
               className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Shorts</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>399</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic6})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Track Pants</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>399</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic7})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Cargo Pants</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>699</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic8})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Jeans</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>1499</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic9})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
               className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Anime Shirts</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>399</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Men wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic10})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Shirts</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>349</span></h1>
                
            </div>
            </div>
            </Link>
      </div>

      <div className=' bar flex flex-row justify-between bg-white mt-2 mb-2 '>

            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic11})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='slide h-68 w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Palazzo Pants</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>249</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic12})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Kurtas</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>299</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic13})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Blouse Set</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>499</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic14})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Shorts</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>399</span></h1>
                
            </div>
            </div>
            </Link>
            
            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic15})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
               className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Cotton Sarees</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>599</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic16})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Shirts</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>399</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic17})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Track Pants</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>399</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic18})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Ethnic Wear</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>1199</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic19})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
               className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Jeans</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>999</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Women wear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic20})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Sarees</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>699</span></h1>
                
            </div>
            </div>
            </Link>
      </div>

      <div className=' bar flex flex-row justify-between bg-gradient-to-b from-gray-100 to-gray-50 mt-2 mb-2 '>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic21})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='slide h-68 w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Toner</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>121</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic22})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Skin Care</h1>
                <h1 className='text-md font-bold '>Starting<sup className='text-sm'>₹</sup><span className='text-lg'>149</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic23})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Shampoos</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>111</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic24})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Perfume</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>199</span></h1>
                
            </div>
            </div>
            </Link>
            
            <Link to="/Products" state={{category:"Personal care  "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic25})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
               className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Face Masks</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>99</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Accessories "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic26})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Oxidised One</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>69</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Accessories "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic27})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Clips</h1>
                <h1 className='text-md font-bold '>Staring <sup className='text-sm'>₹</sup><span className='text-lg'>49</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic28})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>MakeUp Kit</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>999</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic29})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
               className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Perfume</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>249</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic30})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Body wax</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>121</span></h1>
                
            </div>
            </div>
            </Link>
      </div>

      <div className=' bar flex flex-row justify-between bg-gradient-to-b from-gray-100 to-gray-50 mt-2 mb-2 '>

            <Link to="/Products" state={{category:"Personal Care"}}>
            <div 
                style={{
                    backgroundImage: `url(${pic31})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='slide h-68 w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Kajals</h1>
                <h1 className='text-md font-bold '>Starrting<sup className='text-sm'>₹</sup><span className='text-lg'>49</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic32})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Lipcare</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>39</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic33})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Muskara</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>99</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic34})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Nailpolishes</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>59</span></h1>
                
            </div>
            </div>
            </Link>
            
            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic35})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
               className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Lipsticks</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>99</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic36})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Waxing</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>79</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic37})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Shaving Material</h1>
                <h1 className='text-md font-bold '>Starting<sup className='text-sm'>₹</sup><span className='text-lg'>79</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Accessories "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic38})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Strightner</h1>
                <h1 className='text-md font-bold '>Starting<sup className='text-sm'>₹</sup><span className='text-lg'>999</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Accessories "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic39})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
               className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Trimmers</h1>
                <h1 className='text-md font-bold '>Starting <sup className='text-sm'>₹</sup><span className='text-lg'>374</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Personal Care "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic40})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Body Wash</h1>
                <h1 className='text-md font-bold '>Starting<sup className='text-sm'>₹</sup><span className='text-lg'>149</span></h1>
                
            </div>
            </div>
            </Link>
      </div>

      <div className=' bar flex flex-row justify-between bg-gradient-to-b from-gray-100 to-gray-50 mt-2 mb-2 '>

            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic41})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='slide h-68 w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Heels</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>549</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic42})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Crocks</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>399</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic43})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Sandals</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>499</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic44})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Formal Shoes</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>1399</span></h1>
                
            </div>
            </div>
            </Link>
            
            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic45})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
               className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Boots</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>1199</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic46})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Shoes</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>399</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic47})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Casual Shoes</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>799</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic48})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Flats</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>349</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic49})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
               className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>Sandals</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>399</span></h1>
                
            </div>
            </div>
            </Link>

            <Link to="/Products" state={{category:"Footwear "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic50})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-68 slide w-32 pt-44'
            >
            <div className='bg-black text-white ml-2 mr-2 shop flex flex-col items-center justify-center rounded-lg'>
                <h1 className='text-sm font-bold'>FlipFlops</h1>
                <h1 className='text-md font-bold '>Under <sup className='text-sm'>₹</sup><span className='text-lg'>249</span></h1>
                
            </div>
            </div>
            </Link>
      </div>
    </div>
  )
}

export default Shop;