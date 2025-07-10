import React from "react";
import { TbPointFilled } from "react-icons/tb";

export const CustomizeDots = ({ onClick,active }) => {
  return (
    <button onClick={onClick} className="">
      <TbPointFilled
        size={20}
        className={`transition-colors duration-300 ${
          active ? "text-[#9B4E2B]" : "text-gray-300"
        }`}
      />
    </button>
  );
};
