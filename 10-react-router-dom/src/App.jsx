import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<h1>Hello</h1>} />
        <Route path='*' element={<h1>Not found</h1>} />

      </Routes>
      
    </div>
  )
}

export default App