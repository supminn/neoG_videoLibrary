import { useDataContext } from "../../Context/data-context"
import { HistoryCard } from "./historyCard";

export const History = () => {
    const {state:{history},dispatch} = useDataContext();

    return(
        <>
        <h2 className="txt-header-2">Watch <span className="secondary-txt">History</span></h2>
        {history.length>0 && <button onClick={() => dispatch({type:"CLEAR_HISTORY"})} className="btn btn-dark">Clear History</button>}
        {history.slice(0).reverse().map(videoId => (
            <HistoryCard key={videoId} id={videoId}/>
        ))}
        {history.length===0 && <h3 className="txt-header-3">No watch history found!</h3>}
        </>
    )
}