import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
import { useDataContext } from "../../Context/data-context";
import { AddToPlaylist } from "../Playlist/addToPlaylist";
import {
  formatDate,
  formatNumber,
  videoExists,
  videoURL,
} from "../Video/videoUtil";

export const VideoPage = () => {
  const { videoId } = useParams();
  const {
    state: { videoList, likedVideos },
    dispatch,
  } = useDataContext();

  const { title, author, image, views, date, subscribers, description } = videoList.find(
    (video) => video.id === videoId
  );

  useEffect(() => {
    document.title = title;
},[]);


  return (
    <>
      <ReactPlayer
        className="video-container"
        url={videoURL(videoId)}
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
            onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: videoId })}
            className={
              videoExists(likedVideos, videoId)
                ? "fas fa-thumbs-up primaryBg-txt"
                : "fas fa-thumbs-up"
            }
          ></i>
          <AddToPlaylist id={videoId} />
        </span>
      </div>
      <p className="video-description">
          {description}
      </p>
    </>
  );
};