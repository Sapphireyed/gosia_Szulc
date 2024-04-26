import * as fn from '../functions.js';

export function Home(props) {
  const { overlayRef, currentPage, setCurrentPage } = props;

  function handleNavItemClick(e, name) {
    document.querySelector('#canvas1').classList.add('hidden');
    fn.animateOverlay(e, overlayRef, setCurrentPage, name)
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

            <div className="education item">
              <span className="block"></span>
              <h1 onClick={(e) => handleNavItemClick(e, 'Skills')}>Skills</h1>
            </div>

            <div className="skills item">
              <span className="block"></span>
              <h1>Particles</h1>
            </div>

            <div className="particles item">
              <span className="block"></span>
              <h1>Mini game</h1>
            </div>

            <div className="game item">
              <span className="block"></span>
              <h1>ME - private</h1>
            </div>

          </div>
        </div>
    </>
  )
}

export default Home
