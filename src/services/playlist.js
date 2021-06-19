import axios from "axios";
import { API_URL } from "./apiDetails";

export const getUserPlaylist = async (dispatch, setShowLoader) => {
  try {
    setShowLoader(true);
    let {
      data: { playlist },
    } = await axios.get(`${API_URL}/playlist`);
    if (playlist) {
      playlist = playlist.map((list) => ({
        ...list,
        videos: list.videos.map((video) => video._id),
      }));
      dispatch({ type: "SET_PLAYLIST", payload: playlist });
    }
  } catch (error) {
    dispatch({
      type: "SHOW_TOAST",
      payload: "Unable to fetch user playlists.",
    });
    console.error(error);
  } finally {
    setShowLoader(false);
  }
};

export const createUserPlaylist = async (
  listName,
  videoId,
  dispatch
) => {
  try {
    if (listName) {
      dispatch({ type: "SHOW_TOAST", payload: "Creating Playlist..." });
      let {
        data: { playlist },
      } = await axios.post(`${API_URL}/playlist/`, {
        name: listName,
        _id: videoId,
      });
      if (playlist) {
        playlist.videos = playlist.videos.map((video) => video._id);
        dispatch({
          type: "ADD_TO_NEW_PLAYLIST",
          payload: playlist,
        });
      }
    }
  } catch (error) {
    dispatch({ type: "SHOW_TOAST", payload: "Failed to create new playlist." });
    console.error(error);
  } 
};

export const renamePlaylist = async (listId, listName, dispatch) => {
  try {
    dispatch({ type: "SHOW_TOAST", payload: "Renaming Playlist..." });
    const { data } = await axios.put(`${API_URL}/playlist/${listId}`, {
      name: listName,
    });
    if (data.success) {
      dispatch({ type: "RENAME_PLAYLIST", payload: { listId, listName } });
    }
  } catch (error) {
    dispatch({ type: "SHOW_TOAST", payload: "Failed to rename playlist." });
    console.error(error);
  }
};

export const updateUserPlaylist = async (listId, videoId, dispatch) => {
  try {
    dispatch({ type: "SHOW_TOAST", payload: "Updating Playlist..." });
    const { data } = await axios.post(`${API_URL}/playlist/${listId}`, {
      _id: videoId,
    });
    if (data.success) {
      dispatch({
        type: "TOGGLE_PLAYLIST",
        payload: { listId, _id: videoId },
      });
    }
  } catch (error) {
    dispatch({ type: "SHOW_TOAST", payload: "Failed to update playlist." });
    console.error(error);
  }
};

export const deletePlaylist = async (listId, dispatch) => {
  try {
    dispatch({ type: "SHOW_TOAST", payload: "Deleting Playlist..." });
    const { data } = await axios.delete(`${API_URL}/playlist/${listId}`);
    if (data.success) {
      dispatch({ type: "DELETE_PLAYLIST", payload: listId });
    }
  } catch (error) {
    dispatch({ type: "SHOW_TOAST", payload: "Failed to delete playlist." });
    console.error(error);
  }
};
