import { useReducer } from "react";

const initialNoteState = {
  _id: "",
  title: "",
  description: "",
};
const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ID":
      return { ...state, _id: payload };
    case "SET_TITLE":
      return { ...state, title: payload };
    case "SET_DESCRIPTION":
      return { ...state, description: payload };
    case "CLEAR_INPUT_FIELDS":
      return initialNoteState;
    default:
      return state;
  }
};

export const EditNote = ({
  note = initialNoteState,
  setEditMode,
  setNotes,
}) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, note);

  const cancelChanges = () => {
    if (setEditMode) {
      setEditMode(false);
    } else {
      noteDispatch({ type: "CLEAR_INPUT_FIELDS" });
    }
  };

  const updateNotes = () => {
      if(noteState._id){
          setNotes(notes => notes.map(note => note._id === noteState._id?{...noteState}:note));
          setEditMode(false);
      }
      else{
          noteDispatch({type:"SET_ID", payload:"3"});
          setNotes(notes => notes.concat(noteState));
          noteDispatch({type:"CLEAR_INPUT_FIELDS"});
      }
  }
  return (
    <div className="edit-container">
      <input
        className="txt-input txt-title"
        value={noteState.title}
        placeholder="Title"
        onChange={(event) =>
          noteDispatch({ type: "SET_TITLE", payload: event.target.value })
        }
      />
      <textarea
        className="txt-input txt-description"
        value={noteState.description}
        placeholder="Description"
        onChange={(event) =>
          noteDispatch({ type: "SET_DESCRIPTION", payload: event.target.value })
        }
      ></textarea>
      <div className="note-icons">
        <i onClick={updateNotes} className="fas fa-lg primaryBg-txt fa-check"></i>
        <i
          onClick={cancelChanges}
          className="fas fa-lg secondary-txt fa-times"
        ></i>
      </div>
    </div>
  );
};
