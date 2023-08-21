/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SingleDish from './pages/SingleDish'
import Cooking from './pages/Cooking'

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/singledish' element={<SingleDish/>}/>
      <Route path='/cooking' element={<Cooking/>}/>
     </Routes> 
     </BrowserRouter>
    
    </>
  )
}

export default App
