import { useRef } from 'react'

export function Home() {
  const overlayRef = useRef(null);
  const blockAboutRef = useRef(null);

  const handleAboutClick = () => {
    if (overlayRef.current) {
      blockAboutRef.current.width = '100% !important';
      blockAboutRef.current.right = '3% !important';
      overlayRef.current.style.right = '0';
      //boxRef.current.style.marginLeft = '-100%';

      setTimeout(() => {
        overlayRef.current.style.right = '-100%';
        blockAboutRef.current.width = '5% !important';
        blockAboutRef.current.right = '95% !important';
      }, 700);
    }
  };

  return (
    <>
      <div className="container">
        <div className="overlay" ref={overlayRef}></div>
        <div className="box">
          <div className='nav'>

            <div className="about">
              <span className="block" ref={blockAboutRef}></span>
              <h1 onClick={handleAboutClick}>About</h1>
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
      </div>
    </>
  )
}

export default Home
