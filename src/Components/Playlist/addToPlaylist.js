import { useState } from "react";
import { useDataContext } from "../../Context/data-context";
import { videoExists } from "../Video/videoUtil";

export const AddToPlaylist = ({ id }) => {
  const {
    state: { playlist },
    dispatch,
  } = useDataContext();

  const [showModal, setShowModal] = useState(false);

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
            <section className="list-checbox">
              {playlist.map(({ name, videos }) => (
                <label key={name} className="secondary-txt">
                  <input
                    type="checkbox"
                    onChange={() =>
                      dispatch({
                        type: "TOGGLE_PLAYLIST",
                        payload: { name, id },
                      })
                    }
                    checked={videoExists(videos, id)}
                  />{" "}
                  {name}
                </label>
              ))}
            </section>
            <div className="txt-box">
              <input
                className="txt-input"
                type="text"
                placeholder="New playlist"
              />
              <span className="txt-icon">
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
