import React, { useState, useEffect } from 'react';

function Offertime() {
  const [time, setTime] = useState({ hh: 0, mm: 0, ss: 0 });

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime({
        hh: date.getHours(),
        mm: date.getMinutes(),
        ss: date.getSeconds(),
      });
    };

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-gradient-to-l from-blue-100 via-blue-50 to-gray-100 w-full flex flex-col items-center justify-center mt-1 h-14'>
      <h1 className='text-gray-700 text-lg'>
        Sale Ends In
        <span className=' ml-8 '>
          <span className='font-bold text-2xl text-rose-500'>{time.hh}</span>
          <span className='text-gray-600 text-sm ml-2'>H</span> 
          <span className='text-gray-600 text-xl ml-1 mr-2'>:</span>
          <span className='font-bold text-2xl text-rose-500'>{time.mm}</span>
          <span className='text-gray-600 text-sm ml-2'>M</span> 
          <span className='text-gray-600 text-xl ml-1 mr-2'>:</span>
          <span className='font-bold text-2xl text-rose-500'>{time.ss}</span>
          <span className='text-gray-600 text-sm ml-2 mr-2'>S</span>
        </span>
      </h1>
    </div>
  );
}

export default Offertime;
