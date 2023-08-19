/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SingleDish from './pages/SingleDish'

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/singledish' element={<SingleDish/>}/>
     </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
