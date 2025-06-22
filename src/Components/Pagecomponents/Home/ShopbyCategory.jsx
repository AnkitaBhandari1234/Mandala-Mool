import React from "react";
import BannerImg from "../../../assets/banner_bg.png";
import Decor from "../../../assets/ShopbyCategory/decor.png";
import Textiles from "../../../assets/ShopbyCategory/textiles.png";
import Ceramics from "../../../assets/ShopbyCategory/ceramics.png";
import Jewelry from "../../../assets/ShopbyCategory/jewelry.png";
import Artifact from "../../../assets/ShopbyCategory/artifact.png";
import Wellness from '../../../assets/ShopbyCategory/wellness.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomizeDots } from "../../CustomizeArrow/Arrow";
import { PiArrowRightLight } from "react-icons/pi";


import { Link } from "react-router-dom";
const ShopbyCategory = () => {
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

  const shopallProducts = [
    {
      path: "/decor",
      image: Decor,
      name: "Decor",
      description: "Wall hangings, statues, mandala art",
    },
    {
      path: "/textiles",
      image: Textiles,
      name: "Textiles",
      description: "Shawls, dhaka fabrics, cushion covers",
    },
    {
      path: "/jewelry",
      image: Jewelry,
      name: "Jewelry",
      description: "Beaded necklaces, silver, ethnic earrings ",
    },
    {
      path: "/ceramics",
      image: Ceramics,
      name: "Ceramics",
      description: " Traditional pottery, cups, plates",
    },
    {
      path: "/artifact",
      image: Artifact,
      name: "Artifacts",
      description: " Brass statues, masks, prayer wheels",
    },
    {
      path: "/wellness",
      image: Wellness,
      name: "Wellness",
      description: "Herbal oils, incense, copper bottles",
    },
  ];

  return (
    <div className="relative   ">
      <img src={BannerImg} className="w-full h-[640px]     " />
      <div className="bg-[#FEF7E9]/60 absolute top-0 right-0 bottom-0 left-0   "></div>
      <div className="absolute top-0 flex flex-col w-full gap-10   ">
        {/* for text */}
        <div className=" flex   items-center h-[120px] px-20 pt-16  ">
          <span className="w-[25%] h-[1px] col-span-1 bg-[#efdfb1]     "></span>

          <div className="w-[50%]  flex flex-col items-center gap-2   ">
            <h1 className="font-playfair font-[500] text-[42px] text-[#9B4E2B] mx-10  ">
              Shop By Category
            </h1>
            <p className="font-poppins font-[400] text-lg text-[#414141] text-center leading-[22px] tracking-wide  ">
              Discover handcrafted items across <br/> various categories, each piece
              telling its own unique story
            </p>
          </div>
          <span className="w-[25%] h-[1px]  bg-[#efdfb1]  "></span>
        </div>
        {/* for cards */}
        <div className=" w-full relative      ">
         <Carousel
                  responsive={responsive}
                  autoPlaySpeed={4000}
                  infinite={false}
                  autoPlay={true}
                  arrows={false}
                  swipeable
                  draggable
                  keyBoardControl
                  pauseOnHover
                  showDots={true}
                  containerClass="carousel-container h-[440px] "
                  className="  w-10/12 mx-auto  "
                  customDot={<CustomizeDots />}
                >
          {shopallProducts.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white h-[350px] w-[240px] flex-col flex rounded-lg    "
              >
                <img
                  src={item.image}
                  alt="texties image"
                  className="h-[231px] object-cover rounded-t-lg    "
                />
                <div className=" flex flex-col gap-4  h-[119px] rounded-lg px-4 py-1 bg-white">
                  <div>
                    <h1 className="text-[#9B4E2B] font-poppins font-semibold text-lg">
                      {item.name}
                    </h1>
                    <p className="font-poppins text-[#6B7280] text-[10px] font-[400]">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    to={item.path}
                    className="border-[1.4px] border-[#BA4A20] rounded-lg w-[132px] h-[32px] text-center  flex items-center justify-center gap-1 "
                  >
                    <button className="text-[#BA4A20] font-[400] text-sm font-poppins  ">Explore More</button>
                <PiArrowRightLight className="text-[#BA4A20]  stroke-[4]  " size={22}   />
                  </Link>
                </div>
              </div>
            );
          })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ShopbyCategory;
