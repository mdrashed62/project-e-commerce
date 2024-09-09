import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({
  image,
  title,
  description,
  price,
  rating,
  onAddToCart
}) => {
  return (
    <div className="relative p-4 w-full bg-glass border border-gray-300/30 rounded-lg backdrop-blur-md backdrop-saturate-180 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="absolute top-2 right-2 flex space-x-3">
        {/* Wishlist Button */}
        <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:bg-red-100 transition-transform transform hover:scale-110">
          <FontAwesomeIcon icon={faHeart} className="text-slate-800 text-lg" />
        </button>
        {/* Eye Button */}
        <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow hover:bg-blue-100 transition-transform transform hover:scale-110">
          <FontAwesomeIcon icon={faEye} className="text-slate-800 text-lg" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="mt-2 text-xl font-bold">${price}</p>
        <p className="text-red-400">Rating: {rating} ⭐</p>
        <button
          onClick={onAddToCart}
          className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
