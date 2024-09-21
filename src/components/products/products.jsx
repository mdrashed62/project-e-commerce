"use client";

import React, { useEffect, useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import SectionHeading from "../shared/SectionHeading";
import ProductCard from "./ProductCard";
import { getProducts } from "@/utils/getProduct";
import Link from "next/link";
import Button from "../shared/Button";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);


  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);


  const handleShowAllProducts = () => {
    setVisibleProducts(products.length);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <SectionHeading
          heading={"Explore Our Products"}
          subHeading={`Our Products`}
        />
        <div className="flex items-center gap-2">
          <button className="bg-[#f5f2f2] rounded-full w-12 h-12">
            <IoArrowBack className="text-2xl mx-auto" />
          </button>
          <button className="bg-[#f5f2f2] rounded-full w-12 h-12">
            <IoArrowForward className="text-2xl mx-auto" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard
            key={product._id}
            _id={product._id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>

      <div className=" text-center w-full my-10">
        <Link href={'/shop'}><Button text={"View All"}></Button></Link>
      </div>
    </div>
  );
}
