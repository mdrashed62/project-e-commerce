"use client"

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from public/products.json
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  const handleAddToCart = (productTitle) => {
    alert(`${productTitle} added to cart!`);
  };

  return (
    <div className="container mx-auto py-20">
        <div className='space-y-3'>
            <p className='text-green-700 font-bold mb-10'>Today</p>
            <h2 className="text-2xl text-red-600 font-bold md:text-5xl">Flash Sales</h2>
        </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
          onAddToCart={() => handleAddToCart(product.title)}
        />
      ))}
      </div>
    </div>

  );
};

export default Products;
