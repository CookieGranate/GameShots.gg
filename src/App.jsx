import { useState } from 'react'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// pages
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  let PageComponent
    switch (window.location.pathname) {
      case '/':
      PageComponent = <Home />
      break
    }
  return (
    <>
      <Navbar />
      {PageComponent}
      <Footer />
    </>
  )
}

export default App
