import React from "react";
import { ImBookmark } from "react-icons/im";
import { IoStar } from "react-icons/io5";
import SingingBowl from "../../../assets/TopfeaturedProduct/singingbowl.png";
import StoneWareMug from "../../../assets/TopfeaturedProduct/stonewaremug.png";
import DragonPeacockWindow from "../../../assets/TopfeaturedProduct/window.png";
import LoktaLamp from "../../../assets/TopfeaturedProduct/loktalamp.png";
import { IoHeartOutline } from "react-icons/io5";

const Featuredproducts = () => {
  const topfeaturedProduct = [
    {
      image: SingingBowl,
      name: "Tibetan Singing Bowl",
      price: "NRs 12,835",
    },
    {
      image: StoneWareMug,
      name: "Himalayan Stoneware Mug",
      price: "NRs 4,500",
    },
    {
      image: DragonPeacockWindow,
      name: "Dragon Peacock Window",
      price: "NRs 1,200",
    },
    {
      image: LoktaLamp,
      name: "Green Tara Lokta Lamp",
      price: "NRs 1,200",
    },
    // {
    //   image: LoktaLamp,
    //   name: "Green Tara Lokta Lamp",
    //   price: "NRs 1,200",
    // },
    // {
    //   image: LoktaLamp,
    //   name: "Green Tara Lokta Lamp",
    //   price: "NRs 1,200",
    // },
  ];

  return (
    <div className="bg-[#FFFCF3] w-full h-[650px] flex flex-col gap-5">
      {/* title */}
      <div className="flex flex-col items-center gap-1 pt-14 ">
        <h1 className="font-playfair font-[500] text-4xl text-[#9B4E2B] ">
          Our Featured Products
        </h1>
        <p className="font-poppins font-[400] text-[15px] text-[#717171]">
          Handpicked. Handmade. Honored.
        </p>
      </div>
      {/* products card */}

      <div className="w-full  ">
        <div className="grid grid-cols-4 w-11/12 mx-auto gap-4  ">
          {topfeaturedProduct.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center w-[280px] h-[328px] m-auto bg-white my-10 rounded-lg hover:shadow-md transition-all duration-300 group shadow-sm"
              >
                <div className="w-[280px]  h-[228px] flex items-center justify-center relative ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-36 h-fit  group-hover:scale-110 transition-all duration-300   "
                  />
                  <IoHeartOutline className="text-red-800 text-lg absolute top-0 right-4 bottom-0 cursor-pointer" />
                </div>

                <div className="flex flex-col gap-2 px-5">
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
        </div>
      </div>
    </div>
  );
};

export default Featuredproducts;
