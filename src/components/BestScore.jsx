import usePuzzles from "../hooks/usePuzzles";

const BestScore = () => {
  const { bestScore } = usePuzzles();
  return <div className="btn btn-primary w-40">Best Score: {bestScore}</div>;
};

export default BestScore;
