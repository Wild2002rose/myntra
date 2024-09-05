import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/New-Myntra-Logo.png';
import search from '../images/search2.png';
import login from '../images/login1.png';
import logout from '../images/logout.png';
import cart from '../images/cart.png';
import wishlist from '../images/wishlist.png'
import Men from './Men';
import Women from './Women';
import Kids from './Kids'
import Living from './Living';
import Makeup from './Makeup';
import Studio from './Studio';
import { useCart } from './cart/Cartcontext';
import { useWish } from './wishlist/Wishcontext';

const Nav = () => {
  const [showMen, setShowMen] = useState(false);
  const [hoverMen, setHoverMen] = useState(false);
  const {cartItems} = useCart();
  const {wishItems}= useWish();
  const totalCartItems = cartItems.reduce((total,item)=>total+item.quantity,0);
  const totalWishlistItems = wishItems.length;
  const myMen = useRef(null);

  useEffect(() => {
    console.log(myMen.current);
  }, []);

  

  const [showWomen, setShowWomen] = useState(false);
  const [hoverWomen, setHoverWomen] = useState(false);

  const myWomen = useRef(null);

  useEffect(() => {
    console.log(myWomen.current);
  }, []);


  const [showKids, setShowKids] = useState(false);
  const [hoverKids, setHoverKids] = useState(false);

  const myKids = useRef(null);

  useEffect(() => {
    console.log(myKids.current);
  }, []);

  const [showLiving, setShowLiving] = useState(false);
  const [hoverLiving, setHoverLiving] = useState(false);

  const myLiving = useRef(null);

  useEffect(() => {
    console.log(myLiving.current);
  }, []);

  const [showMakeup, setShowMakeup] = useState(false);
  const [hoverMakeup, setHoverMakeup] = useState(false);

  const myMakeup = useRef(null);

  useEffect(() => {
    console.log(myMakeup.current);
  }, []);

  const [showStudio, setShowStudio] = useState(false);
  const [hoverStudio, setHoverStudio] = useState(false);

  const myStudio = useRef(null);

  useEffect(() => {
    console.log(myStudio.current);
  }, []);



  const handleMouseOver = () => {
    setShowMen(true);
    setHoverMen(true);
    setShowWomen(true)
    setHoverWomen (true)
    setHoverKids(true)
    setShowKids(true)
    setShowLiving(true)
    setHoverLiving(true)
    setHoverMakeup(true)
    setShowMakeup(true)
    setHoverStudio(true)
    setShowStudio(true)
  };

  const handleMouseOut = () => {
    setShowMen(false);
    setHoverMen(false);
    setShowWomen(false)
    setHoverWomen(false)
    setHoverKids(false)
    setShowKids(false)
    setShowLiving(false)
    setHoverLiving(false)
    setHoverMakeup(false)
    setShowMakeup(false)
    setHoverStudio(false)
    setShowStudio(false)
  };

  return (
    <nav className='nav-bar flex text-sm font-bold text-gray-700 ml-15 items-center relative'>
      <img src={logo} className='w-16 h-9 ml-5' alt="Myntra Logo" />
      <ul className='flex'>
        <li
          className={`ml-12 cursor-pointer relative ${hoverMen ? 'hovered' : ''}`}
          ref={myMen}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          MEN
          {showMen && <Men />}
        </li>

        <li className={`ml-12 cursor-pointer relative ${hoverWomen ? 'hovered' : ''}`}
          ref={myWomen}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>WOMEN
            {showWomen && <Women />}
          </li>

        <li className={`ml-12 cursor-pointer relative ${hoverKids ? 'hovered' : ''}`}
          ref={myKids}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>KIDS
            {showKids && <Kids/>}
          </li>
          
        <li className={`ml-12 cursor-pointer relative ${hoverKids ? 'hovered' : ''}`}
          ref={myKids}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>HOME & LIVING
            {showLiving && <Living/>}
          </li>

        <li className={`ml-12 cursor-pointer relative ${hoverWomen ? 'hovered' : ''}`}
          ref={myWomen}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>BEAUTY
            {showMakeup && <Makeup/>}
          </li>

        <li className={`ml-12 cursor-pointer relative ${hoverStudio ? 'hovered' : ''}`}
          ref={myStudio}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>STUDIO
            {showStudio && <Studio/>}
          </li>
      </ul>
      <div className='search flex border border-gray-100 ml-14 items-center bg-gray-100 w-80 h-10'>
        <img src={search} className='w-6 h-6 ml-4' alt="Search Icon" />
        <input
          className='bg-gray-100 text-gray-900 font-normal outline-none text-sm rounded-sm block w-full p-2.5 ml-3'
          placeholder='Search for products, brands and more'
          required
        />
      </div>
      <Link to="/login" className='ml-8 flex items-center'>
        <img src={login} className='w-6 h-5 ml-2' alt="Login Icon" />
        <h1>Login</h1>
      </Link>
      {/* <div className='ml-14 flex items-center'>
        <img src={logout} className='w-6 h-4 ml-2' alt="Logout Icon" />
        <h1>Logout</h1>
      </div> */}
      <Link to="/cart" className='ml-6 flex relative items-center'>
        {totalCartItems>0 && (
          <span className='bg-rose-500 text-white rounded-full h-4 w-4 text-center mb-7 ml-5 text-xs absolute justify-center items-center flex '>{totalCartItems}</span>
        )}
        <img src={cart} className='w-9 h-8 ml-2' alt="cart Icon" />
        <h1>Cart</h1>
      </Link>

      <Link to="/wishlist" className='ml-6 flex items-center'>
        <img src={wishlist} className='w-8 h-7 ml-2' alt="cart Icon" />

        {/* {totalWishlistItems >0 && (
          <span className='absolute top-0 right-0 bg-rose-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center'>{totalWishlistItems}</span>
        )} */}

        <h1>Wishlist</h1>
      </Link>

      
    </nav>
    
  );
};

export default Nav;
