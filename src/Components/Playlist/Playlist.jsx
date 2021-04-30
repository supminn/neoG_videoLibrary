import { useEffect } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../Context";
import { PlaylistCard } from "./PlaylistCard";
import { PlaylistHeader } from "./PlaylistHeader";

export const Playlist = () => {
  const {
    state: { playlist }
  } = useDataContext();
  const { showLoader} = useAuthContext();

  useEffect(() => {
    document.title = "SupVision | Playlist";
},[]);


return showLoader ? (
  <div className="loader-container">
    <Loader type="Oval" color="#00BFFF" height={80} width={80} />
  </div>
) : (
    <>
      <h2 className="txt-header-2">
        My <span className="secondary-txt">Playlist</span>
      </h2>
      {playlist.map(({ _id:listId, name, videos }) => (
        <div key={listId} className="playlist-container">
          <PlaylistHeader listId={listId} name={name} />
          {videos.length>0 && <small className="primaryBg-txt">({videos.length} videos)</small>}
         <div className="playlist-card-container">
         {videos.map((_id) => (
            <PlaylistCard key={_id} _id={_id} listId={listId} />
          ))}
         </div>
          {videos.length === 0 && (
            <>
              <b className="txt-header-3">Empty Playlist! 🤨</b>
              <Link to="/" className="no-line">
                <button className="btn btn-primary">Add Videos</button>
              </Link>
            </>
          )}
        </div>
      ))}
      <a href="#" className="btn btn-secondary btn-fab"> <i className="fas fa-angle-double-up fa-lg"></i></a>
    </>
  );
};

