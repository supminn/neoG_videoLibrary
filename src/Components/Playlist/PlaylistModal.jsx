import { useState } from "react";
import { videoExists } from "../../Utils";
import { useDataContext } from "../../Context";

export const PlaylistModal = ({ _id, setShowModal }) => {
  const {
    state: { playlist },
    dispatch,
  } = useDataContext();

  const [listName, setListName] = useState("");

  const createPlaylist = (event) => {
    if (event.key === "Enter") {
      dispatch({ type: "ADD_TO_NEW_PLAYLIST", payload: { _id, listName } });
      setListName("");
    }
  };

  return (
    <div className="modal-container">
      <div className="card modal-content">
        <h3 className="modal-header">Playlists</h3>
        <hr />
        <ul className="list-checkbox">
          {playlist.map(({ listId, name, videos }) => (
            <li key={name} className="secondary-txt">
              <label>
                <input
                  type="checkbox"
                  onChange={() =>
                    dispatch({
                      type: "TOGGLE_PLAYLIST",
                      payload: { listId, _id },
                    })
                  }
                  checked={videoExists(videos, _id)}
                />{" "}
                {name}
              </label>
            </li>
          ))}
        </ul>
        <div className="txt-box">
          <input
            onKeyDown={createPlaylist}
            onChange={(event) => setListName(event.target.value)}
            value={listName}
            className="txt-input"
            type="text"
            placeholder="Create new playlist"
          />
          <span
            className="txt-icon"
            onClick={() => {
              dispatch({
                type: "ADD_TO_NEW_PLAYLIST",
                payload: { _id, listName },
              });
              setListName("");
            }}
          >
            <i className="fas fa-lg fa-plus-circle"></i>
          </span>
        </div>
        <button
          onClick={() => setShowModal((showModal) => !showModal)}
          type="button"
          vid="btn-close-modal"
          className="btn btn-secondary btn-dismiss"
        >
          x
        </button>
      </div>
    </div>
  );
};
