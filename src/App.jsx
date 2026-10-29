import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Home from "./pages/home.jsx";
import Navbar from './components/Navbar'
import ThemeSwitcher from './components/ThemeSwitcher'
import ScrollProgress from './components/ScrollProgress'

const App = () => {
  return (
    // reducedMotion="user": visitors who ask their OS for less motion get no
    // movement from framer-motion (fades still work)
    <MotionConfig reducedMotion="user">
      <div>
        <ScrollProgress/>
        <Navbar/>
        <ThemeSwitcher/>
        <Routes>
          <Route path='/' element={<Home />}/>

        </Routes>

      </div>
    </MotionConfig>
  )
}

export default App
