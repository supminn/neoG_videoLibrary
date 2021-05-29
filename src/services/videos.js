import axios from "axios";
import { API_URL } from "./apiDetails";

export const getVideoList = async (dispatch, setShowLoader) => {
  try {
    setShowLoader(true);
    const {
      data: { videos },
    } = await axios.get(`${API_URL}/videos`);
    if(videos){
      dispatch({ type: "SET_VIDEOLIST", payload: videos });
    }
  } catch (err) {
    console.error(err);
  } finally {
    setShowLoader(false);
  }
};
