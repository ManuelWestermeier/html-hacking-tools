import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NavBar from './comp/nav-bar'
import FormDataCapture from './pages/form-data-capture'

export default function App() {
  return <HashRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/form-data-capture' element={<FormDataCapture />} />
    </Routes>
  </HashRouter>
}