import { Link } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../Context";
import { AddToPlaylist } from "../Playlist/AddToPlaylist";
import { imageURL } from "../../Utils/arrayOperations";
import { updateUserHistory, updateLikedVideo } from "../../services";

export const LikedVideoCard = ({ _id }) => {
  const {
    state: { videoList },
    dispatch,
  } = useDataContext();
  const { setShowLoader } = useAuthContext();

  const { vid, title, author, image } = videoList.find(
    (video) => video._id === _id
  );

  return (
    <div className="card card-shadow">
      <Link
        className="no-line"
        to={`/${_id}`}
        onClick={() =>
          updateUserHistory(_id, "ADD_TO_HISTORY", dispatch, setShowLoader)
        }
      >
        <img className="card-img" alt="video-still" src={imageURL(vid)} />
        <div className="flex-container">
          <img className="avatar-sm" alt="author" src={image} />
          <b className="primaryBg-txt txt-title">{title}</b>
        </div>
        <small className="txt-small txt-grey">{author}</small>
      </Link>
      <small className="txt-grey">
        <AddToPlaylist _id={_id} />
      </small>
      <button
        type="button"
        onClick={() => updateLikedVideo(_id, dispatch, setShowLoader)}
        className="btn btn-secondary btn-dismiss"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
