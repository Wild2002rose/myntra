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
import pic18 from "../women/women.webp";
import pic19 from "../women/lady12.webp";
import pic20 from "../women/lady22.avif";

import pic21 from "../skin/toner.jpeg";
import pic22 from "../skin/skin4.webp";
import pic23 from "../skin/shampoo2.jpg";
import pic24 from "../skin/perfume2.jpg";
import pic25 from "../skin/sunscreen2.avif";
import pic26 from "../women/lady10.webp";
import pic27 from "../women/lady13.jpeg";
import pic28 from "../women/lady16.webp";
import pic29 from "../sikn/perfume3.avif";
import pic30 from "../skin/skin.jpg";

import pic31 from "../makeup/kajal.webp";
import pic32 from "../makeup/lipcare.webp";
import pic33 from "../makeup/muskara.jpg";
import pic34 from "../makeup/nailpolish.jpg";
import pic35 from "../makeup/lipstick.jpg";
import pic36 from "../makeup/wax.webp";
import pic37 from "../makeup/shave.jpeg";
import pic38 from "../makeup/straightner.webp";
import pic39 from "../makeup/trimmer.jpg";
import pic40 from "../makeup/body.avif";

import pic41 from "../shoe/shoe.heel2.jpg";
import pic42 from "../shoe/sandal1.webp";
import pic43 from "../shoe/sandal3.avif";
import pic44 from "../shoe/shoe7.jpeg";
import pic45 from "../shoe/shoe8.jpg";
import pic46 from "../shoe/shoe3.jpg";
import pic47 from "../shoe/shoe.shoe.webp";
import pic48 from "../shoe/sandal2.webp";
import pic49 from "../shoe/sandal.jpg";
import pic50 from "../shoe/sandal5.avif";


function Category() {
  return (
    <div>

      <div className=' bar flex flex-row justify-between bg-gradient-to-b from-gray-100 to-gray-50 mt-2 mb-2 '>
      <Link to="/Products" state={{category:"men's clothing "}}>
            <div 
                style={{
                    backgroundImage: `url(${pic1})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: "cover"
                }} 
                className='h-70 w-40 pt-48'
            >
            <div className='bg-white text-black ml-2 mr-2 products flex flex-col items-center justify-center'>
                <h1 className='text-md font-bold'>Nehru Jackets</h1>
                <h1 className='text-2xl font-bold '>Under ₹ 749</h1>
                
            </div>
            </div>
            </Link>
      </div>
    </div>
  )
}

export default Category