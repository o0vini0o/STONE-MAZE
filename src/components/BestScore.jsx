import usePuzzles from "../hooks/usePuzzles";
import { formatTime } from "./utils";

const BestScore = () => {
  const { bestScore } = usePuzzles();
  const { min_move, min_time } = bestScore;

  return (
    <div className="space-y-2 border-2 p-4">
      <h3 className="font-bold">Best Score:</h3>
      <div className="space-x-2">
        <span className="p-2">Moves: {min_move}</span>
        <span className="p-2">Time: {formatTime(min_time)}</span>
      </div>
    </div>
  );
};

export default BestScore;
