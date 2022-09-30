import { useState } from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import Footer from '../components/Footer'
import '../css/App.css'


function App() {
  return (
    <> 
      <Header imagen="02"/>
      <br/>
      <br/>
      <br/>
      <Home/>
      <Footer/> 
    </>
  )
}

export default App;
