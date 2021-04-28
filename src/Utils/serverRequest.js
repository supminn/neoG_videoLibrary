/* eslint-disable default-case */
import axios from "axios";

export const getLikedVideos = async (userId, dispatch, setShowLoader) => {
  setShowLoader(true);
  const {
    data: { likedVideoItems },
  } = await axios.get(`https://api-supminn.herokuapp.com/liked-video/${userId}`);
  const videoList = likedVideoItems.map((item) => item._id);
  dispatch({ type: "SET_LIKEDVIDEOS", payload: videoList });
  setShowLoader(false);
};

export const updateLikedVideo = async (
  _id,
  userId,
  dispatch,
  setShowLoader
) => {
  setShowLoader(true);
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

export const updateUserHistory = async (
  _id,
  userId,
  action,
  dispatch,
  setShowLoader
) => {
  setShowLoader(true);
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
  setShowLoader(false);
};
