import usePuzzles from "../hooks/usePuzzles";
import { creatInitArr } from "./utils/createPuzzles";

const NewGameBtn = () => {
  const { setArr, setIsWin, setMove, reset } = usePuzzles();

  const handleClick = () => {
    const time = new Date();
    setArr(creatInitArr);
    reset(time, false);
    setIsWin(false);
    setMove(0);
  };
  return (
    <button className="btn btn-primary w-32" onClick={handleClick}>
      New Game
    </button>
  );
};

export default NewGameBtn;
