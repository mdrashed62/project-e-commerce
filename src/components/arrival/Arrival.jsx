import React from "react";
import SectionHeading from "../shared/SectionHeading";

const Arrival = () => {
  return (
    <div>
      <div className="px-[1px] mb-14">
        <SectionHeading heading={'New Arrival'} subHeading={'Featured'} />
      </div>
      <div className="w-full grid lg:grid-cols-2 gap-6 min-h-screen">
        {/* Background image with black overlay */}
        <div
          style={{
            backgroundImage: 'url("/assets/arrivalPhoto1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative rounded-sm min-h-[350px] lg:min-h-[450px] xl:min-h-[500px]"
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-sm z-10"></div>

          {/* Content */}
          <div className="z-20 text-white px-4 absolute bottom-4 lg:bottom-10 ml-4 lg:ml-6 space-y-2">
            <h1 className="text-xl lg:text-2xl font-semibold">PlayStation 5</h1>
            <p className="text-xs lg:text-sm">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <p className="text-bold text-sm lg:text-base w-[75px] border-b-[1px]">Shop Now</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Image 1 */}
          <div
            style={{
              backgroundImage: 'url("/assets/arrivalPhoto2.jpg")',
            }}
            className="w-full relative h-[350px] bg-cover bg-center rounded-sm"
          >
            <div className="z-20 text-white px-4 absolute bottom-10 ml-6 space-y-2">
              <h1 className="text-xl lg:text-2xl font-semibold">Womens Collections 5</h1>
              <p className="text-xs lg:text-sm">
                Featured woman collections that <br /> give you another vibe.
              </p>
              <p className="text-bold text-sm lg:text-base w-[75px] border-b-[1px]">Shop Now</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Image 2 */}
            <div
              style={{
                backgroundImage: 'url("/assets/banner4.png")',
              }}
              className="relative bg-contain bg-center bg-black w-full h-[250px] bg-no-repeat rounded-sm"
            >
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black opacity-20 rounded-sm"></div>
              <div className="z-20 text-white px-4 absolute bottom-10 ml-6 space-y-1">
                <h1 className="text-xl lg:text-2xl font-semibold">Speakers</h1>
                <p className="text-xs lg:text-sm">Amazon Ware less speakers</p>
                <p className="text-bold text-sm lg:text-base border-b-[1px] w-[75px]">Shop Now</p>
              </div>
            </div>
            {/* Image 3 */}
            <div
              style={{
                backgroundImage: 'url("/assets/banner5.png")',
              }}
              className="relative bg-contain bg-center bg-black w-full h-[250px] bg-no-repeat rounded-sm"
            >
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black opacity-20 rounded-sm"></div>
              <div className="z-20 text-white px-4 absolute bottom-10 ml-6 space-y-1">
                <h1 className="text-xl lg:text-2xl font-semibold">Perfume</h1>
                <p className="text-xs lg:text-sm">GUCCI INTENSE OUD EDP</p>
                <p className="text-bold text-sm lg:text-base border-b-[1px] w-[75px]">Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
