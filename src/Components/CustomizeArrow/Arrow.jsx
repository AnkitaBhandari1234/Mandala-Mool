import { IoChevronBack ,IoChevronForward } from "react-icons/io5";
import React from "react";
 export const CustomizeLeftArrow=({onClick})=>{
    return(
        <button onClick={onClick}
        className="absolute    -left-2 z-70  top-1/2 transform -translate-y-1/2  text-[#9B4E2B]     ">
            <IoChevronBack size={40} className=""/>
            

        </button>
    )

}

 export const CustomizeRightArrow=({onClick})=>{
    return(
        <button onClick={onClick}
        className="absolute      top-1/2 -right-2 transform -translate-y-1/2  text-[#9B4E2B]   ">
            <IoChevronForward  size={40}/>
            

        </button>
    )
}
