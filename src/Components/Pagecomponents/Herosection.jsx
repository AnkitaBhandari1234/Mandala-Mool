import React from "react";
import BannerImg from "../../assets/banner_bg.png";
import BannerMandala from "../../assets/banner.png";
import BannerBuddha from "../../assets/banner2.png";

const Herosection = () => {
  return (
    <div className="relative  ">
      <div className="  h-[480px] bg-cover  ">
        <img src={BannerImg} className="w-full h-full bg-contain " />
        <div className="bg-[#FEF7E9]/50 absolute top-0 right-0 bottom-0 left-0"></div>
        <div className="absolute top-0 right-0 left-0 bottom-0 flex ">
          {/* text-section */}
          <div className="flex flex-col gap-14 h-[400px] px-24 justify-center   ">
            {/* for heading & slogan */}
            <div className="">
              <h1 className="font-playfair text-[36px] font-[600] text-[#A0522D] leading-loose ">
                Sacred Craft, Born in the Himalayas
              </h1>
              <p className="text-sm font-[400] font-poppins text-[#414141]">
                Hand-carved artifacts to bless your home.
              </p>
            </div>
            {/* for shop button */}
            <div>
              <button className="font-poppins bg-[#BA4A20] text-lg font-medium text-white w-[155px] h-[48px] rounded-lg">
                Shop Now
              </button>
            </div>
          </div>

          {/* image section */}
          <div className=" relative ml-9  ">
            <div className="w-full h-full overflow-clip  ">
              <img
                src={BannerMandala}
                alt=""
                className="  w-[320px] h-[310px] animate-spinSlow   "
              />
            </div>
            <img
              src={BannerBuddha}
              alt=""
              className="absolute top-15 left-4 right-0 bottom-0 w-72 m-auto     "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
