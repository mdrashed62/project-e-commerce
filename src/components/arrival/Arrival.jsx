import Image from "next/image";
import React from "react";

const Arrival = () => {
  return (
    <div className="flex w-full h-[500px] bg-black">
      <div className="flex-1 relative ">
        <Image
          src="/assets/arrivalPhoto1.jpg" 
          alt="Main Image of Arrival"
          layout="fill"
          objectFit="cover" // Ensures the image covers the container while maintaining aspect ratio
        />
      </div>
      <div className="flex-1 flex flex-col p-4">
        <div className="relative flex-1 mb-4">
          <Image
            src="/assets/arrivalPhoto2.jpg" 
            alt="Smaller Image 1"
            layout="fill"
            objectFit="cover" 
          />
        </div>
        <div className="flex flex-1 gap-4">
          <div className="relative flex-1">
            <Image
              src="/assets/banner4.png" 
              alt="Smaller Image 2"
              layout="fill"
              objectFit="cover" 
            />
          </div>
          <div className="relative flex-1">
            <Image
              src="/assets/banner5.png" 
              alt="Smaller Image 3"
              layout="fill"
              objectFit="cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;