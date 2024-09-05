import React, { useState } from 'react';
import {addProduct} from '../api_service/product'

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImages] = useState("");
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (event) => {
    if (event.target.files) {
      const files = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
      setImages(files);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      title,
      price: parseFloat(price),
      image,
      category,
      description,
    };

    console.log(newProduct);

    addProduct(newProduct);
    // Clear the form after submission
    setTitle('');
    setPrice('');
    setImages('');
    setCategory('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Images</label>
        <input
          type="url"
          value={image}
          onChange={(e)=> setImages(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {/* <div className="mt-2">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Preview ${index}`} className="h-20 w-20 object-cover mr-2" />
          ))}
        </div> */}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
