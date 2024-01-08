import React from 'react'
import Choices from './Choices/Choices'
import { useParams } from 'react-router-dom';
import RecommendedData from './../Data/RecommendedData';
import RecommendedDishes from './RecommendedDIshes/RecommendedDishes';
function CountryCuisine({match}) {
  const { Country } = useParams();

  
  console.log(Country);

  return (
    <div className=''>
      
      <Choices Country={Country}/>
    
      {/* <RecommendedDishes/> */}
    </div>
  )
}

export default CountryCuisine