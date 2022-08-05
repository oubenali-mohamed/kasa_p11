import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'
import Error from './components/Error/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Location from "./pages/Location"


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<Location/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

