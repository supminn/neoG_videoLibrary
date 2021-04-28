import { Link } from "react-router-dom";
import { useDataContext } from "../../Context/data-context";
import { formatNumber, imageURL } from "../Video/videoUtil";

export const PlaylistCard = ({ _id, listId }) => {
  const {
    state: { videoList },
    dispatch,
  } = useDataContext();

  const { vid, title, author, image, views } = videoList.find(
    (video) => video._id === _id
  );

  return (
    <div className="card card-shadow playlist-card">
      <Link
        className="no-line"
        to={`/${_id}`}
        onClick={() => dispatch({ type: "ADD_TO_HISTORY", payload: _id })}
      >
        <img
          className="card-img playlist-card-img"
          alt="video-still"
          src={imageURL(vid)}
        />
        <div className="flex-container">
          <img className="avatar-sm" alt="author" src={image} />
          <b className="primaryBg-txt txt-title">{title}</b>
        </div>
        <small className="txt-small txt-grey">
          {author} <i className="fas fa-circle fa-xs"></i> {formatNumber(views)}{" "}
          views
        </small>
      </Link>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "TOGGLE_PLAYLIST",
            payload: { listId, _id },
          })
        }
        className="btn btn-secondary btn-dismiss"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
