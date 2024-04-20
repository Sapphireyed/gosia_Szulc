import { useState, useRef } from 'react'
import { Home } from './home/home.jsx';
import { Header } from './header/header.jsx';
import { About } from './about/about.jsx';
import './css.scss'

function App() {
  const overlayRef = useRef(null);
  const [isAboutPage, setIsAboutPage] = useState(false);
  const [isHomepage, setIsHomepage] = useState(true);

  return (
    <>
      <Header />
      <div className='container'>
        <div className="overlay" ref={overlayRef}></div>
        {
          isHomepage ?
            <Home
              overlayRef={overlayRef}
              setIsAboutPage={setIsAboutPage}
              setIsHomepage={setIsHomepage}
            /> :
            null
        }
        {isAboutPage ? <About /> : null}
      </div>
    </>
  )
}

export default App
