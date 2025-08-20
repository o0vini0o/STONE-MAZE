import usePuzzles from "../hooks/usePuzzles";

const Score = () => {
  const { move } = usePuzzles();
  return (
    <div className="bg-primary w-32 text-neutral font-bold flex justify-center items-center">
      Moves: {move}
    </div>
  );
};

export default Score;
