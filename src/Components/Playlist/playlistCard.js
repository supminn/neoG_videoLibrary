import { Link } from "react-router-dom";
import { useDataContext } from "../../Context/data-context";
import { formatNumber, imageURL } from "../Video/videoUtil";

export const PlaylistCard = ({ id,listId }) => {
  const {
    state: { videoList }, dispatch
  } = useDataContext();

  const { title, author, image, views } = videoList.find(
    (video) => video.id === id
  );

  return (
    <div className="card card-shadow">
        <Link className="no-line" to={`/${id}`}>
      <img
        className="card-img"
        alt="video-still"
        src={imageURL(id)}
      />
      <div className="flex-container">
        <img className="avatar-sm" alt="author" src={image} />
        <b className="primaryBg-txt">{title}</b>
      </div>
      <small className="txt-small txt-grey">{author} {" "}
      <i className="fas fa-circle fa-xs"></i>{" "}
       {formatNumber(views)} views</small>
       </Link>
       <button type="button" onClick={() => dispatch({
                        type: "TOGGLE_PLAYLIST",
                        payload: { listId, id },
                      })}
            className="btn btn-secondary btn-dismiss"><i className="fas fa-times"></i></button>
    </div>
  );
};

