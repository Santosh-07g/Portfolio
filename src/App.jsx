import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/HomeT.jsx";
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>

      </Routes>

    </div>
  )
}

export default App