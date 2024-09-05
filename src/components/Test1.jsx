// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test1 = () => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     axios({
//       method: "get",
//       url: "https://fakestoreapi.com/products",
//     })
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((e) => console.log(e))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className='test-container'>
//       {loading && (
//         <div>
//           <h1>Loading...</h1>
//         </div>
//       )}
//       { data.map((product) => (
//         <div key={product.id} className='card'>
//           <div>
//             <img src={product.image} alt={product.title} />
//           </div>
//           <div className='card-description'>
//             <h6>{product.title}</h6>
//             <h6>{product.price}</h6>
//             <p>{product.description}</p>
//           </div>
//         </div>
//       ))}
      
//     </div>
//   );
// }

// export default Test1;

import React, {useEffect, useState} from 'react';
import { getAllProducts } from '../api_service/product';

const Test1 = () => {
  const [products , setProducts] = useState([]);

  const [error, setError]= useState("");

  useEffect (()=>{
     getAllProducts().then((res)=>{
      console.log(res);
      setProducts(res);
     }).catch((err)=>setError("no data found"));
  },[]);

  return (
    <div className='test-container grid grid-cols-2 p-3'>
      { products.map((product) => (
        <div key={product.id} className='card'>
          <div>
            <img src={product.image} alt={product.title} className='w-80 h=60 p-5 mt-5 ml-20'/>
          </div>
          <div className='card-description w-100 h-60 ml-10 mt-5'>
            <h6 className='ml-4 font-bold'>{product.title}</h6>
            <h6 className='ml-4 text-sm text-gray-500'>{product.price}</h6>
            <p className='ml-4 text-gray-400'>{product.description}</p>
          </div>
        </div>
      ))}
      
    </div>
  );

}
export default Test1;
