import React, { useState, useRef, useEffect } from 'react';
import qlImg from './freelance/img/questlands.png'
import jobmaniaImg from './freelance/img/jobmania.png'
import raImg from './freelance/img/rogue.png'
import kanc from './freelance/img/kanc.png';
import { changeProjects } from './freelance/work/changeProject.jsx';
import { jobmania, raPics, qlPics, kancPics, allPics } from './freelance/work/projectsImgs';

export function Cube() {
  const [restarted, setRestarted] = useState(true);
  const [spinCubeInterval, setSpinCubeInterval] = useState(null);

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
  const radioGroupRef = useRef(null);
  let currentClass = '';

  useEffect(() => {

    function changeSide() {
      var checkedRadio = checkedRef.current;
      var showClass = 'show-' + checkedRadio?.value;

      if (currentClass !== '') {
        cubeRef?.current?.classList.remove(currentClass);
      }

      cubeRef?.current?.classList.remove('[class*="show-"]');
      cubeRef.current.classList.add(showClass);
      currentClass = showClass;
  }
  // set initial side
  changeSide();

  radioGroupRef.current.addEventListener('change', changeSide);
  let spinCube = setInterval(function () {
      let rand = Math.floor(Math.random() * 5);
      if (radioGroupRef.current) {

        checkedRef.current = radioGroupRef.current.children[rand].querySelector('input');
      }
      changeSide();
  }, 2000)

  setSpinCubeInterval(spinCube);

  let projectsList = [jobmRef.current, kancRef.current, rogueRef.current, qlRef.current];
  let cubeSides = projectsList;
  let allPrjectsPics = [jobmania, kancPics, raPics, qlPics, allPics, kancPics];
  console.log('setRestarted', setRestarted)
  changeProjects(projectsList, cubeSides, allPrjectsPics, spinCube, setRestarted, restarted);

  return () => {
    clearInterval(spinCube);
  };

  }, [restarted]);

  function toOriginalState() {
    setRestarted(true);
    clearInterval(spinCubeInterval);

    qlRef.current.querySelector('img').src = qlImg;
    rogueRef.current.querySelector('img').src = raImg;
    kancRef.current.querySelector('img').src = kanc;
    jobmRef.current.querySelector('img').src = jobmaniaImg;

    qlRef.current.classList.remove('cube-side-changed');
    rogueRef.current.classList.remove('cube-side-changed');
    kancRef.current.classList.remove('cube-side-changed');
    jobmRef.current.classList.remove('cube-side-changed');
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
              RESTART
            </div>

            <div className="cube_face bottom animatedSide" onClick={() => toOriginalState()}>
              RESTART
            </div>
          </div>
        </div>

        <p className="radio-group" ref={radioGroupRef}>
          <label><input type="radio" name="rotate-cube-side" value="front" ref={checkedRef} defaultChecked /> front </label>
          <label><input type="radio" name="rotate-cube-side" value="right" ref={rightRef} /> right </label>
          <label><input type="radio" name="rotate-cube-side" value="back" ref={backRef} /> back </label>
          <label><input type="radio" name="rotate-cube-side" value="left" ref={leftRef} /> left </label>
          <label><input type="radio" name="rotate-cube-side" value="top" ref={topRef} /> top </label>
          <label><input type="radio" name="rotate-cube-side" value="bottom" ref={bottomRef} /> bottom </label>
        </p>
      </div>
    </div>
  );
}
