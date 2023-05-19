import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import './App.css'
import Quiz from './Quiz'
import Programm from './components/Program'
import { Modal } from './components/Modal'


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/project" element={<Programm/>}/>
        <Route exact path="/about" element={<Modal/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
  )
}

export default App

