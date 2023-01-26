import { useState } from 'react'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// pages
import Home from './pages/Home'
import Settings from './pages/Settings'
import Newest from './pages/Newest'
import Auth from './pages/Auth'

function App() {
  const [count, setCount] = useState(0)

  let PageComponent
    switch (window.location.pathname) {
      case '/':
      PageComponent = <Home />
      break
      case '/settings':
        PageComponent = <Settings />
        break
        case '/newest':
          PageComponent = <Newest />
          break
          case '/auth':
            PageComponent = <Auth />
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
