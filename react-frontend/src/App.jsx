import { useState } from 'react'
// import './App.css'
import WeatherChart from './WeatherComponent'
import Navbar from './NavBar'
import Home from './Home'
import AboutUs from './AboutUs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
   <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cities" element={<WeatherChart />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="/about-us" element={AboutUs} /> */}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
