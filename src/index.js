import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<p>Oups Cette page n'existe pas</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
