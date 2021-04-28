import { Link } from "react-router-dom";
import { useDataContext } from "../../Context";
import { AddToPlaylist } from "../Playlist/AddToPlaylist";
import { imageURL, videoExists } from "../../Utils";

export const HistoryCard = ({ _id }) => {
  const {
    state: { videoList, likedVideos },
    dispatch,
  } = useDataContext();

  const { vid, title, author, image } = videoList.find(
    (video) => video._id === _id
  );

  return (
    <div className="card card-shadow">
      <Link
        className="no-line"
        to={`/${_id}`}
        onClick={() => dispatch({ type: "ADD_TO_HISTORY", payload: _id })}
      >
        <img className="card-img" alt="video-still" src={imageURL(vid)} />
        <div className="flex-container">
          <img className="avatar-sm" alt="author" src={image} />
          <b className="primaryBg-txt txt-title">{title}</b>
        </div>
        <small className="txt-small txt-grey">{author}</small>
      </Link>
      <small className="txt-grey">
        <i
          onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: _id })}
          className={
            videoExists(likedVideos, _id)
              ? "fas fa-thumbs-up primaryBg-txt"
              : "fas fa-thumbs-up"
          }
        ></i>
        <AddToPlaylist _id={_id} />
      </small>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "REMOVE_FROM_HISTORY",
            payload: _id,
          })
        }
        className="btn btn-secondary btn-dismiss"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
