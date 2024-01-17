/* eslint-disable react/prop-types */

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../styles/card3.css";
import { useState } from "react";
import Card2 from "./Card2";
import { FaAngleRight } from "react-icons/fa6";
const Card3 = ({ title, stateImage, famousDish, dishImage }) => {
  //   [temp,setTemp]=useState(famousDish);
  const [viewMore,setViewMore]=useState(0);
  //   console.log(temp)
  return (
    <>
     <div className="flex flex-row items-center  ">

      <div className="flex text-white  text-[2rem] mb-4 ">{title} </div>
      <button  onClick={(e)=>{
        setViewMore(!viewMore)
      }} className="relative  ml-12 text-white px-2 h-7     ">
  <div className="flex  flex-row items-center justify-center ">
   <p className="mb-[0.35rem]">{!viewMore?"See More":"See Less"}</p>  <FaAngleRight />
    </div> </button>
     </div>

      {/* { console.log(famousDish)} */}
      <div className="flex flex-row gap-x-6 flex-wrap gap-y-6">
        {famousDish.map((dish, index) => (
          <>
          {!viewMore&&index<4?( <Card2
                    key={index}
                    title={dish.dishName}
                    imageUrl={dish.dishImage}
                    time={60}
                    rating={4.5}
                    />):<>
                    {viewMore==1?(<Card2
                    key={index}
                    title={dish.dishName}
                    imageUrl={dish.dishImage}
                    time={60}
                    rating={4.5}
                    />):<></>}
                    </>}
                 

                    </>
                    
          
        ))}

      </div>
    </>
  );
};

export default Card3;
