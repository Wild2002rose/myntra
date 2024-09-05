import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../api_service/product';
import { useCart } from '../components/cart/Cartcontext';
import { useWish } from './wishlist/Wishcontext';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const {addToCart}= useCart();
  const {addToWishlist} = useWish();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const res = await getProductById(id);
        console.log(res);
        setProduct(res);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct(id);
  }, [id]);


  const handleAddToCart = ()=>{
    addToCart(product);
    console.log(product);
    navigate("/cart");

  };

  const handleAddToWishlist = ()=>{
    addToWishlist(product);
    navigate("/wishlist")
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-cols-2 ml-20 mt-20 bg-white rounded-lg shadow-md mr-20 mb-20 mt-20 h-full'>
          <img src={product.image} alt="" className='h-108 w-60 ml-20 mt-20 mb-20 ' />
          <div className='ml-10 p-20  mr-20'>
            <h1 className='font-bold text-lg text-gray-700'>{product.title}</h1>
            <h1 className='font-bold mb-5 text-LG mt-4 text-pink-500'>Rs. {product.price}</h1>
            <div>
            
            <button className='bg-pink-700 text-white font-semibold text-md type-button rounded-lg h-10 w-32' onClick={handleAddToCart} >ADD TO CART</button>
            <button className='h-10 w-32 border-2 border-gray-300 text-black text-md font-semibold ml-20 rounded-lg ' onClick={handleAddToWishlist}>WISHLIST</button>
            </div>
            <h1 className='text-lg font-bold text-gray-800 mt-4'>Product Details </h1>
            <h1 className='text-md text-gray-500 mt-2'>{product.description}</h1>
          </div>
        </div>
  );
}

export default Details;
