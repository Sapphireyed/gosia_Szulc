import { useState } from 'react'
import { Home } from './home/home.jsx';
import { Header } from './header/header.jsx';
import './css.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
