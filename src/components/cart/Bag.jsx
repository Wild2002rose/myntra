import React from "react";
import { useCart } from "../cart/Cartcontext";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
    const navigate = useNavigate();
    
    const handleCheckOut = () => {
        navigate("/checkout");
    };

    return (
        <div className="bg-rose-100 min-h-screen p-20">
            <div className="p-4 max-w-3xl mx-auto bg-rose-200 rounded-md">
            <h2 className="text-3xl font-bold mb-6 p-2 text-center text-black">
                Your Cart
            </h2>
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty 😥</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="flex items-center mb-6 bg-rose-100 shadow-md rounded-lg p-4">
                        <Link to={`/product/${item.id}`} className="flex-shrink-0">
                            <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md mr-4" />
                        </Link>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p className="text-gray-700 font-semibold">${item.price}</p>
                            <div className="flex items-center mt-2">
                                <button 
                                    onClick={() => decreaseQuantity(item.id)} 
                                    className="bg-gray-100 text-black font-bold py-1 px-3 rounded-lg hover:bg-gray-300"
                                >
                                    -
                                </button>
                                <span className="mx-3 text-black font-bold">{item.quantity}</span>
                                <button 
                                    onClick={() => increaseQuantity(item.id)} 
                                    className="bg-gray-100 font-bold text-black py-1 px-3 rounded-lg hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>
                            <button 
                                onClick={() => removeFromCart(item.id)} 
                                className="mt-4 text-red-600 font-bold hover:text-red-800"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}
            {cartItems.length > 0 && (
                <div className="mt-8 p-4 bg-rose-100 shadow-md rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-bold ">Total:</span>
                        <span className="text-2xl font-semibold">
                            ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                        </span>
                    </div>
                    <button 
                        onClick={handleCheckOut} 
                        className="mt-4 w-full bg-rose-400 font-bold text-white py-2 rounded-lg hover:bg-rose-700"
                    >
                        Checkout
                    </button>
                </div>
            )}
            </div>
        </div>
    );
};

export default CartPage;
