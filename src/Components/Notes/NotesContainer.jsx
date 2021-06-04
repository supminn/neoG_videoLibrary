import { useAuthContext, useDataContext } from "../../Context";
import { EditNote } from "./EditNote";
import { Note } from "./Note";
import noteImg from "../../images/notes.svg";

export const NotesContainer = ({_id}) => {
  const {
    state: { notes },
  } = useDataContext();

  const { login } = useAuthContext();

  return login ? (
    <div className="notes-container">
      <h3 className="primaryBg-txt">My Notes</h3>
      <EditNote videoId={_id} />
      {notes.map((note) => (
        <Note key={note._id} note={note} videoId={_id}/>
      ))}
    </div>
  ) : (
    <div className="notes-container">
      <h3 className="primaryBg-txt">
        Login to add <span className="secondary-txt">personal notes</span>!
      </h3>
      <img className="img-svg" src={noteImg} alt="notes" />
    </div>
  );
};
