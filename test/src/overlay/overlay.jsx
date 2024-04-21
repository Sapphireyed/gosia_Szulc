import * as fn from '../functions.js';
import burger from '../assets/burger.svg'
import { forwardRef } from 'react';

export const Overlay = forwardRef(({ setCurrentPage, currentPage }, ref) => {

  function handleBurger(e) {
    e.preventDefault();
    fn.animateOverlay(ref, setCurrentPage, 'Homepage');
  }

  return (
    <>
      <div className="overlay" ref={ref}>
      {
        currentPage.name === 'Homepage' || window.innerWidth > 720 ? null :
          <button
            onClick={(e) => handleBurger(e)}
            className='burger-btn'>
            <img src={burger} />
          </button>
      }
    </div>
    </>
  )
});

Overlay.displayName = 'Overlay';
