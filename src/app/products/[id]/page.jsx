import ProductDetails from '@/components/products/[id]/ProductDetails';
import React from 'react';

const page = ({params}) => {
    console.log(params.id)

    
    return (
        <div>
            <ProductDetails></ProductDetails>
        </div>
    );
};

export default page;