import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context";
import { useDataContext } from "../../Context/data-context";
import { AddToPlaylist } from "../Playlist/AddToPlaylist";
import { imageURL, videoExists } from "./videoUtil";

export const VideoCard = ({ _id }) => {
  const {
    state: { videoList, likedVideos },
    dispatch,
  } = useDataContext();
  const {login} = useAuthContext();
  const navigate = useNavigate();

  const { vid, title, author, image } = videoList.find(
    (video) => video._id === _id
  );

  return (
    <div className="card card-shadow">
      <Link className="no-line" to={`/${_id}`} onClick={() => dispatch({type:"ADD_TO_HISTORY",payload:_id})}>
      <img
        className="card-img"
        alt="video-still"
        src={imageURL(vid)}
      />
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
          onClick={() => login?dispatch({ type: "TOGGLE_LIKE", payload: _id }):navigate("/login")}
          className={
            videoExists(likedVideos, _id)
              ? "fas fa-thumbs-up primaryBg-txt"
              : "fas fa-thumbs-up"
          }
        ></i>
      <AddToPlaylist _id={_id}/>
      </small>
    </div>

  );
};

/*

*/