/* eslint-disable default-case */
import axios from "axios";

export const getVideoList = async (dispatch, setShowLoader) => {
  try {
    setShowLoader(true);
    const {
      data: { videos },
    } = await axios.get("https://api-supminn.herokuapp.com/videos");
    dispatch({ type: "SET_VIDEOLIST", payload: videos });
    setShowLoader(false);
  } catch (err) {
    console.error(err);
  }
};

export const getLikedVideos = async (userId, dispatch, setShowLoader) => {
  setShowLoader(true);
  const {
    data: { likedVideoItems },
  } = await axios.get(
    `https://api-supminn.herokuapp.com/liked-video/${userId}`
  );
  const videoList = likedVideoItems.map((item) => item._id);
  dispatch({ type: "SET_LIKEDVIDEOS", payload: videoList });
  setShowLoader(false);
};

export const getUserHistory = async (userId, dispatch, setShowLoader) => {
  setShowLoader(true);
  const {
    data: { historyItems },
  } = await axios.get(`https://api-supminn.herokuapp.com/history/${userId}`);
  const videoList = historyItems.map((item) => item._id);
  dispatch({ type: "SET_HISTORY", payload: videoList });
  setShowLoader(false);
};

export const getUserPlaylist = async (userId, dispatch, setShowLoader) => {
  setShowLoader(true);
  let {
    data: { playlist },
  } = await axios.get(`https://api-supminn.herokuapp.com/playlist/${userId}`);
  playlist = playlist.map((list) => ({
    ...list,
    videos: list.videos.map((video) => video._id),
  }));
  dispatch({ type: "SET_PLAYLIST", payload: playlist });
  setShowLoader(false);
};

export const updateLikedVideo = async (_id, userId, dispatch) => {
  dispatch({ type: "SHOW_TOAST", payload: "Updating liked videos..." });
  const { status } = await axios.post(
    `https://api-supminn.herokuapp.com/liked-video/${userId}`,
    {
      _id,
    }
  );
  dispatch({
    type: "TOGGLE_LIKE",
    payload: _id,
  });
};

export const updateUserHistory = async (_id, userId, action, dispatch) => {
  switch (action) {
    case "ADD_TO_HISTORY": {
      const { status } = await axios.post(
        `https://api-supminn.herokuapp.com/history/${userId}`,
        {
          _id,
        }
      );
      dispatch({
        type: action,
        payload: _id,
      });
      break;
    }
    case "REMOVE_FROM_HISTORY": {
      const { status } = await axios.put(
        `https://api-supminn.herokuapp.com/history/${userId}`,
        {
          _id,
        }
      );
      dispatch({
        type: action,
        payload: _id,
      });
      break;
    }
    case "CLEAR_HISTORY": {
      const { status } = await axios.delete(
        `https://api-supminn.herokuapp.com/history/${userId}`
      );
      dispatch({
        type: action,
      });
      break;
    }
  }
};

export const renamePlaylist = async (userId, listId, listName, dispatch) => {
  dispatch({ type: "SHOW_TOAST", payload: "Renaming Playlist..." });
  const { status } = await axios.put(
    `https://api-supminn.herokuapp.com/playlist/${userId}`,
    {
      _id: listId,
      name: listName,
    }
  );
  dispatch({ type: "RENAME_PLAYLIST", payload: { listId, listName } });
};

export const updateUserPlaylist = async (userId, listId, videoId, dispatch) => {
  dispatch({ type: "SHOW_TOAST", payload: "Updating Playlist..." });
  const { status } = await axios.post(
    `https://api-supminn.herokuapp.com/playlist/${userId}/list/${listId}`,
    {
      _id: videoId,
    }
  );
  dispatch({
    type: "TOGGLE_PLAYLIST",
    payload: { listId, _id: videoId },
  });
};

export const deletePlaylist = async (userId, listId, dispatch) => {
  dispatch({ type: "SHOW_TOAST", payload: "Updating Playlist..." });
  const { status } = await axios.put(
    `https://api-supminn.herokuapp.com/playlist/${userId}/list/${listId}`
  );
  dispatch({ type: "DELETE_PLAYLIST", payload: listId });
};

export const createUserPlaylist = async (
  userId,
  listName,
  videoId,
  dispatch,
  setListName
) => {
  if (listName) {
    dispatch({ type: "SHOW_TOAST", payload: "Creating Playlist..." });
    let {
      data: { playlist },
    } = await axios.post(
      `https://api-supminn.herokuapp.com/playlist/${userId}`,
      {
        name: listName,
        _id: videoId,
      }
    );
    playlist.videos = playlist.videos.map((video) => video._id);
    dispatch({
      type: "ADD_TO_NEW_PLAYLIST",
      payload: playlist,
    });
    setListName("");
  }
};
