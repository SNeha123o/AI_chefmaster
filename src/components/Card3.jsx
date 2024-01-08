/* eslint-disable react/prop-types */

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../styles/card3.css";
import { useState } from "react";
const Card3 = ({ title, stateImage, famousDish, dishImage }) => {
  //   [temp,setTemp]=useState(famousDish);
  //   console.log(temp)
  return (
    <>
      <div className="flex text-white  text-[2rem] mb-4 ">{title}</div>
      {/* { console.log(famousDish)} */}
      <div className="flex flex-row gap-x-6">
        {famousDish.map((dish, index) => (
          <div key={index}>
            <div className=" rounded-lg  h-[200px] flex  flex-row md:flex-col bg-white w-[350px]  cursor-pointer   transition-all duration-300 ">
              <div className="cards-container ">
                <div
                  style={{
                    width: "100%;",
                    height: "225px;",
                    overflow: "hidden;",
                  }}
                  className="flex flex-row m-auto  hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={dish.dishImage}
                    className=" h-[22vh] w-[20vw] m-auto opacity-100 "
                  ></img>
                  <div className="absolute  overlaycss  h-[22vh] w-[20vw] justify-center    flex items-end text-white hover:opacity-100 opacity-0 ">
                    <p className="-mt-4  text-[1.3rem] mb-4  ">
                      <p className="">{dish.dishName}</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card3;
