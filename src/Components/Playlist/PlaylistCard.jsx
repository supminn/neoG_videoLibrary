import { Link } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../Context";
import { formatNumber, imageURL } from "../../Utils/arrayOperations";
import { updateUserHistory, updateUserPlaylist } from "../../services";

export const PlaylistCard = ({ _id, listId }) => {
  const {
    state: { videoList },
    dispatch,
  } = useDataContext();
  const { setShowLoader } = useAuthContext();

  const videoDetails = videoList.find(
    (video) => video._id === _id
  );

  const { vid, title, author, image, views } = videoDetails;

  return (
    <div className="card card-shadow playlist-card">
      <Link
        className="no-line"
        to={`/${_id}`}
        state={{videoDetails}}
        onClick={() =>
          updateUserHistory(_id, "ADD_TO_HISTORY", dispatch, setShowLoader)
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
        onClick={() => updateUserPlaylist(listId, _id, dispatch, setShowLoader)}
        className="btn btn-secondary btn-dismiss"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
