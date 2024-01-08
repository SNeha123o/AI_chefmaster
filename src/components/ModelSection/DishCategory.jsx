// eslint-disable-next-line no-unused-vars
import React from 'react'
import { CategoryDishes } from '../../Data/CategoryDishes'
import { ModelData } from '../../Data/ModelData'
import { NavLink } from 'react-router-dom';

import "./DishCategory.css"


const DishCategory = () => {
  return (
    <>
  
      <div className='py-10 bg-[#0B1018]'>
        {/* buttons  */}
        <div className=''>
          <ul className='flex justify-center gap-6 font-medium pt-5'>
            {               
               CategoryDishes.map((item,index,page) => {
                  
                  if (item.page === "/breakfast") {
                     return (
                       <NavLink to="/breakfast" key={index}>
                         <button className='bg-[#717173] text-white p-2 rounded-full px-5  hover:scale-110 hover:bg-red-500  transition-all'>{item.title}</button>
                       </NavLink>
                     );
                   } else {
                     return (
                     <li  key={index}>
                     <button className='bg-[#717173] text-white p-2 rounded-full px-5  hover:scale-110 transition-all'>{item.title}</button>
                   </li>
               )}
         
            })
         }
          </ul>
        </div>

        {/* model section  */}
        <div className='flex items-center justify-center pt-8 '>
         {
            ModelData.map((item,index) => {
                return <NavLink to={item.path} key={index} className='bg-white mr-5 flex items-center justify-cente border-2 border-r flex-col p-4  rounded-lg hover:scale-105 transition-all duration-300 art-board art-board__container '>
                           {/* <div class="card">
            <div class="card__image">
               <img src={item.image} alt="Salad" />
            </div>
            <div className="card__info mt-6">
               <div class="car__info--title">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
               </div>
               <div class="card__info--price">
                 
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
               </div>
            </div>
         </div> */}
         

         {/* card 2 testing  */}
         <div class="card">
            <div class="card__image">
            </div>
            <div className="card__info mt-6">
               <div class="car__info--title relative">
                  <h3 className='absolute -top-24 text-[3rem]'>{item.title}</h3>
                  <p>{item.description}</p>
               </div>
               
            </div>
         </div>


                       
                        
                      </NavLink>
            })
         }
        </div>
      </div>
    </>
  )
}

export default DishCategory
