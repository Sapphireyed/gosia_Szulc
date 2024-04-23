import React, { useRef, useEffect } from 'react';
import qlImg from './freelance/img/questlands.png'
import jobmaniaImg from './freelance/img/jobmania.png'
import raImg from './freelance/img/rogue.png'
import kanc from './freelance/img/kanc.png';
import { changeProjects } from './freelance/work/changeProject';
import { jobmania, raPics, qlPics, kancPics } from './freelance/work/projectsImgs';

export function Cube() {
  const frontRef = useRef(null);
  const bottomRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const backRef = useRef(null);
  const topRef = useRef(null);
  const sceneRef = useRef(null);
  const cubeRef = useRef(null);
  let checkedRef = useRef(null);
  const radioGroupRef = useRef(null);
  let currentClass = '';

  useEffect(() => {
    console.log('changed')
    function changeSide() {
      var checkedRadio = checkedRef.current;

      var showClass = 'show-' + checkedRadio?.value;
      //var imgOnSide = document.querySelector('.' + checkedRadio?.value + ' img')

      if (currentClass) {
        cubeRef.current.classList.remove(currentClass);
      }
      // if (imgOnSide !== null && checkedRadio?.value !== 'bottom') {
      //   //  document.querySelector('.' + checkedRadio.value + ' img').style.animation = 'stretch 0.6s ease 0.5s forwards'
      // } else if (checkedRadio?.value == 'bottom') {
      //     console.log('bottom')
      // }


      cubeRef.current.classList.add(showClass);
      currentClass = showClass;

    //  scene.style.animation = 'spin 5s ease infinite'
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

  // let projectsList = Array.from(document.querySelectorAll('#listDiv ul img'))
  // let cubeSides = Array.from(document.getElementsByClassName('cube_face'))

  // let allPrjectsPics = [jobmania, raPics, kancPics, qlPics]
  // changeProjects(projectsList, cubeSides, allPrjectsPics, spinCube)
  }, []);

  return (
    <div className="cube-wrapper">
      <div id="details-1">
        <div className="scene animatedCube">
          <div className="cube" ref={cubeRef}>
            <div className="cube_face front animatedSide">
              <a href="https://sapphireyed.github.io/ql/" target="_blank">
                <img src={qlImg} className="cubeSide" alt="Front" />
              </a>
            </div>

            <div className="cube_face back animatedSide">
              <a href="https://sapphireyed.github.io/ql/" target="_blank">
                <img src={jobmaniaImg} className="cubeSide" alt="Back" />
              </a>
            </div>

            <div className="cube_face right animatedSide">
              <a href="https://sapphireyed.github.io/ql/" target="_blank">
                <img src={kanc} className="cubeSide" alt="Right" />
              </a>
            </div>

            <div className="cube_face left animatedSide">
              <a href="https://sapphireyed.github.io/ql/" target="_blank">
                <img src={raImg} className="cubeSide" alt="Left" />
              </a>
            </div>

            <div className="cube_face top animatedSide">
TOP
            </div>

            <div className="cube_face bottom animatedSide">
BOTTOM
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
