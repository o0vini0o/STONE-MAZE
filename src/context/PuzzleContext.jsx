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
  const handleKeyDown = (e) => {
    let newArr = [...arr];
    const emptyIndex = arr.indexOf(0);
    const emptyRow = Math.floor(emptyIndex / 4);
    const emptyCol = emptyIndex % 4;

    switch (e.key) {
      case "ArrowUp":
        if (emptyRow < 3) {
          [newArr[emptyIndex], newArr[emptyIndex + 4]] = [
            newArr[emptyIndex + 4],
            newArr[emptyIndex],
          ];
          setMove((prev) => prev + 1);
        }
        break;
      case "ArrowDown":
        if (emptyRow > 0) {
          [newArr[emptyIndex], newArr[emptyIndex - 4]] = [
            newArr[emptyIndex - 4],
            newArr[emptyIndex],
          ];
          setMove((prev) => prev + 1);
        }

        break;
      case "ArrowLeft":
        if (emptyCol < 3) {
          [newArr[emptyIndex], newArr[emptyIndex + 1]] = [
            newArr[emptyIndex + 1],
            newArr[emptyIndex],
          ];
          setMove((prev) => prev + 1);
        }
        break;
      case "ArrowRight":
        if (emptyCol > 0) {
          [newArr[emptyIndex], newArr[emptyIndex - 1]] = [
            newArr[emptyIndex - 1],
            newArr[emptyIndex],
          ];
          setMove((prev) => prev + 1);
        }

        break;
      default:
        return;
    }
    setArr(newArr);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    checkWin({ arr, setIsWin, bestScore, setBestScore, move });
    if (move === 1) start();
    if (isWin) pause();
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
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
