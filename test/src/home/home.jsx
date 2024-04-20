import { useRef } from 'react'

export function Home(props) {
  const { overlayRef, setIsAboutPage, setIsHomepage } = props;

  const handleAboutClick = () => {
    if (overlayRef.current) {
      overlayRef.current.style.right = '0';

      setTimeout(() => {
        overlayRef.current.style.right = '-100%';
        setIsAboutPage(prevState => true);
        setIsHomepage(prevState => false)
      }, 700);
    }
  };

  return (
    <>
        <div className="box">
          <div className='nav'>

            <div className="about">
              <span className="block"></span>
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
    </>
  )
}

export default Home
