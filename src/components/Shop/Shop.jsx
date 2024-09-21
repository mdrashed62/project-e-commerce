"use client";

import React, { useEffect, useState } from "react";
import Button from "../shared/Button";
import ProductCard from "../products/ProductCard";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        // Fetch product data from public/products.json
        fetch("/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching product data:", error));
    }, []);

    // Calculate start and end indices for current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleAddToCart = (productTitle) => {
        alert(`${productTitle} added to cart!`);
    };

    const totalPages = Math.ceil(products.length / productsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container mx-auto py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
                {currentProducts.map((product) => (
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

            {/* Pagination */}
            <div className="flex justify-center mt-12">
                {/* Previous Button */}
                <button
                    disabled={currentPage === 1}
                    onClick={handlePrevPage}
                    className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-red-700 hover:text-white"
                >
                    <div className="flex items-center -mx-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mx-1 rtl:-scale-x-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16l-4-4m0 0l4-4m-4 4h18"
                            />
                        </svg>
                        <span className="mx-1">Previous</span>
                    </div>
                </button>

                {/* Numbers with ellipsis logic */}
                {totalPages <= 3 ? (
                    // Display all pages if total pages are 3 or less
                    Array.from({ length: totalPages }, (_, i) => i + 1).map((btnNum) => (
                        <button
                            key={btnNum}
                            onClick={() => setCurrentPage(btnNum)}
                            className={`px-4 py-2 mx-1 ${currentPage === btnNum ? "bg-red-500 text-white" : ""} hover:bg-red-700 hover:text-white transition-colors duration-300 transform rounded-md`}
                        >
                            {btnNum}
                        </button>
                    ))
                ) : (
                    <>
                        {/* Always show the first page */}
                        <button
                            onClick={() => setCurrentPage(1)}
                            className={`px-4 py-2 mx-1 ${currentPage === 1 ? "bg-red-500 text-white" : ""} hover:bg-red-700 hover:text-white transition-colors duration-300 transform rounded-md`}
                        >
                            1
                        </button>

                        {currentPage > 3 && <span className="px-4 py-2 mx-1">...</span>}

                        {/* Show up to two pages before the current one */}
                        {currentPage > 2 && currentPage < totalPages && (
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                className="px-4 py-2 mx-1 hover:bg-red-700 hover:text-white transition-colors duration-300 transform rounded-md"
                            >
                                {currentPage - 1}
                            </button>
                        )}

                        {/* Show current page */}
                        {currentPage !== 1 && currentPage !== totalPages && (
                            <button
                                onClick={() => setCurrentPage(currentPage)}
                                className="px-4 py-2 mx-1 bg-red-500 text-white transition-colors duration-300 transform rounded-md"
                            >
                                {currentPage}
                            </button>
                        )}

                        {/* Show up to two pages after the current one */}
                        {currentPage < totalPages - 1 && (
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className="px-4 py-2 mx-1 hover:bg-red-700 hover:text-white transition-colors duration-300 transform rounded-md"
                            >
                                {currentPage + 1}
                            </button>
                        )}

                        {currentPage < totalPages - 2 && <span className="px-4 py-2 mx-1">...</span>}

                        {/* Always show the last page */}
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            className={`px-4 py-2 mx-1 ${currentPage === totalPages ? "bg-red-500 text-white" : ""} hover:bg-red-700 hover:text-white transition-colors duration-300 transform rounded-md`}
                        >
                            {totalPages}
                        </button>
                    </>
                )}

                {/* Next Button */}
                <button
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                    className="px-4 py-2 mx-1 text-white bg-red-500 rounded-md hover:bg-red-700"
                >
                    <div className="flex items-center -mx-1">
                        <span className="mx-1">Next</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mx-1 rtl:-scale-x-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </div>
                </button>
            </div>

        </div>
    );
};

export default Shop;

