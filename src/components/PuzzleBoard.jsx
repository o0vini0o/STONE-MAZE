import { neighborsOfEmpty } from "./utils/createPuzzles.js";
import usePuzzles from "../hooks/usePuzzles.js";

const PuzzleBoard = () => {
  const { arr, setArr, setMove, isWin } = usePuzzles();

  const handleClick = (idx) => {
    if (isWin) return;
    const emptyIndex = arr.indexOf(0);
    const neighborsArray = neighborsOfEmpty(emptyIndex);
    if (neighborsArray.some((n) => n === idx)) {
      let newArr = [...arr];
      [newArr[emptyIndex], newArr[idx]] = [newArr[idx], newArr[emptyIndex]];
      setArr(newArr);
      setMove((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div className="w-[480px] h-[480px] bg-[#181e20] bg-cover rounded-xl mx-auto mt-2">
        <div className="w-[480px] grid grid-cols-4 grid-rows-4 gap-1">
          {arr.map((value, idx) => (
            <div key={idx} onClick={() => handleClick(idx)}>
              <img
                src={`/img/${value}.png`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PuzzleBoard;
