import { useState } from "react";
import { EditNote } from "./EditNote";
import { Note } from "./Note";

export const NotesContainer = ({_id}) => {
    
    const [notes, setNotes] = useState([{
        _id:"1",
        title:"Note 1",
        description:"This is where i need you're help."
    },
    {
        _id:"2",
        title:"Note 2",
        description:"Focus on 2:35. Here, what Brandon is trying to explain is that we should all focus on our posture. Focus on 2:35. Here, what Brandon is trying to explain is that we should all focus on our posture. "
    }]);

    return(
        <div className="notes-container">
        <h3 className="primaryBg-txt">My Notes</h3>
        <p>{_id}</p>
        <EditNote setNotes={setNotes}/>
        {notes.map(note => (
            <Note key={note._id} note={note} setNotes={setNotes}/>
        ))}
        </div>
    )
}