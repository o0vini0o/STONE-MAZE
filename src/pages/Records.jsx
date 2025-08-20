import { useEffect, useState } from "react";
import formatTime from "../components/utils/formatTime";

const Records = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchScores = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3000/puzzle_scores");
        if (!res.ok) throw new Error("Failed to fetch records");
        const data = await res.json();
        setScores(data.scores);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchScores();
  }, []);
  const handelDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/puzzle_scores/${id}`, {
        method: "DELETE",
      });
      setScores(scores.filter((score) => score.id != id));
    } catch (error) {
      console.error("Failed to delete score", error);
    }
  };

  return (
    <div className="container mx-auto space-y-2">
      <h2 className="text-2xl text-center font-bold">All Records</h2>
      {loading && (
        <span className="loading loading-spinner loading-md text-primary"></span>
      )}
      {!loading && (
        <table className="table">
          {/* 表头 */}
          <thead>
            <tr>
              <th>Created At</th>
              <th>Moves</th>
              <th>Time(mm:ss.SSS)</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* 表格主题内容 */}
          <tbody>
            {scores.map((score) => (
              <tr key={score.id}>
                <td>{new Date(score.created_at).toLocaleString()}</td>
                <td>{score.moves}</td>
                <td>{formatTime(score.elapsed_time_milliseconds)} </td>
                <td>
                  <button
                    className="btn btn-error"
                    onClick={() => handelDelete(score.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Records;
