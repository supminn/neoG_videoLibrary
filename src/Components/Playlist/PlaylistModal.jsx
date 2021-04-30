import { useState } from "react";
import { videoExists } from "../../Utils";
import { useAuthContext, useDataContext } from "../../Context";
import { createUserPlaylist, updateUserPlaylist } from "../../Utils/serverRequest";

export const PlaylistModal = ({ _id, setShowModal }) => {
  const {
    state: { playlist },
    dispatch,
  } = useDataContext();

  const [listName, setListName] = useState("");

  const { userData, setShowLoader } = useAuthContext();

  const createPlaylist = async (event) => {
    if (event.key === "Enter") {
      await createUserPlaylist(
        userData._id,
        listName,
        _id,
        dispatch,
        setShowLoader,
        setListName
      );
    }
  };

  return (
    <div className="modal-container">
      <div className="card modal-content">
        <h3 className="modal-header">Playlists</h3>
        <hr />
        <ul className="list-checkbox">
          {playlist.map(({ _id: listId, name, videos }) => (
            <li key={listId} className="secondary-txt">
              <label>
                <input
                  type="checkbox"
                  onChange={() =>
                    updateUserPlaylist(
                      userData._id,
                      listId,
                      _id,
                      dispatch,
                      setShowLoader
                    )
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
            onClick={() => createUserPlaylist(
              userData._id,
              listName,
              _id,
              dispatch,
              setShowLoader,
              setListName
            )}
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
