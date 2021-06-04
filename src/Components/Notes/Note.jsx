import { useState } from "react";
import { EditNote } from "./EditNote";

export const Note = ({ note, setNotes }) => {
  const [editMode, setEditMode] = useState(false);

  return editMode ? (
    <EditNote setEditMode={setEditMode} setNotes={setNotes} note={note}/>
  ) : (
    <div className="note-container">
      <h3 className="primaryBg-txt">{note.title}</h3>
      <p className="txt-desc note-desc">{note.description}</p>
      <div className="note-icons">
        <i
          onClick={() => setEditMode(true)}
          className="fas fa-lg primaryBg-txt fa-edit"
        ></i>
        <i onClick={() => setNotes(notes => notes.filter(data => data._id !== note._id))}
        className="fas fa-lg secondary-txt fa-trash"></i>
      </div>
    </div>
  );
};