import { useEffect, useRef, useState } from "react";
import {mainGame } from './main.jsx'

export function Skills() {
  const [gameover, setGameOver] = useState(false);
  const canvasRef = useRef(null);
  const replayRef = useRef(null);

  useEffect(() => {
    mainGame(canvasRef.current, replayRef.current, setGameOver, gameover);
  }, [gameover])

  return (
    <>
      <canvas id="canvas-game" ref={canvasRef} ></canvas>
      <button id="replay" ref={replayRef} >Replay</button>
    </>
  )
}

export default Skills;
