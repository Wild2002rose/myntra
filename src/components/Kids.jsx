import React from 'react';

const Kids = () => {
  return (
    <div className='absolute shadow-lg p-5 mt-2 kids_section_items w-full bg-white'>
      <div className='flex flex-cols-5 '>
        {/* Column 1 */}
        <div className='bg-white '>
          <div>
            <span className='text-orange-400 font-bold mt-3'>Boys Clothing</span>
            <div className='mt-3'>
              T-Shirts <br />
              Shirts <br />
              Shorts <br />
              Jeans <br />
              Trousers <br />
              Clothing Sets <br />
              Ethnic Wear <br />
              Track Pants & Pyjamas <br />
              Jacket, Sweater & Sweatshirts <br />
              Party Wear <br />
              Innerwear & Thermals <br />
              Nightwear & Loungewear <br />
              Value Packs <br />
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className='bg-gray-100 p-3'>
          <div>
            <span className='text-orange-400 font-bold'>Girls Clothing</span>
            <div className='bg-gray-100 mt-3'>
              Dresses<br />
              Tops <br />
              Tshirts <br />
              Clothing Sets <br />
              Lehenga Choli <br />
              Kurta Sets<br />
              Party Wear<br />
              Dungarees & Jumpsuits <br />
              Shorts & Skirts <br />
              Tights & Leggings <br />
              Jeans, Trousers & Capris<br />
              Jacket, Sweaters & Sweatshirts <br />
              Innerwear & Thermals <br />
              Nightwear & Loungewear<br />
              Value Packs<br />
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className='bg-white p-3'>
          <div>
            <span className='text-orange-400 font-bold'>Footwear</span>
            <div className='mt-3'>
              Flats <br />
              Casual Shoes <br />
              Heels <br />
              Sandals <br />
              Sports Shoes  <br />
              Socks <br />
              Flipflops <br />
              Flats <br />
              School Shoes <br />
            </div>
          </div>
          <div className='mt-3'>
            <span className='text-orange-400 font-bold'>Toys & Games</span>
            <div className='mt-3'>
              Learning & Development <br />
              Activity Toys <br />
              Soft Toys <br />
              Action Figure/ Play Set<br />
            </div>
          </div>
        </div>
        {/* Column 4 */}
        <div className='p-3 bg-gray-100'>
          <div>
            <span className='text-orange-400 font-bold'>Infants</span>
            <div className='mt-3'>
              Bodysuits <br />
              Rompers & Sleepsuits <br />
              Clothing Suits <br />
              Tshirts & Tops <br />
              Dresses <br />
              Bottom Wear <br />
              Winter Wear <br />
              InnerWear & Sleepwear <br />
              Infant Care <br />
            </div>
          </div>
          <div className='mt-3'>
            <span className='text-orange-400 font-bold'>Home & Bath</span>
          </div>
          <div className='mt-3'>
            <span className='text-orange-400 font-bold'>Personal Care</span>
          </div>
        </div>
        {/* Column 5 */}
        <div className='p-3 bg-white'>
          <div>
            <span className='text-orange-400 font-bold'>Kids Accessories</span>
            <div className='mt-3'>
              Bags & Backpacks <br />
              Watches <br />
              Jewellery & Hair Accessory <br />
              Sunglasses <br />
              Masks & Protective Gears <br />
              Caps & Hats <br />
            </div>
          </div>
          <div className='mt-3'>
            <span className='text-orange-400 font-bold'>Brands</span>
            <div className='mt-3'>
              H&M <br />
              Max Kids <br />
              Pantaloons <br />
              United Colors Of Benetton Kids <br />
              YK <br />
              U.S. Polo Assn. Kids <br />
              Mothercare <br />
              HRX <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kids;
