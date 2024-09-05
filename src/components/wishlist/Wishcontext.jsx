import React, { createContext, useState,useEffect,  useContext } from "react";

const WishContext = createContext();

export const useWish = () => {
    return useContext(WishContext);
}

export const WishProvider = ({ children }) => {
    //const [wishItems, setWishItems] = useState([]);
    const addToWishlist = (product)=>{
         setWishItems((preItems)=>[...preItems,product]);
    };

    const [wishItems, setWishItems] = useState(() => {
        const storedList = localStorage.getItem("wishItems");
        //console.log(storedCart);
        return storedList ? JSON.parse(storedList) : [];
    });

    useEffect(() => {
        localStorage.setItem("wishItems", JSON.stringify(wishItems));
    }, [wishItems]);

    // const addToCart = (product) => {
    //     const existingProduct = cartItems.find((item) => item.id === product.id);
    //     if (existingProduct) {
    //         setCartItems(cartItems.map((item) =>
    //             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    //         ));
    //     } else {
    //         setCartItems([...cartItems, { ...product, quantity: 1 }]);
    //     }
    // };



        
    const removeFromWishlist = (id) => {
        setWishItems(wishItems.filter((item) => item.id !== id));
    };

    return (
        <WishContext.Provider value={{ wishItems, addToWishlist, removeFromWishlist }}>
            {children}
        </WishContext.Provider>
    );
};
