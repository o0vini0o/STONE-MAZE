import usePuzzles from "../hooks/usePuzzles";

const Score = () => {
  const { move } = usePuzzles();
  return <div className="btn btn-primary w-32">Score: {move}</div>;
};

export default Score;
