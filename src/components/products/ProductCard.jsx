"use client"; 

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ _id, image, title, description, price, rating }) => {
  const handleAddToCart = () => {
    alert(`${title} added to cart!`);
  };

  return (
    <div className="relative p-4 w-full bg-white border border-gray-200 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
      <Image
        src={image}
        alt={title}
        width={500} 
        height={200} 
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="absolute top-2 right-2 flex space-x-3">
        <button
          aria-label="Add to wishlist"
          className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:bg-red-100 transition-transform transform hover:scale-110"
        >
          <FontAwesomeIcon icon={faHeart} className="text-slate-800 text-lg" />
        </button>
        <button
          aria-label="View product"
          className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow hover:bg-blue-100 transition-transform transform hover:scale-110"
        >
          <FontAwesomeIcon icon={faEye} className="text-slate-800 text-lg" />
        </button>
      </div>
      <div className="p-4 flex-grow">
        <Link href={`/products/${_id}`}>
          <a className="text-lg font-semibold cursor-pointer hover:underline">
            {title}
          </a>
        </Link>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="mt-2 text-xl font-bold">${price}</p>
        <p className="text-yellow-400">Rating: {rating} ⭐</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-red-600 transition self-end"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
