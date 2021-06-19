import axios from "axios";
import { API_URL } from "./apiDetails";

export const getLikedVideos = async (dispatch, setShowLoader) => {
  try {
    setShowLoader(true);
    const {
      data: { likedVideoItems },
    } = await axios.get(`${API_URL}/liked-video/`);
    const videoList = likedVideoItems.map((item) => item._id);
    dispatch({ type: "SET_LIKEDVIDEOS", payload: videoList });
  } catch (error) {
    console.error(error);
  } finally {
    setShowLoader(false);
  }
};

export const updateLikedVideo = async (_id, dispatch) => {
  try {
    dispatch({ type: "SHOW_TOAST", payload: "Updating liked videos..." });
    const { data } = await axios.post(`${API_URL}/liked-video/`, {
      _id,
    });
    if (data.success) {
      dispatch({
        type: "TOGGLE_LIKE",
        payload: _id,
      });
    }
  } catch (error) {
    dispatch({
      type: "SHOW_TOAST",
      payload: "Failed to update liked video list",
    });
    console.error(error);
  }
};
