import { useEffect } from "react";
import { useAuthContext, useDataContext } from "../../Context";
import { HistoryCard } from "./HistoryCard";
import historyPic from "../../images/history.svg";
import Loader from "react-loader-spinner";
import { getUserHistory, updateUserHistory } from "../../Utils/serverRequest";

export const History = () => {
  const {
    state: { history },
    dispatch,
  } = useDataContext();
  const {userData, showLoader, setShowLoader} = useAuthContext();

  useEffect(() => {
    document.title = "SupVision | History";
  }, []);

  useEffect(() => {
    getUserHistory(userData._id,dispatch,setShowLoader);
},[])

return showLoader ? (
    <div className="loader-container">
      <Loader type="Oval" color="#00BFFF" height={80} width={80} />
    </div>
  ) : (
    <>
      <h2 className="txt-header-2">
        Watch <span className="secondary-txt">History</span>
      </h2>
      {history.length > 0 && (
        <button
          onClick={() => updateUserHistory(null,userData._id, "CLEAR_HISTORY",dispatch, setShowLoader)}
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
            <HistoryCard key={videoId} _id={videoId} />
          ))}
      </div>
      {history.length === 0 && (
        <>
        <h3 className="txt-header-3">No watch history found!</h3>
        <img className="img-res img-svg" src={historyPic} alt="history"/>
        </>
      )}
    </>
  );
};
