import axios from "axios";

export const updateLikedVideo = async (
    _id,
    userId,
    dispatch,
    setShowLoader
  ) => {
    setShowLoader(true);
    dispatch({ type: "SHOW_TOAST", payload: "Updating liked videos..." });
    console.log("call to server");
    const { status } = await axios.post(
        `http://localhost:5000/liked-video/${userId}`,
    //   `https://api-supminn.herokuapp.com/liked-video/${userId}`,
      {
        _id
      }
    );
    console.log("Updated on server",status);
      dispatch({
        type: "TOGGLE_LIKE",
        payload: _id,
      });
    setShowLoader(false);
  };
  