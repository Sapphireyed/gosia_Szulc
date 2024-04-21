import React, { useState, useRef } from 'react'
import { Home } from './home/home.jsx';
import { Header } from './header/header.jsx';
import { About } from './about/about.jsx';
import { Overlay } from './overlay/overlay.jsx'
import { Desktop } from './desktop/desktop.jsx';
import * as fn from './functions.js';
import './css.scss'

function App() {
  const overlayRef = useRef(null);
  const [currentPage, setCurrentPage] = useState({
    name: 'Homepage',
    firstRun: true
  });

  const pages = {
    Home: Home,
    About: About
  }

  return (
    <>
      <Header />

      <div className='wrapper'>
        <Overlay
          ref={overlayRef}
          overlayRef={overlayRef}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />

        <div className='container'>
          {
            !fn.isMobile() ?
              <Home
                overlayRef={overlayRef}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              /> :
              null
          }
          {
            currentPage.name === 'Homepage' && fn.isMobile() ?
              <Home
                overlayRef={overlayRef}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              /> : null
          }
          {fn.isMobile() && pages[currentPage.name] && React.createElement(pages[currentPage.name])}

        </div>

        {
          !fn.isMobile() ?
            <Desktop
              ref={overlayRef}
              overlayRef={overlayRef}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            /> :
            null
        }
      </div>
    </>
  )
}

export default App
