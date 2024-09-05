import axios from "axios";
import { json } from "react-router-dom";

const getAllProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data; 
};

const getProductById = async (Id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${Id}`);
    return response.data; 
};

const addProduct = async(productData)=>{
    fetch ("https://fakestoreapi.com/products",{
        method : "POST",
        body : JSON.stringify(productData),
        headers : {
            "Content-Type":"application/json",
        },
}).then((res)=>res.json() )
.then((json)=>{
    console.log(json);
}).catch((error)=>{
    console.error("error:",error);
});
};

export {getAllProducts,getProductById,addProduct};