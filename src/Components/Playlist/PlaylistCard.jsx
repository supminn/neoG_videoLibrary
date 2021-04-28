import { Link } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../Context";
import { formatNumber, imageURL } from "../../Utils";
import { updateUserHistory } from "../../Utils/serverRequest";

export const PlaylistCard = ({ _id, listId }) => {
  const {
    state: { videoList },
    dispatch,
  } = useDataContext();
  const { userData, setShowLoader } = useAuthContext();

  const { vid, title, author, image, views } = videoList.find(
    (video) => video._id === _id
  );

  return (
    <div className="card card-shadow playlist-card">
      <Link
        className="no-line"
        to={`/${_id}`}
        onClick={() =>
          updateUserHistory(
            _id,
            userData._id,
            "ADD_TO_HISTORY",
            dispatch,
            setShowLoader
          )
        }
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
