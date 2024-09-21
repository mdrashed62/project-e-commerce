"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SectionHeading from "../shared/SectionHeading";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Button from "../shared/Button";
import Link from "next/link";

const FlashSaleProducts = () => {
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
      <div className='flex justify-between items-center'>
        <SectionHeading heading={'Flash Sales'} subHeading={`Today's`} />
        <div className='flex items-center gap-2'>
          <button className='bg-[#f5f2f2] rounded-full w-12 h-12'>
            <IoArrowBack className='text-2xl mx-auto' />
          </button>
          <button className='bg-[#f5f2f2] rounded-full w-12 h-12'>
            <IoArrowForward className='text-2xl mx-auto' />
          </button>
        </div>
      </div>
      
      {/* Show only the first 4 products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
        {products.slice(0, 4).map((product) => (
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
        <div className="flex justify-center mt-3">
          <Link href={'/shop'}><Button text={"View All"}></Button></Link>
        </div>
    </div>
  );
};

export default FlashSaleProducts;
