import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context";
import { useDataContext } from "../../Context";
import { AddToPlaylist } from "../Playlist/AddToPlaylist";
import { imageURL, videoExists } from "../../Utils/arrayOperations";
import { updateUserHistory, updateLikedVideo } from "../../services";

export const VideoCard = ({ _id }) => {
  const {
    state: { videoList, likedVideos },
    dispatch,
  } = useDataContext();
  const { login, setShowLoader } = useAuthContext();
  const navigate = useNavigate();

  const videoDetails = videoList.find(
    (video) => video._id === _id
  );
  const { vid, title, author, image } = videoDetails;

  return (
    <div className="card card-shadow">
      <Link
        className="no-line"
        to={`/${_id}`}
        state={{videoDetails}}
        onClick={() =>
          login
            ? updateUserHistory(_id, "ADD_TO_HISTORY", dispatch, setShowLoader)
            : ""
        }
      >
        <img className="card-img" alt="video-still" src={imageURL(vid)} />
        <div className="flex-container">
          <img className="avatar-sm" alt="author" src={image} />
          <div>
            <b className="primaryBg-txt txt-title">{title}</b>
          </div>
        </div>
        <small className="txt-small txt-grey">{author}</small>
      </Link>
      <small className="txt-grey">
        <i
          onClick={() =>
            login
              ? updateLikedVideo(_id, dispatch, setShowLoader)
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
    </div>
  );
};

/*

*/
