import { Link, useNavigate } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../Context";
import { AddToPlaylist } from "../Playlist/AddToPlaylist";
import { imageURL, updateLikedVideo, videoExists } from "../../Utils";
import { updateUserHistory } from "../../Utils/serverRequest";

export const HistoryCard = ({ _id }) => {
  const {
    state: { videoList, likedVideos },
    dispatch,
  } = useDataContext();
  const { login, userData, setShowLoader } = useAuthContext();
  const navigate = useNavigate();
  const { vid, title, author, image } = videoList.find(
    (video) => video._id === _id
  );

  return (
    <div className="card card-shadow">
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
        <img className="card-img" alt="video-still" src={imageURL(vid)} />
        <div className="flex-container">
          <img className="avatar-sm" alt="author" src={image} />
          <b className="primaryBg-txt txt-title">{title}</b>
        </div>
        <small className="txt-small txt-grey">{author}</small>
      </Link>
      <small className="txt-grey">
        <i
          onClick={() =>
            login
              ? updateLikedVideo(_id, userData._id, dispatch, setShowLoader)
              : navigate("/login")
          }
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
          updateUserHistory(
            _id,
            userData._id,
            "REMOVE_FROM_HISTORY",
            dispatch,
            setShowLoader
          )
        }
        className="btn btn-secondary btn-dismiss"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
