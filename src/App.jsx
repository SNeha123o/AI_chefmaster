/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SingleDish from './pages/SingleDish'
import Cooking from './pages/Cooking'
import Footer from './components/Footer'
import Login from './pages/Login'
import Layout from './components/Layout'
import LuxuryDishes from './components/LuxuryDishes'
import QuickDishes from './components/QuickDishes'
import HealthyDishes from './components/HealthyDishes'
import UserMeal from './components/UserMeal'
import CountryCuisine from './components/CountryCuisine'
import TeamPage from './pages/TeamPage'
import Breakfast from './pages/Breakfast'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Layout/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/singledish' element={<SingleDish/>}/>
      <Route path='/cooking' element={<Cooking/>}/>
      <Route path='/teampage' element={<TeamPage/>}/>
      <Route path='/luxx_dishes' element={<LuxuryDishes/>}/>
      <Route path='/luxx_dishes/:Country' element={<CountryCuisine/>}/>
      <Route path='/qui_dishes' element={<QuickDishes/>}/>
      <Route path='/heal_dishes' element={<HealthyDishes/>}/>
      <Route path='/user_meal' element={<UserMeal/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/breakfast' element={<Breakfast/>}/>
     </Routes> 
     </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App
