import { useState } from "react";
import { useDataContext } from "../../Context/data-context";
import { videoExists } from "../Video/videoUtil";

export const AddToPlaylist = ({ id }) => {
  const {
    state: { playlist },
    dispatch,
  } = useDataContext();

  const [showModal, setShowModal] = useState(false);
  const [listName, setListName] = useState("");

  const createPlaylistHandler = event => {
      if(event.key === "Enter"){
        dispatch({type:"ADD_TO_NEW_PLAYLIST",payload:{id, listName}})
          setListName("");
      }
  }

  return (
    <>
      <i
        onClick={() => setShowModal((showModal) => !showModal)}
        className="btn fas fa-lg fa-plus"
      >
        {" "}
        Save{" "}
      </i>
      {showModal && (
        <div className="modal-container">
          <div className="card modal-content">
            <h3 className="modal-header">Playlists</h3>
            <hr />
            <ul className="list-checkbox">
              {playlist.map(({listId, name, videos }) => (
                <li key={name} className="secondary-txt">
                  <label>
                  <input
                    type="checkbox"
                    onChange={() =>
                      dispatch({
                        type: "TOGGLE_PLAYLIST",
                        payload: { listId, id },
                      })
                    }
                    checked={videoExists(videos, id)}
                  />{" "}
                  {name}
                  </label>
                </li>
              ))}
            </ul>
            <div className="txt-box">
              <input
              onKeyDown={createPlaylistHandler}
              onChange={(event)=> setListName(event.target.value)}
              value={listName}
                className="txt-input"
                type="text"
                placeholder="Create new playlist"
              />
              <span className="txt-icon" onClick={() => {dispatch({type:"ADD_TO_NEW_PLAYLIST",payload:{id, listName}});setListName("")}}>
                <i className="fas fa-lg fa-plus-circle"></i>
              </span>
            </div>
            <button
              onClick={() => setShowModal((showModal) => !showModal)}
              type="button"
              id="btn-close-modal"
              className="btn btn-secondary btn-dismiss"
            >
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
};
