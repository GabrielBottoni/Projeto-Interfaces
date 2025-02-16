import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Content from './assets/components/Content'

function App() {
  
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
