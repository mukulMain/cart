import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Cards from './components/Cards'
import CardDetails from './components/CardDetails'

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />}/>
        <Route path='/cardDetails' element={<CardDetails />}/>
      </Routes>

    </div>
  )
}

export default App
