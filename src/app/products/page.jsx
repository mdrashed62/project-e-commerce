"use client"

import { getProductByCategory, getProducts } from '@/utils/getProduct';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const Page = () => {

    const searchParams = useSearchParams(); 
    const category = searchParams.get('category'); 

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let productsData;

                if (category) {
                    productsData = await getProductByCategory(category);
                } else {
                    productsData = await getProducts();
                }

                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchProducts();
    }, [category]); 

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log('products = ', products);


    return (
        <div>
            <h1 className='text-xl mt-2 font-semibold'>Products in Category: {category ? category : 'No category selected'}</h1>
            <h1 className='text-xl mt-2 font-semibold'>Total products = {products.length}</h1>
        </div>
    );
};

export default Page;