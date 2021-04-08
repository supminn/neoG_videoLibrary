import { useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../Context/data-context";
import { VideoCard } from "../Video/videoCard";

export const Playlist = () => {
  const {
    state: { playlist },
  } = useDataContext();
  return (
    <>
      <h2 className="txt-header-2">
        My <span className="secondary-txt">Playlist</span>
      </h2>
      {playlist.map(({ listId, name, videos }) => (
        <div key={listId} className="playlist-container">
          <PlaylistHeader listId={listId} name={name} />
          {videos.map((id) => (
            <VideoCard key={id} id={id} />
          ))}
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
    </>
  );
};

const PlaylistHeader = ({ name, listId }) => {
  const [listName, setListName] = useState(name);
  const [editable, setEditable] = useState(false);

  const {dispatch} = useDataContext();

  const updateName = () => {
    dispatch({type:"RENAME_PLAYLIST",payload:{listId, listName}})
    setEditable(false);
  }
  
  const deleteList = () => {
    dispatch({type:"DELETE_PLAYLIST",payload:listId});
  }

  const discardChanges = () => {
    setListName(name);
    setEditable(false);
  }

  return (
    <div className="playlist-icon-container">
      <input
        type="text"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        onFocus={() => setEditable(true)}
        className={editable ? "playlist-edited" : "playlist-name"}
      />
      <i onClick={() => editable?updateName():setEditable(true)}
        className={`primaryBg-txt fas fa-lg ${
          editable ? "fa-check-circle" : "fa-edit"
        }`}
      >
        <span className="badge-icon hidden-vis"></span>
      </i>
      <i onClick={()=>editable?discardChanges():deleteList()}
        className={`secondary-txt fas fa-lg ${
          editable ? "fa-times-circle" : "fa-trash"
        }`}
      >
        <span className="badge-icon hidden-vis"></span>
      </i>
    </div>
  );
};
