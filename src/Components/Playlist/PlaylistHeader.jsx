import { useRef, useState } from "react";
import { useAuthContext, useDataContext } from "../../Context";
import { deletePlaylist, renamePlaylist } from "../../services/playlist";

export const PlaylistHeader = ({ name, listId }) => {
  const [listName, setListName] = useState(name);
  const [editable, setEditable] = useState(false);

  const {
    state: { playlist },
    dispatch,
  } = useDataContext();
  const { setShowLoader } = useAuthContext();

  const updateName = async () => {
    await renamePlaylist(listId, listName, dispatch, setShowLoader);
    setEditable(false);
  };

  const checkKeyDown = (e) => {
    if (e.key === "Enter") {
      updateName();
    }
  };
  const deleteList = async () => {
    await deletePlaylist(listId, dispatch, setShowLoader);
  };

  const discardChanges = () => {
    setListName(name);
    setEditable(false);
  };

  const inputRef = useRef(null);

  const editName = () => {
    setEditable(true);
    inputRef.current.focus();
  };

  return (
    <div className="playlist-icon-container">
      {listId !== playlist[0]._id ? (
        <input
          type="text"
          ref={inputRef}
          value={listName}
          onKeyDown={checkKeyDown}
          onChange={(e) => setListName(e.target.value)}
          onFocus={() => setEditable(true)}
          className={editable ? "playlist-edited" : "playlist-name"}
        />
      ) : (
        <>
          <h3 className="playlist-name watch-later">{name}</h3>
        </>
      )}
      {listId !== playlist[0]._id && (
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
