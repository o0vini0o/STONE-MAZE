import usePuzzles from "../hooks/usePuzzles";

const Timer = () => {
  const { milliseconds, seconds, minutes, pause } = usePuzzles();

  const padNum = (num) => String(num).padStart(2, 0);

  return (
    <div className="flex gap-5 justify-center items-center">
      <div>
        <span>{padNum(minutes)}</span>:<span>{padNum(seconds)}</span>:
        <span>{padNum(Math.floor(milliseconds / 10))}</span>
      </div>
      <button className="btn btn-sm" onClick={pause}>
        Pause
      </button>
    </div>
  );
};
export default Timer;
