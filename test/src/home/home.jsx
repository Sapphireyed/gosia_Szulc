import { useState } from 'react'

export function Home() {

  return (
    <>
      <div className="container">
        <div className="box">
          <div className='nav'>

            <div className="about">
              <span className="block"></span>
              <h1>About</h1>
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
              <h1>Particles fun</h1>
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
