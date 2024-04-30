import React, { useState, useRef, useEffect } from 'react';
import qlImg from './freelance/img/questlands.png'
import jobmaniaImg from './freelance/img/jobmania.png'
import raImg from './freelance/img/rogue.png'
import kanc from './freelance/img/kanc.png';
import replay from '../assets/replay.svg';
import { changeProjects } from './freelance/work/changeProject.jsx';
import { jobmania, raPics, qlPics, kancPics, allPics } from './freelance/work/projectsImgs.js';

export function Cube() {
  const [restarted, setRestarted] = useState(true);
  const [isAuto, setIsAuto] = useState(false);
  const [intervals, setIntervals] = useState([]);

  const bottomRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const backRef = useRef(null);
  const topRef = useRef(null);
  const rogueRef = useRef(null);
  const qlRef = useRef(null);
  const kancRef = useRef(null);
  const jobmRef = useRef(null);
  const cubeRef = useRef(null);
  let checkedRef = useRef(null);
  const autoRef = useRef(null);
  const radioGroupRef = useRef(null);

  useEffect(() => {
    const radioRefs = Array.from(radioGroupRef.current.querySelectorAll('input'));
    startSpinning(radioRefs);

    let projectsList = [jobmRef.current, kancRef.current, rogueRef.current, qlRef.current];
    let cubeSides = projectsList;
    let allPrjectsPics = [jobmania, kancPics, raPics, qlPics, allPics, kancPics];

    changeProjects(projectsList, cubeSides, allPrjectsPics, setRestarted, restarted);
  }, []);

  function startSpinning(radioRefs) {
    const spinCube = setInterval(() => {
      let rand = Math.floor(Math.random() * 5);
      radioRefs[rand].click();
    }, 2000);

    // Save the interval ID
    setIntervals(prevState => [...prevState, spinCube])
}

function handleAutoClick() {
  const radioRefs = Array.from(radioGroupRef.current.querySelectorAll('input'));

  if (!isAuto) {
    intervals.forEach(interval => clearInterval(interval));
    setIntervals([]);
  } else {
    startSpinning(radioRefs);
  }

  setIsAuto(prevState => {
    const newState = !prevState;
    return newState;
  });

  console.log(isAuto)
}

function changeSide(value) {
  let showClass = 'show-' + value;

  cubeRef.current.className = 'cube';
  cubeRef.current.classList.add(showClass);
}

function handleRadio(ref, e) {
  const value = ref.current.value;
  changeSide(value);

  if (e.isTrusted) {
    intervals.forEach(interval => clearInterval(interval));
    setIntervals([]);
  }
}

  function toOriginalState() {
    setRestarted(true);

    const sides =[qlRef, rogueRef, kancRef, jobmRef, topRef, bottomRef];

    sides.forEach(side => {
      side.current.classList.remove('cube-side-changed');
      side.current.classList.remove('not-clickable');
    })

    qlRef.current.querySelector('img').src = qlImg;
    rogueRef.current.querySelector('img').src = raImg;
    kancRef.current.querySelector('img').src = kanc;
    jobmRef.current.querySelector('img').src = jobmaniaImg;
  }

  return (
    <div className="cube-wrapper">
      <div id="details-1">
        <div className="scene animatedCube">
          <div className="cube" ref={cubeRef}>
            <div className="cube_face front animatedSide qlSide" ref={qlRef} >
              <a>
                <img src={qlImg} className="cubeSide" alt="Front" />
              </a>
            </div>

            <div className="cube_face back animatedSide jobmaniaSide" ref={jobmRef} >
              <a>
                <img src={jobmaniaImg} className="cubeSide" alt="Back" />
              </a>
            </div>

            <div className="cube_face right animatedSide kancSide" ref={kancRef} >
              <a>
                <img src={kanc} className="cubeSide" alt="Right" />
              </a>
            </div>

            <div className="cube_face left animatedSide rogueSide" ref={rogueRef}>
              <a>
                <img src={raImg} className="cubeSide" alt="Left" />
              </a>
            </div>

            <div className="cube_face top animatedSide" onClick={() => toOriginalState()}>
              {restarted ? '' : <img src={replay} /> }
            </div>

            <div className="cube_face bottom animatedSide" onClick={() => toOriginalState()}>
              {restarted ? '' : <img src={replay} /> }
            </div>
          </div>
        </div>

        <div className='allRadio'>
          <p className="radio-group" ref={radioGroupRef}>
            <label>
              <input type="radio" name="rotate-cube-side" value="front" ref={checkedRef} onChange={(e) => handleRadio(checkedRef, e)}  />
              front
            </label>
            <label>
              <input type="radio" name="rotate-cube-side" value="right" ref={rightRef} onChange={(e) => handleRadio(rightRef, e)} />
              right
            </label>
            <label>
              <input type="radio" name="rotate-cube-side" value="back" ref={backRef} onChange={(e) => handleRadio(backRef,e)} />
              back
            </label>
            <label>
              <input type="radio" name="rotate-cube-side" value="left" ref={leftRef} onChange={(e) => handleRadio(leftRef,e)} />
              left
            </label>
            <label>
              <input type="radio" name="rotate-cube-side" value="top" ref={topRef} onChange={(e) => handleRadio(topRef, e)} />
              top
              </label>
            <label>
              <input type="radio" name="rotate-cube-side" value="bottom" ref={bottomRef} onChange={(e) => handleRadio(bottomRef, e)} />
              bottom
            </label>
          </p>
          <p className='radio-auto'>
            <label>
              <input type="checkbox" name="rotate-cube-side" value="auto" ref={autoRef} defaultChecked onChange={() => handleAutoClick()} />
              auto
            </label>
          </p>
        </div>
      </div>
    </div>
  );
}
