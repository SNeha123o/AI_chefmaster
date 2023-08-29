/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../components/Banner/Banner'
import DishCategory from '../components/ModelSection/DishCategory'
import Choices from '../components/Choices/Choices'
import SeasonalTop from '../components/Seasonal-Top/SeasonalTop'
import Footer from '../components/Footer'
import RecommendedDishes from '../components/RecommendedDIshes/RecommendedDishes'
import EmployeeIDForm from '../components/EmployeeIDForm'


const Home = () => {
  return (
  <div className='overflow-x-hidden'>
  <Banner/>
  <DishCategory/>
  <Choices/>
  <SeasonalTop/>
  <Footer/>
  </div>


  )
}

export default Home
