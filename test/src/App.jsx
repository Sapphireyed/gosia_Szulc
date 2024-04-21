import { useState, useRef } from 'react'
import { Home } from './home/home.jsx';
import { Header } from './header/header.jsx';
import { About } from './about/about.jsx';
import * as fn from './functions.js';
import './css.scss'

function App() {
  const overlayRef = useRef(null);
  const [currentPage, setCurrentPage] = useState({
    name: 'Homepage',
    firstRun: true
  });

  function handleBurger(e) {
    e.preventDefault();
    fn.animateOverlay(overlayRef, setCurrentPage, 'Homepage');
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className="overlay" ref={overlayRef}>
          {
            currentPage.name === 'Homepage' ? null :
              <button
                onClick={(e) => handleBurger(e)}
                className='burger-btn'><i className="fa fa-arrow-left back-icon"/>
                <span style={{ color: 'white', fontSize: 16, marginLeft: -5}}>Back</span>
              </button>
          }
        </div>
        {
          currentPage.name === 'Homepage' ?
            <Home
              overlayRef={overlayRef}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            /> : null
        }
        {currentPage.name === 'About' ? <About /> : null}
      </div>
    </>
  )
}

export default App
