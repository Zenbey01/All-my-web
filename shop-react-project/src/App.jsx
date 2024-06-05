import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <Content />
      <h1> Welcome to my world </h1>
      <p>- Robin Honkai star rail</p>
      <Footer />
      
     </div>
  )
}

export default App
