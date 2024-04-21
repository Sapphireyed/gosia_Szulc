import * as fn from '../functions.js';

export function Home(props) {
  const { overlayRef, currentPage, setCurrentPage } = props;

  return (
    <>
        <div className="box">
          <div className={`nav ${currentPage.firstRun ? 'animated' : 'static'}`}>

            <div className="about">
              <span className="block"></span>
              <h1 onClick={() => fn.animateOverlay(overlayRef, setCurrentPage, 'About')}>About</h1>
            </div>

            <div className="experience">
              <span className="block"></span>
              <h1>Experience</h1>
            </div>

            <div className="education">
              <span className="block"></span>
              <h1>Education</h1>
            </div>

            <div className="skills">
              <span className="block"></span>
              <h1>Skills</h1>
            </div>

            <div className="particles">
              <span className="block"></span>
              <h1>Particles</h1>
            </div>

            <div className="game">
              <span className="block"></span>
              <h1>Mini game</h1>
            </div>

          </div>
        </div>
    </>
  )
}

export default Home
