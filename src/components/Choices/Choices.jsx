/* eslint-disable no-unused-vars */
import React from 'react'
import Card1 from '../Card1'
import ChoicesData from '../../Data/ChoicesData'
import ItalianCuisineData from '../../Data/ItalianCuisineData'
import MexicanCuisineData from '../../Data/MexicanCuisineData'
import SpanishCuisineData from '../../Data/SpanishCuisineData'
import JapaneseCuisineData from '../../Data/JapaneseCuisineData'
import { useState,useEffect } from 'react';
import CuisineData from './../../Data/CuisineData';
const Choices = ({Country}) => {
    const [CountryCuisineData,setCountryCuisineData]=useState(ChoicesData);
    useEffect(() => {
        switch (Country) {
          case 'Italian':
            setCountryCuisineData(ItalianCuisineData);
            break;
          case 'Mexican':
            setCountryCuisineData(MexicanCuisineData);
            break;
          case 'Spanish':
            setCountryCuisineData(SpanishCuisineData);
            break;
            
          case 'Japanese':
            setCountryCuisineData(JapaneseCuisineData);
            break;
            
          default:
            setCountryCuisineData(ChoicesData);
            break;
        }
      }, [Country]);
  return (
    <div className='bg-white text-black flex flex-col justify-center items-center py-8'>

       
        <h1 className='text-3xl font-semibold pb-8 text-black'> {!Country ? ` What do you want to cook` : `Famous ${Country} Dishes`}</h1>
        <div className="card-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4 lg:gap-16 items-center justify-center">
                {CountryCuisineData.map((item, index) => (
                    <Card1
                        key={index}
                        title={item.title}
                        imageUrl={item.imageUrl}
                        
                    />
                ))}
                      

        </div>

        <h1 className=' mx-24 ml-[11rem] mr-[10rem] mt-4 text-3xl font-semibold pb-8 text-black'> {!Country ? `` : `Unleash the joy of discovering new tastes of ${Country} Cuisine , celebrating the diversity that makes ${Country} cuisine an enchanting feast for the senses.`}</h1>

        {/* CUISINE */}
    
        {!Country && (
        <><h1 className='text-3xl font-semibold py-8 text-black'>{!Country ? `Choices` : ``}</h1>
        <div className="card-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4 lg:gap-16 items-center justify-center">
                {CuisineData.map((item, index) => (
                    <Card1
                        
                    key={index}
                        title={item.title}
                        imageUrl={item.imageUrl}
                    />
                ))}
        </div>
        </>
        )}


    </div>
  )
}

export default Choices
