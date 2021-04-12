import { useEffect } from "react";
import { useDataContext } from "../../Context/data-context";
import { HistoryCard } from "./historyCard";

export const History = () => {
  const {
    state: { history },
    dispatch,
  } = useDataContext();

  useEffect(() => {
    document.title = "SUPVision | History";
  }, []);

  return (
    <>
      <h2 className="txt-header-2">
        Watch <span className="secondary-txt">History</span>
      </h2>
      {history.length > 0 && (
        <button
          onClick={() => dispatch({ type: "CLEAR_HISTORY" })}
          className="btn btn-dark"
        >
          Clear History
        </button>
      )}
      <div className="card-container">
        {history
          .slice(0)
          .reverse()
          .map((videoId) => (
            <HistoryCard key={videoId} id={videoId} />
          ))}
      </div>
      {history.length === 0 && (
        <h3 className="txt-header-3">No watch history found!</h3>
      )}
    </>
  );
};
