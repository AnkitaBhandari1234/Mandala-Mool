import React from "react";
import { TbPointFilled } from "react-icons/tb";

export const CustomizeDots = ({ onClick }) => {
  return (
    <button onClick={onClick} className="  ">
      <TbPointFilled size={20} className=" text-[#9B4E2B]" />
    </button>
  );
};
