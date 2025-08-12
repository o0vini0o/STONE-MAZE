import { useContext } from "react";
import PuzzleContext from "../context/puzzleContext";
const usePuzzles = () => {
  const context = useContext(PuzzleContext);
  if (!context) {
    throw new Error("usePuzzle must have PuzzleContext");
  }
  return context;
};
export default usePuzzles;
