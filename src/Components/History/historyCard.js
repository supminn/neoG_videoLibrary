import { Link } from "react-router-dom";
import { useDataContext } from "../../Context/data-context";
import { AddToPlaylist } from "../Playlist/addToPlaylist";
import { imageURL, videoExists } from "../Video/videoUtil";

export const HistoryCard = ({ vid }) => {
  const {
    state: { videoList, likedVideos },
    dispatch,
  } = useDataContext();

  const { title, author, image } = videoList.find(
    (video) => video.vid === vid
  );

  return (
    <div className="card card-shadow">
      <Link className="no-line" to={`/${vid}`} onClick={() => dispatch({type:"ADD_TO_HISTORY",payload:vid})}>
      <img
        className="card-img"
        alt="video-still"
        src={imageURL(vid)}
      />
      <div className="flex-container">
        <img className="avatar-sm" alt="author" src={image} />
        <b className="primaryBg-txt txt-title">{title}</b>
      </div>
      <small className="txt-small txt-grey">{author}</small>
      </Link>
      <small className="txt-grey">
        <i
          onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: vid })}
          className={
            videoExists(likedVideos, vid)
              ? "fas fa-thumbs-up primaryBg-txt"
              : "fas fa-thumbs-up"
          }
        ></i>
      <AddToPlaylist vid={vid}/>
      </small>
      <button type="button" onClick={() => dispatch({
                        type: "REMOVE_FROM_HISTORY",
                        payload: vid 
                      })}
            className="btn btn-secondary btn-dismiss"><i className="fas fa-times"></i></button>
  
    </div>

  );
};

