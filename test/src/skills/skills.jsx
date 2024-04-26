import { useEffect, useRef } from "react";
import {mainGame } from './main.jsx'

export function Skills() {
  const canvasRef = useRef(null);
  const replayRef = useRef(null);

  useEffect(() => {
    mainGame(canvasRef.current, replayRef.current);
  }, [])

  return (
    <>
      <canvas id="canvas-game" ref={canvasRef} ></canvas>
      <button id="replay" ref={replayRef} >Replay</button>
    </>
  )
}

export default Skills;
