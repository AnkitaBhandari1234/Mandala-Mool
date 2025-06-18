import React from "react";
import { CustomizeDots } from "../../CustomizeArrow/Arrow.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoStar } from "react-icons/io5";
import SingingBowl from "../../../assets/TopfeaturedProduct/singingbowl.png";
import StoneWareMug from "../../../assets/TopfeaturedProduct/stonewaremug.png";
import DragonPeacockWindow from "../../../assets/TopfeaturedProduct/window.png";
import LoktaLamp from "../../../assets/TopfeaturedProduct/loktalamp.png";
import WoolShawl from "../../../assets/TopfeaturedProduct/woolshawl.png";
import ThangkaPainting from "../../../assets/TopfeaturedProduct/thangkapainting.png";
import { IoHeartOutline } from "react-icons/io5";
import Badge from "../Badge/Badge.jsx";

const Featuredproducts = () => {
  const topfeaturedProduct = [
    {
      image: SingingBowl,
      name: "Tibetan Singing Bowl",
      price: "NRs.12,835",
    },
    {
      image: StoneWareMug,
      name: "Himalayan Stoneware Mug",
      price: "NRs.4,500",
    },
    {
      image: DragonPeacockWindow,
      name: "Dragon Peacock Window",
      price: "NRs.1,200",
    },
    {
      image: LoktaLamp,
      name: "Green Tara Lokta Lamp",
      price: "Nrs.1,200",
    },
    {
      image: WoolShawl,
      name: "Himalayan Wool Shawl",
      price: "NRs.8,300",
    },
    {
      image: ThangkaPainting,
      name: "Thangka Painting",
      price: "NRs.40,000",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3200, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="bg-[#F9EEDA80] w-full h-[650px] flex flex-col gap-5">
      {/* title */}

      <div className=" grid grid-cols-3 items-center pt-14  ">
        <span className="h-[1px] col-span-1 bg-[#F4E9CA] mt-4 "></span>

        <div className=" col-span-1 flex flex-col items-center gap-1 ">
          <h1 className="font-playfair font-[500] text-4xl text-[#9B4E2B] mt-1 ">
            Our Featured Products
          </h1>
          <p className="font-poppins font-[400] text-[15px] text-[#717171]">
            Handpicked. Handmade. Honored.
          </p>
        </div>
        <span className=" h-[1px] col-span-1 bg-[#F4E9CA] mt-4 "></span>
      </div>

      {/* products card */}

      <div className="w-full relative         ">
        <Carousel
          responsive={responsive}
          autoPlaySpeed={3000}
          infinite
          autoPlay={true}
          arrows={false}
          swipeable
          draggable
          keyBoardControl
          pauseOnHover
          showDots={true}
          containerClass="carousel-container  h-[440px]  "
          className="mx-8  "
          customDot={<CustomizeDots />}
        >
          {topfeaturedProduct.map((item, index) => {
            return (
              <div
                key={index}
                className="  flex flex-col gap-2 justify-center w-[280px] relative  h-[348px] m-auto   rounded-lg hover:shadow-md transition-all duration-300 group shadow-sm bg-white   "
              >
                <Badge name="Best Seller" />

                <IoHeartOutline className="text-red-800 text-lg absolute top-4 right-3 bottom-0 cursor-pointer" />
                <div className="w-[280px]   h-[228px] flex  items-center justify-center   ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-32 h-fit  group-hover:scale-110 transition-all duration-300    "
                  />
                </div>

                <div className="flex flex-col gap-2 px-4">
                  <div className="flex gap-0.5 items-center">
                    <IoStar className="text-orange-400" />
                    <IoStar className="text-orange-400" />
                    <IoStar className="text-orange-400" />
                    <IoStar className="text-orange-400" />
                    <IoStar className="text-orange-400" />

                    <span className="text-xs font-poppins font-[400] text-[#999999]">
                      (4.2)
                    </span>
                  </div>

                  <div className="flex gap-3 w-full    ">
                    <h2 className="flex-1 font-poppins font-[600] text-base text-[#111827] ">
                      {item.name}
                    </h2>
                    <span className=" font-poppins font-[500] text-sm text-[#757575] text-right ">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Featuredproducts;
