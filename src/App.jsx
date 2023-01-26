import { useState } from 'react'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// pages
import Home from './pages/Home'
import Settings from './pages/Settings'
import Newest from './pages/Newest'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  let PageComponent
    switch (window.location.pathname) {
      case '/':
      PageComponent = <Home />
      break;
      case '/settings':
        PageComponent = <Settings />
        break;
        case '/newest':
          PageComponent = <Newest />
          break;
          case '/auth/login':
            PageComponent = <Login />
            break;
            case '/auth/signup':
              PageComponent = <Signup />
              break;
    }

    if(location.pathname === '/auth/signup') {
      return (
        <Signup />
      )
    }

  return (
    <main>
        {location.pathname === '/auth/login' ? (
          <Login />
        ) : (
          <>
            <Navbar />
            {PageComponent}
            <Footer />
          </>
        )}
    </main>    
    )
}



export default App
