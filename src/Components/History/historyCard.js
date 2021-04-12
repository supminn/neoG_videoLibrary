import { Link } from "react-router-dom";
import { useDataContext } from "../../Context/data-context";
import { AddToPlaylist } from "../Playlist/addToPlaylist";
import { imageURL, videoExists } from "../Video/videoUtil";

export const HistoryCard = ({ id }) => {
  const {
    state: { videoList, likedVideos },
    dispatch,
  } = useDataContext();

  const { title, author, image } = videoList.find(
    (video) => video.id === id
  );

  return (
    <div className="card card-shadow">
      <Link className="no-line" to={`/${id}`} onClick={() => dispatch({type:"ADD_TO_HISTORY",payload:id})}>
      <img
        className="card-img"
        alt="video-still"
        src={imageURL(id)}
      />
      <div className="flex-container">
        <img className="avatar-sm" alt="author" src={image} />
        <b className="primaryBg-txt txt-title">{title}</b>
      </div>
      <small className="txt-small txt-grey">{author}</small>
      </Link>
      <small className="txt-grey">
        <i
          onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: id })}
          className={
            videoExists(likedVideos, id)
              ? "fas fa-thumbs-up primaryBg-txt"
              : "fas fa-thumbs-up"
          }
        ></i>
      <AddToPlaylist id={id}/>
      </small>
      <button type="button" onClick={() => dispatch({
                        type: "REMOVE_FROM_HISTORY",
                        payload: id 
                      })}
            className="btn btn-secondary btn-dismiss"><i className="fas fa-times"></i></button>
  
    </div>

  );
};

