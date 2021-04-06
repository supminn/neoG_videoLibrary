import { useDataContext } from "../../Context/data-context";

export const VideoCard = ({ id }) => {
  const {
    state: { videoList, likedVideos, watchLater },
    dispatch,
  } = useDataContext();

  const { title, author, image, views }= videoList.find(
    (video) => video.id === id
  );

  const videoExists = (list, id) => list.some((val) => val === id);

  return (
    <div className="card card-shadow">
      <img
        className="card-img"
        alt="video-still"
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
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
              ? "fas fa-lg fa-thumbs-up primaryBg-txt"
              : "fas fa-lg fa-thumbs-up"
          }
        ></i>
        <span className="badge-icon hidden-vis"></span>
        <i
          onClick={() => dispatch({ type: "TOGGLE_WATCHLATER", payload: id })}
          className={
            videoExists(watchLater, id)
              ? "fas fa-lg fa-clock primaryBg-txt"
              : "fas fa-lg fa-clock"
          }
        ></i>
      </small>
    </div>
  );
};

/*
 <video controls>
        <source src={`https://www.youtube.com/watch?v=${id}`}></source>
      </video>
*/
