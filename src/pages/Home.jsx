/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../components/Banner/Banner'
import DishCategory from '../components/ModelSection/DishCategory'
import Choices from '../components/Choices/Choices'
import SeasonalTop from '../components/Seasonal-Top/SeasonalTop'
import Footer from '../components/Footer'
import RecommendedDishes from '../components/RecommendedDIshes/RecommendedDishes'

const Home = () => {
  return (
  <>
  <Banner/>
  <DishCategory/>
  <Choices/>
  <SeasonalTop/>
  
  <Footer/>
  </>
  )
}

export default Home
