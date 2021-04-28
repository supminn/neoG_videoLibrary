import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../Context/data-context";
import { PlaylistCard } from "./PlaylistCard";

export const Playlist = () => {
  const {
    state: { playlist },
  } = useDataContext();

  useEffect(() => {
    document.title = "SupVision | Playlist";
},[]);


  return (
    <>
      <h2 className="txt-header-2">
        My <span className="secondary-txt">Playlist</span>
      </h2>
      {playlist.map(({ listId, name, videos }) => (
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

const PlaylistHeader = ({ name, listId }) => {
  const [listName, setListName] = useState(name);
  const [editable, setEditable] = useState(false);

  const { dispatch } = useDataContext();

  const updateName = () => {
    dispatch({ type: "RENAME_PLAYLIST", payload: { listId, listName } });
    setEditable(false);
  };

  const checkKeyDown = e =>{
    if(e.key === "Enter"){
      updateName();
    }
  }
  const deleteList = () => {
    dispatch({ type: "DELETE_PLAYLIST", payload: listId });
  };

  const discardChanges = () => {
    setListName(name);
    setEditable(false);
  };

  const inputRef = useRef(null);

  const editName = () => {
    setEditable(true);
    inputRef.current.focus();
  }


  return (
    <div className="playlist-icon-container">
      {listId !== 1?<input
        type="text"
        ref={inputRef}
        value={listName}
        onKeyDown={checkKeyDown}
        onChange={(e) => setListName(e.target.value)}
        onFocus={() => setEditable(true)}
        className={editable ? "playlist-edited" : "playlist-name"}
      />:(<>
      <h3 className="playlist-name watch-later">{name}</h3>
      </>)}
      {listId !== 1 && (
        <section className="playlist-edit-icons">
          <i
            onClick={() => (editable ? updateName() : editName())}
            className={`primaryBg-txt fas fa-lg ${
              editable ? "fa-check-circle" : "fa-edit"
            }`}
          >
            <span className="badge-icon hidden-vis"></span>
          </i>
          <i
            onClick={() => (editable ? discardChanges() : deleteList())}
            className={`secondary-txt fas fa-lg ${
              editable ? "fa-times-circle" : "fa-trash"
            }`}
          >
            <span className="badge-icon hidden-vis"></span>
          </i>
        </section>
      )}
    </div>
  );
};
