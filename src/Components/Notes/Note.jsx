import { useState } from "react";
import { useDataContext } from "../../Context";
import { deleteVideoNote } from "../../services";
import { EditNote } from "./EditNote";
import { formatDate } from "../../Utils/arrayOperations";

export const Note = ({ note, videoId }) => {
  const [editMode, setEditMode] = useState(false);
  const { dispatch } = useDataContext();

  return editMode ? (
    <EditNote setEditMode={setEditMode} note={note} />
  ) : (
    <div className="note-container">
      <h3 className="primaryBg-txt">{note.title}</h3>
      <p className="txt-desc note-desc">{note.description}</p>
      <small><i className="far fa-clock"></i>{" "}{formatDate(note.updatedAt)}</small>
      <div className="note-icons">
        <i
          onClick={() => setEditMode(true)}
          className="fas fa-lg primaryBg-txt fa-edit"
        ></i>
        <i
          onClick={() => deleteVideoNote(videoId, note, dispatch)}
          className="fas fa-lg secondary-txt fa-trash"
        ></i>
      </div>
    </div>
  );
};
