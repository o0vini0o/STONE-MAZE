import usePuzzles from "../hooks/usePuzzles";
import BestScore from "./BestScore";
import NewGameBtn from "./NewGameBtn";
import Score from "./Score";
import Timer from "./Timer";

const PuzzelMenu = () => {
  const { isWin, move } = usePuzzles();

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center gap-2 ">
        <div className="flex flex-col">
          <div className="flex gap-4 justify-center my-2">
            <NewGameBtn />
            <Score />
          </div>
          <Timer />
        </div>
        <BestScore />
      </div>

      {isWin && move != 0 && (
        <div className="my-4">
          <span className="text-2xl font-bold">
            🎉🎉🎉Congratulation!🎉🎉🎉
          </span>
        </div>
      )}
    </div>
  );
};

export default PuzzelMenu;
