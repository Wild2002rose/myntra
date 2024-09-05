import React from 'react'
import adidas from "../images/adidas.png"
import asics from "../images/asics.png"
import boss from "../images/boss.png"
import bover from "../images/bover.png"
import nike from "../images/nike.png"
import omega from "../images/omega.png"
import prada from "../images/prada.png"
import puma from "../images/puma.png"
import trends from "../images/trens.jpg"
import zara from "../images/zara.png"
import under from "../images/under.png"



function Logo() {
  return (
    <div className=' flex  items-center h-25 w-full bg-gray-300 '>
        <img src={adidas} alt="" className='w-40 h-20 ml-5 '/>
        <img src={boss} alt="" className='w-40 h-20 ml-5'/>
        <img src={asics} alt="" className='w-40 h-20 ml-5'/>
        <img src={bover} alt="" className='w-40 h-10 ml-5' />
        <img src={nike} alt="" className='w-40 h-10 ml-5'/>
        <img src={omega} alt="" className='w-40 h-20 ml-5'/>
        <img src={prada} alt="" className='w-40 h-10 ml-5'/>
        <img src={puma} alt="" className='w-40 h-10 ml-5'/>
        <img src={trends} alt="" className='w-30 h-10 ml-5'/>
        <img src={under} alt="" className='w-40 h-20 ml-5'/>
        <img src={zara} alt="" className='w-40 h-20 ml-5 mr-5'/>
        
    </div>
  )
}

export default Logo