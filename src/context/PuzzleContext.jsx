import { createContext, useState } from "react";
import { createArray } from "../components/utils/createPuzzles";

export const PuzzleContext = createContext();

const PuzzleContextProvider = ({ children }) => {
  const [arr, setArr] = useState(createArray());
  const [move, setMove] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || 0
  );

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
      }}
    >
      {children}
    </PuzzleContext>
  );
};
export default PuzzleContextProvider;
