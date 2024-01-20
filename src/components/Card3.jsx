/* eslint-disable react/prop-types */

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../styles/card3.css";
import { useState } from "react";
import Card2 from "./Card2";
import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card3 = ({ title, stateImage, famousDish, dishImage }) => {
  //   [temp,setTemp]=useState(famousDish);
  const [viewMore,setViewMore]=useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //   console.log(temp)
  return (
    <>
     <div className="flex flex-row items-center   ">

      <div className="flex text-white  text-[2rem] mb-4 mt-12 ml-16  ">{title} </div>
      <button  onClick={(e)=>{
        setViewMore(!viewMore)
      }} className="relative  ml-12 text-white px-2 mt-12 h-7     ">
  <div className="flex  flex-row items-center justify-center ">
   <p className="mb-[0.25rem]">{!viewMore?"See More":"See Less"}</p>  <FaAngleRight />
    </div> </button>
     </div>

      {/* { console.log(famousDish)} */}
      {  !viewMore &&
                   <div className="w-full h-72    pl-12 pr-16 gap-x-6">
                   <Slider {...settings}>
                      {famousDish.map((dish,index)=>(
                        <Card2
                        key={index}
                        title={dish.dishName}
                        imageUrl={dish.dishImage}
                        time={60}
                        rating={4.5}
                        />
                      ))}
                        </Slider>
                   </div>
      }
      
      
      <div className="flex pl-12 flex-row gap-x-6 flex-wrap gap-y-6">
         

        {famousDish.map((dish, index) => (
          <>
         
          {!viewMore&&index<4?(
            <>
           
          
                      </>):<>
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
