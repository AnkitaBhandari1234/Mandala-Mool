// import { IoChevronBack ,IoChevronForward } from "react-icons/io5";
import React from "react";
import { TbPointFilled } from "react-icons/tb";


//  export const CustomizeLeftArrow=({onClick})=>{
//     return(
//         <button onClick={onClick}
//         className="absolute  bg-[#ece6d4] rounded-full p-1  left-0   top-1/2 transform -translate-y-1/2  text-[#9B4E2B]      ">
//             <IoChevronBack size={30} className=""/>
            

//         </button>
//     )

// }

//  export const CustomizeRightArrow=({onClick})=>{
//     return(
//         <button onClick={onClick}
//         className="absolute bg-[#e3d7b2] rounded-full p-1     top-1/2 -right-5 z-50 transform -translate-y-1/2  text-[#9B4E2B]   ">
//             <IoChevronForward  size={30}/>
            

//         </button>
//     )
// }

export const CustomizeDots=({onClick})=>{
    return(
        <button onClick={onClick} className="  ">
<TbPointFilled size={20}  className=" text-[#9B4E2B]" />

        </button>
    )

}