import React from 'react'
import banner1 from "../images/banner1.jpg"
import banner2 from "../images/flat.jpg"
//import banner3 from "../images/banner3.jpeg"
import boat from "../images/boat.png"
import lakme from "../images/lakme.png"
import Logo from "./Logo"
const Banner = () => {
  return (
    <>
    <div className='bg-gradient-to-b from-white to-gray-100'>
    <div>
        <img src={banner2} className='p-4 w-screen h-80' />
        <img src={banner1} className='p-4 w-screen h-1' />
        {/*<img src={banner3} className='p-4 w-screen' /> */}
    </div>
    <div className='flex h-20  items-center justify-center rounded-lg  ml-4 mr-4 border-2 border-orange-700 shadow-lg bg-gradient-to-b from-orange-200  to-yellow-200 '>
    <h1 className='text-lg text-gray-700 mt-3 p-20 font-semibold '>TITLE SPONSOR</h1> <h1><img src={lakme} className='w-60 h-60  p-10'  /></h1>
    <h1 className='text-lg text-gray-700 mt-3 p-20 font-semibold '>ASSOCIATE SPONSOR </h1> <h1> <img src={boat} className='w-50 h-25 p-5' /></h1>

    </div>

    <div className='mt-2'>
      <Logo/>
    </div>
    </div>
    </>
  )
}

export default Banner