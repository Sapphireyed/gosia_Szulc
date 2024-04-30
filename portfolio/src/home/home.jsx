import * as fn from '../functions.js';
import { mainGame } from '../../game-copy/main.js';

export function Home(props) {
  const { overlayRef, currentPage, setCurrentPage } = props;

  function handleNavItemClick(e, name) {
    document.querySelector('#canvas1').classList.add('hidden');

    if (name === 'Game') {
      setTimeout(() => {
        document.querySelector('#canvas2').style.display = 'block';
        document.querySelector('#canvas2').style.opacity = '1';
        mainGame()
      }, 1000);
    }

    fn.animateOverlay(e, overlayRef, setCurrentPage, name);
  }

  return (
    <>
        <div className="box">
          <div className={`nav ${currentPage.firstRun ? 'animated' : 'static'}`}>

            <div className="about item">
              <h1 onClick={(e) => handleNavItemClick(e, 'About')}>ME - PRO</h1>
              <span className="block"></span>
            </div>

            <div className="experience item">
              <span className="block"></span>
              <h1 onClick={(e) => handleNavItemClick(e, 'Experience')}>Experience</h1>
            </div>

            <div className="skills item">
              <span className="block"></span>
              <h1 onClick={(e) => handleNavItemClick(e, 'Skills')}>Skills</h1>
            </div>

            <div className="particles item">
              <span className="block"></span>
              <h1 onClick={(e) => {handleNavItemClick(e, 'Particles')}} >Particles</h1>
            </div>

            <div className="game item">
              <span className="block"></span>
              <h1 onClick={(e) => {handleNavItemClick(e, 'Game')}}>Mini game</h1>
            </div>

            <div className="private item">
              <span className="block"></span>
              <h1 onClick={(e) => {handleNavItemClick(e, 'Priv')}} >ME - private</h1>
            </div>

          </div>
        </div>
    </>
  )
}

export default Home
