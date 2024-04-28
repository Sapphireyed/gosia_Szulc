import { useEffect, useRef, useState } from "react";
import {mainGame } from './main.jsx'

export function Game() {
  const [gameover, setGameOver] = useState(false);
  const [obstalesArr, setObstaclesArr] = useState([]);
  const [dotsArr, setDotsArr] = useState([]);
  const canvasRef = useRef(null);
  const replayRef = useRef(null);

  useEffect(() => {
    console.log('reseted')
    //mainGame(canvasRef.current, replayRef.current, setGameOver, gameover, dotsArr, setDotsArr, obstalesArr, setObstaclesArr);
  }, [gameover])

  return (
    <>
      {/* <canvas id="canvas-game" ref={canvasRef} ></canvas> */}
      <button id="replay" ref={replayRef} >Replay</button>
    </>
  )
}

