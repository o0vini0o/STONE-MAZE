import { createContext, useState } from "react";
import { createArray, checkWin } from "../components/utils";
import { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

const PuzzleContext = createContext();

export const PuzzleContextProvider = ({ children }) => {
  const [arr, setArr] = useState(createArray());
  const [move, setMove] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [bestScore, setBestScore] = useState({
    min_move: 0,
    min_time: 0,
  });
  const { milliseconds, seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
    interval: 20,
  });
  const handleKeyDown = (e) => {
    if (isWin) return;
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
    document.startViewTransition(() => setArr(newArr));
    // setArr(newArr);
  };
  useEffect(() => {
    const getBestScore = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/puzzle_scores/best_score"
        );
        if (!res.ok) {
          const errorData = await res.json();
          console.error(errorData.error);
          return;
        }
        const data = await res.json();
        setBestScore(data.best_score);
      } catch (error) {
        console.error(error);
      }
    };
    getBestScore();
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    checkWin({ arr, setIsWin });

    const postAndRefreschScore = async (score) => {
      try {
        const res = await fetch("http://localhost:3000/puzzle_scores", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(score),
        });
        if (!res.ok) {
          const errorData = await res.json();
          console.error(errorData);
          return;
        }
        const data = await res.json();
        setBestScore(data.best_score);
      } catch (error) {
        console.error(error);
      }
    };
    if (move >= 1) start();
    if (isWin && move > 0) {
      pause();
      const elapsed_time_milliseconds =
        (minutes * 60 + seconds) * 1000 + milliseconds;
      const score = {
        moves: move,
        elapsed_time_milliseconds: elapsed_time_milliseconds,
      };
      postAndRefreschScore(score);
    }
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
