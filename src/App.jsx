import { useState } from 'react'
import Navbar from './components/Navbar'
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
    </>
  )
}

export default App
