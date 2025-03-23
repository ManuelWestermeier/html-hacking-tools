import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NavBar from './comp/nav-bar'

export default function App() {
  return <HashRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </HashRouter>
}