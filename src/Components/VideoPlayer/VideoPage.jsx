import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router";
import { useAuthContext, useDataContext } from "../../Context";
import { AddToPlaylist } from "../Playlist/AddToPlaylist";
import {
  formatDate,
  formatNumber,
  updateLikedVideo,
  videoExists,
  videoURL,
} from "../../Utils";

export const VideoPage = () => {
  const { videoId } = useParams();
  const {
    state: { videoList, likedVideos },
    dispatch,
  } = useDataContext();
  const {login, userData, setShowLoader} = useAuthContext();
  const navigate = useNavigate();

  const { vid, title, author, image, views, date, subscribers, description } = videoList.find(
    (video) => video._id === videoId
  );

  useEffect(() => {
    document.title = title;
},[title]);


  return (
    <>
      <ReactPlayer
        className="video-container"
        url={videoURL(vid)}
        playing={true} controls
        volume={1}
      />
      <h3 className="primaryBg-txt">{title}</h3>
      <p className="txt-small primaryBg-txt">
        {formatNumber(views)} views <i className="far fa-circle fa-xs"></i>{" "}
        {formatDate(date)}
      </p>
      <div className="author-container">
        <img className="author-dp" src={image} alt="author" />
        <div className="txt-desc">
          <h4>{author}</h4>
          <small>{formatNumber(subscribers)} subscribers</small>
        </div>
        <span className="txt-grey">
          <i
            onClick={() => login?updateLikedVideo(videoId, userData._id, dispatch,setShowLoader):navigate("/login")}
            className={
              videoExists(likedVideos, videoId)
                ? "fas fa-thumbs-up primaryBg-txt"
                : "fas fa-thumbs-up"
            }
          ></i>
          <AddToPlaylist _id={videoId} />
        </span>
      </div>
      <p className="video-description">
          {description}
      </p>
    </>
  );
};
