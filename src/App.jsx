import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Analytics from './component/Analytics'
import NewsLetter from './component/NewsLetter'
import Card from './component/Card'
import Footer from './component/Footer'
// import './App.css'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <Analytics/>
     <NewsLetter/>
     <Card/>
     <Footer/>
    </>
  )
}

export default App
