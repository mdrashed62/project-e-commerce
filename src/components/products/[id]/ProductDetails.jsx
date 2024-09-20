"use client"; // Make it a client component

import { useParams } from "next/navigation"; // Use next/navigation in app directory
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { productId } = useParams(); // Get product id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      // Fetch product data based on the productId from public/products.json
      fetch("/products.json")
        .then((response) => response.json())
        .then((data) => {
          const selectedProduct = data.find((item) => item.id === parseInt(productId));
          setProduct(selectedProduct);
        })
        .catch((error) => console.error("Error fetching product data:", error));
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="container mx-auto py-20 flex space-x-10">
      <div className="w-1/2">
        {/* Product Gallery */}
        <div className="flex flex-col space-y-4">
          {/* Large image */}
          <img src={product.image} alt={product.title} className="w-full h-96 object-cover" />

          {/* Thumbnail carousel */}
          <div className="grid grid-cols-4 gap-2">
            {product.gallery && Array.isArray(product.gallery) ? (
              product.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery image ${index}`}
                  className="w-full h-24 object-cover cursor-pointer hover:opacity-75"
                  onClick={() => setProduct((prev) => ({ ...prev, image: img }))}
                />
              ))
            ) : (
              <p>No additional images available.</p>
            )}
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="text-4xl font-bold">{product.title}</h2>
        <p className="text-2xl font-semibold text-red-600">${product.price}</p>
        <p className="text-green-600">In Stock</p>
        <p className="text-gray-600">{product.description}</p>

        {/* Rating */}
        <div className="mt-4 text-yellow-500">
          Rating: {product.rating} ⭐
        </div>

        {/* Color options */}
        <div className="mt-4">
          <p className="font-bold">Colours:</p>
          <div className="flex space-x-4">
            {product.colors && Array.isArray(product.colors) ? (
              product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-8 h-8 rounded-full border-2"
                  style={{ backgroundColor: color }}
                ></span>
              ))
            ) : (
              <p>No color options available.</p>
            )}
          </div>
        </div>

        {/* Size options */}
        <div className="mt-4">
          <p className="font-bold">Size:</p>
          <select className="border border-gray-300 rounded p-2">
            {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity and Buy Now */}
        <div className="mt-4">
          <p className="font-bold">Quantity:</p>
          <input
            type="number"
            defaultValue={1}
            className="border border-gray-300 rounded p-2 w-20"
          />
          <button className="ml-4 bg-red-600 text-white py-2 px-6 rounded">
            Buy Now
          </button>
          <button className="ml-4 bg-gray-300 text-black py-2 px-6 rounded">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
