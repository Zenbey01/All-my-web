import { useState } from 'react'

import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Content from './components/content'
// -----------------------------------------------
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      {/* <Header /> */}
      <Navbar />
      <Content />
      <h1> Welcome to my world </h1>
      <p>- Robin Honkai star rail</p>
      <button>Test</button>
      <Footer />
      
     </div>
  )
}

export default App
