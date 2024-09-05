import React from 'react'
import studio from "../images/Studio.png"
import model from "../images/model.jpeg"

function Studio() {
  return (
    <div className=' absolute shadow-lg  mt-2 studio_section_items   '>

    <div className='grid grid-col  ' >

    <div className='bg-white justify-center items-center bg-gradient-to-br from-white via-rose-300 to-orange-500'>
        
        <img src={studio} alt="" className='w-60 h-20 ml-40' />
        <h1 className='text-md text-black-400 ml-20 '>Your One-stop guide for Fashion <span className='font-bold text-lg'> hacks,tips & tricks!</span> </h1>
        <img src={model} alt=""className=' model ' />
        <h1 className='text-lg font-semibold text-white binge'>+ BINGE & WISHLIST</h1>

    </div>
    </div>
        
    </div>
  )
}

export default Studio