// eslint-disable-next-line no-unused-vars
import React from 'react'
import { CategoryDishes } from '../../Data/CategoryDishes'
import { ModelData } from '../../Data/ModelData'




const DishCategory = () => {
  return (
    <>
      <div className='py-10 bg-[#0B1018]'>
        {/* buttons  */}
        <div className=''>
          <ul className='flex justify-center gap-6 font-medium pt-5'>
            {               
               CategoryDishes.map((item,index) => {
                return <li key={index}><button className='bg-[#717173] text-white p-2 rounded-full px-5'>{item.title}</button></li>
               })
         
            }
          </ul>
        </div>

        {/* model section  */}
        <div className='flex items-center justify-center pt-8'>
         {
            ModelData.map((item,index) => {
                return <div key={index} className='bg-white mr-5 flex items-center justify-cente border-2 border-r flex-col p-4  rounded-lg'>
                        <img src={item.image} className='h-36   w-fit object-cover rounded-lg' alt="" />
                        <p className='font-medium text-center'>{item.title}</p>
                        <p className='text-sm'>{item.description}</p>
                        
                      </div>
            })
         }
        </div>
      </div>
    </>
  )
}

export default DishCategory
