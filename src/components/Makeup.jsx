import React from 'react';

const Makeup = () => {
  return (
    <div className='absolute shadow-lg p-5 mt-2 makeup_section_items w-full bg-white'>
      <div className='flex flex-cols-5 '>
        {/* Column 1 */}
        <div className='bg-white p-2 '>
          <div>
            <span className='text-orange-400 font-bold mt-5'>Makeup</span>
            <div className='mt-3'>
              Lipstick <br />
              Lip Gloss <br />
              Lip Liner <br />
              mascara <br />
              Eyeliner <br />
              Kajal <br />
              Eyeshadow <br />
              Foundation <br />
              Primer <br />
              Concealer <br />
              Compact <br />
              Nail Polish <br />
            </div>
          </div>
          
        </div>
        {/* Column 2 */}
        <div className='bg-gray-100 p-3'>
          <div>
            <span className='text-orange-400 font-bold'>Skincare, Bath & Body</span>
            <div className=' mt-3'>
              Face Moisturiser <br />
              Cleanser <br />
              Masks & Peel <br />
              Sunscreen <br />
              Serum <br />
              Face Wash <br />
              Eye Cream <br />
              Lip Balm <br />
              Body Lotion <br />
              Body Wash <br />
              Body Scrub <br />
              Hand Cream <br />
            </div>
          </div>
          <div>
            <span className='text-orange-400 font-bold'>Baby Care</span>
          </div>
          <div>
            <span className='text-orange-400 font-bold'>Masks</span>
          </div>
        </div>
        {/* Column 3 */}
        <div className='bg-white p-3'>
          
          <div className='mt-3'>
            <span className='text-orange-400 font-bold'>Haircare</span>
            <div className='mt-3'>
              Shampoo <br />
              Conditioner <br />
              Hair Cream <br />
              Hair Oil <br />
              Hair Gel <br />
              Hair Color <br />
              Hair serum <br />
              Hair Accessory <br />

            </div>
          </div>

          <div className='mt-3'>
            <span className='text-orange-400 font-bold'>Fragrance </span>
            <div className='mt-3'>
                Perfume <br />
                Deodorant <br />
                Body Mist <br />
            </div>
          </div>
          

          
        </div>
        {/* Column 4 */}
        <div className='p-3 bg-gray-100'>
          <div className='mt-3'>
            <span className='text-orange-400 font-bold'>Appliances</span>
            <div className='mt-3'>
                 Hair Straightner <br />
                 Hair Dryer <br />
                 Epilator <br />

            </div>
          </div>

          <div>
            <span className='text-orange-400 font-bold'>Men's Grooming</span>
            <div className='mt-3'>
              Trimmers <br />
              Beard Oil <br />
              Hair Wax <br />
            </div>
          </div>
          <div className='mt-3'>
            <span className='text-orange-400 font-bold'>Beauty gifts</span>
            <div>
                Beauty gifts <br />
                Makeup Kit <br />
            </div>
          </div>

          <div>
            <span className='text-orange-400 font-bold'>Premium beauty </span>
          </div>
          <div>
            <span className='text-orange-400 font-bold'>Wellness & Hygene</span>
          </div>
          
        </div>
        {/* Column 5 */}
        <div className='p-3 bg-white'>
          
          <div className='mt-3'>
            <span className='text-orange-400 font-bold'>Top Brands</span>
            <div className='mt-3'>
              Lakme <br />
              Maybelline <br />
              Philips <br />
              Bath & Body Works <br />
              THE BODY SHOP <br />
              Biotique <br />
              Mamaearth <br />
              Mcaffeine <br />
              Nivea <br />
              Lotus Herbals <br />
              LOreal Professionel <br />
              KAMA AYURVEDA <br />
              M.A.C <br />
              Forest Essentials <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Makeup;
