import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <div className="w-full mb-4">
        <img
          src={mainImage}
          alt="Main product"
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div key={index} onClick={() => setMainImage(image)} className="cursor-pointer">
            <img
              src={image}
              alt={`Product thumbnail ${index}`}
              className="w-full h-20 object-cover border-2 border-gray-200 hover:border-gray-400 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
