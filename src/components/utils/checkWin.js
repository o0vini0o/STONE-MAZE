import { createArray } from "./createPuzzles";

const checkWin = ({ arr, setIsWin, bestScore, setBestScore, move }) => {
  const complArr = createArray();
  if (arr.every((v, i) => v === complArr[i])) {
    setIsWin(true);
    if ((move != 0 && move < bestScore) || bestScore == 0) {
      setBestScore(move);
      localStorage.setItem("bestScore", JSON.stringify(move));
    }
  }
};
export default checkWin;
