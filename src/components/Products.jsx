import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Nav from './Nav';
import Offertime from './Offertime';
import { Link, Outlet } from 'react-router-dom';
import { getAllProducts } from '../api_service/product';


const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();
  const category = location.state?.category;
  console.log(category);

  const getProducts = async () => {
    try {
      const res = await getAllProducts();
      const filteredProducts = res.filter((pr) => pr.category === category);
      setProducts(filteredProducts);
      console.log(filteredProducts);
    } catch (err) {
      setError("Failed to fetch products");
      console.error(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {category && <Nav />}
      {category && <Offertime />}

      {category && (
        <div className='flex items-center text-sm ml-5 mt-2'>
          <Link to="/"><h1 className='text-gray-500'>Home /</h1></Link>
          <h1 className='ml-1 font-semibold'>{category}</h1>
        </div>
      )}

      {category && (
        <h1 className='text-xl font-bold ml-5 mt-3'>{category}</h1>
      )}

      <div className='grid grid-cols-3 gap-20 p-10'>
        {products.map((product) => (
          <Link to={`/products/${product.id}`}>
          <div key={product.id} className='bg-white rounded-lg shadow-md p-4'>
          
            <img src={product.image} alt={product.title} className='w-200  h-60 object-cover  ' />
            <div className='mt-2'>
              <h6 className='text-gray-700 font-bold'>{product.title}</h6>
              <h6 className='text-gray-600 text-sm font-semibold'>Rs. {product.price}</h6>
              <p className='text-gray-400 text-sm mt-1'>{product.description}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <Outlet>

      </Outlet>


    </div>
  );
}

export default Products;
