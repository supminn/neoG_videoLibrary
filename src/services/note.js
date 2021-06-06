import axios from "axios";
import { API_URL } from "./apiDetails";

export const getVideoNotes = async (videoId, dispatch, setShowLoader) => {
  try {
    setShowLoader(true);
    const {
      data: { notes },
    } = await axios.get(`${API_URL}/note/notes/${videoId}`);
    if (notes) {
      dispatch({ type: "SET_VIDEO_NOTES", payload: notes });
    }
  } catch (err) {
    console.error(err);
  } finally {
    setShowLoader(false);
  }
};

export const addVideoNote = async (videoId, noteData, dispatch) => {
  try {
    dispatch({ type: "SHOW_TOAST", payload: "Adding a new note..." });
    const {
      data: { note },
    } = await axios.post(`${API_URL}/note/notes/${videoId}`, {
      title: noteData.title,
      description: noteData.description,
    });
    if (note) {
      dispatch({ type: "ADD_NOTE", payload: note });
    }
  } catch (err) {
    dispatch({ type: "SHOW_TOAST", payload: "Failed to add new note." });
    console.error(err);
  }
};

export const updateVideoNote = async (videoId, noteData, dispatch) => {
  try {
    dispatch({ type: "SHOW_TOAST", payload: "Updating note..." });
    const {
      data: { note },
    } = await axios.post(`${API_URL}/note/${noteData._id}`, {
      title: noteData.title,
      description: noteData.description,
    });
    if (note) {
      dispatch({ type: "UPDATE_NOTE", payload: note });
    }
  } catch (err) {
    dispatch({ type: "SHOW_TOAST", payload: "Failed to update note." });
    console.error(err);
  }
};

export const deleteVideoNote = async (videoId, noteData, dispatch) => {
  try {
    dispatch({ type: "SHOW_TOAST", payload: "Deleting note..." });
    const {
      data: { note },
    } = await axios.put(`${API_URL}/note/${noteData._id}`);
    if (note) {
      dispatch({ type: "DELETE_NOTE", payload: note });
    }
  } catch (err) {
    dispatch({ type: "SHOW_TOAST", payload: "Failed to delete note." });
    console.error(err);
  }
};
