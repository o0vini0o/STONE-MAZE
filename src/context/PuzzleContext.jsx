import { createContext, useState } from "react";
import { createArray } from "../components/utils/createPuzzles";
import { useEffect } from "react";
import checkWin from "../components/utils/checkWin.js";
import { useStopwatch } from "react-timer-hook";

const PuzzleContext = createContext();

export const PuzzleContextProvider = ({ children }) => {
  const [arr, setArr] = useState(createArray());
  const [move, setMove] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore") || 0)
  );
  const { milliseconds, seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
    interval: 20,
  });

  useEffect(() => {
    checkWin({ arr, setIsWin, bestScore, setBestScore, move });
    if (move === 1) start();
    if (isWin) pause();
  }, [arr, move, isWin]);
  return (
    <PuzzleContext
      value={{
        arr,
        setArr,
        move,
        setMove,
        isWin,
        setIsWin,
        bestScore,
        setBestScore,
        milliseconds,
        seconds,
        minutes,
        start,
        pause,
        reset,
      }}
    >
      {children}
    </PuzzleContext>
  );
};
export default PuzzleContext;
