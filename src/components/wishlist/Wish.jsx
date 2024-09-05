import React, { } from "react";
import { useWish } from "./Wishcontext";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../cart/Cartcontext';

const Wishlist = () => {
    const { wishItems, removeFromWishlist } = useWish();
    const {addToCart}= useCart();
    
    const handLoadToCart = (item) => {
        console.log(item);
        addToCart(item);  
        removeFromWishlist(item.id);
        
    };

    return (
        <div className="bg-rose-100 min-h-screen p-20">
            <div className="bg-rose-200 mx-auto max-w-3xl rounded-md p-6">
                <h1 className="text-center font-bold mb-6 p-2 text-3xl">Your Wishlist</h1>
                
                {wishItems.length === 0 ? (
                    <p className="text-center text-gray-500">Your wishlist is empty</p>
                ) : (
                    wishItems.map((item) => (
                        <div key={item.id} className="flex items-center mb-6 bg-rose-100 shadow-md rounded-lg p-4">
                            <Link to={`/product/${item.id}`} className="flex-shrink-0">
                                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md mr-4" />
                            </Link>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="text-gray-700 font-semibold">${item.price}</p>
                                <div className="flex items-center mt-2">
                                    <button 
                                        onClick={() => removeFromWishlist(item.id)} 
                                        className="bg-rose-500 text-black font-bold py-1 px-3 rounded-lg hover:bg-gray-400 ml-14"
                                    >
                                        Remove
                                    </button>

                                    <button 
                                        onClick={ ()=>handLoadToCart(item)} 
                                        className="bg-gray-400 text-black font-bold py-1 px-3 rounded-lg hover:bg-rose-500 ml-60"
                                    >
                                        Add to Cart
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Wishlist;
