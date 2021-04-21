import { useEffect, useState } from "react";
import { useDataContext } from "../../Context/data-context";
import { videoExists } from "../Video/videoUtil";

export const AddToPlaylist = ({ vid }) => {
  const {
    state: { playlist },
    dispatch,
  } = useDataContext();

  const [showModal, setShowModal] = useState(false);
  const [listName, setListName] = useState("");

  useEffect(() => {
    const modal = document.querySelector(".modal-container");
    window.onclick = event => {
      if (event.target === modal) {
          setShowModal(false);
      }
  }
  },[showModal]);

  const createPlaylist = (event) => {
    if (event.key === "Enter") {
      dispatch({ type: "ADD_TO_NEW_PLAYLIST", payload: { vid, listName } });
      setListName("");
    }
  };

  const checkInPlaylist = (vid) =>
    playlist.some((item) => item.videos.some((videoId) => videoId === vid));

  return (
    <>
      {checkInPlaylist(vid) ? (
        <i
          onClick={() => setShowModal((showModal) => !showModal)}
          className="btn fas fa-lg fa-check primaryBg-txt"
        >
          {" "}
          Saved{" "}
        </i>
      ) : (
        <i
          onClick={() => setShowModal((showModal) => !showModal)}
          className="btn fas fa-lg fa-plus"
        >
          {" "}
          Save{" "}
        </i>
      )}
      {showModal && (
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
                          payload: { listId, vid },
                        })
                      }
                      checked={videoExists(videos, vid)}
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
                    payload: { vid, listName },
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
      )}
    </>
  );
};
