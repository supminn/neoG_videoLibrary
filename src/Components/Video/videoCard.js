import { useDataContext } from "../../Context/data-context";
import { AddToPlaylist } from "../Playlist/addToPlaylist";
import { imageURL, videoExists } from "./videoUtil";

export const VideoCard = ({ id }) => {
  const {
    state: { videoList, likedVideos },
    dispatch,
  } = useDataContext();

  const { title, author, image, views } = videoList.find(
    (video) => video.id === id
  );

  return (
    <div className="card card-shadow">
      <img
        className="card-img"
        alt="video-still"
        src={imageURL(id)}
      />
      <div className="flex-container">
        <img className="avatar-sm" alt="author" src={image} />
        <b className="primaryBg-txt">{title}</b>
      </div>
      <small className="txt-small txt-grey">{author}</small>
      <small className="txt-small txt-grey">{views} views</small>
      <small className="txt-grey">
        <i
          onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: id })}
          className={
            videoExists(likedVideos, id)
              ? "fas fa-thumbs-up primaryBg-txt"
              : "fas fa-thumbs-up"
          }
        ></i>
      <AddToPlaylist id={id}/>
      </small>
    </div>
  );
};

/*
<i
          onClick={() => dispatch({ type: "TOGGLE_WATCHLATER", payload: id })}
          className={
            videoExists(watchLater, id)
              ? "fas fa-lg fa-clock primaryBg-txt"
              : "fas fa-lg fa-clock"
          }
        ></i> 

 <video controls>
        <source src={`https://www.youtube.com/watch?v=${id}`}></source>
      </video>
*/
