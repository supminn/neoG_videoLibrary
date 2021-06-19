/* eslint-disable default-case */
import axios from "axios";
import { API_URL } from "./apiDetails";

export const getUserHistory = async (dispatch, setShowLoader) => {
  try {
    setShowLoader(true);
    const {
      data: { historyItems },
    } = await axios.get(`${API_URL}/history`);
    if (historyItems) {
      const videoList = historyItems.map((item) => item._id);
      dispatch({ type: "SET_HISTORY", payload: videoList });
    }
  } catch (err) {
    console.error(err);
  } finally {
    setShowLoader(false);
  }
};

export const updateUserHistory = async (_id, action, dispatch) => {
  try {
    let method;
    switch (action) {
      case "ADD_TO_HISTORY":
        method = "post";
        break;
      case "REMOVE_FROM_HISTORY":
        method = "put";
        break;
      case "CLEAR_HISTORY":
        method = "delete";
        break;
    }
    const {data} = await axios({ method,
      url: `${API_URL}/history/`,
      data: { _id },
    });
    if (data.success) {
      dispatch({ type: action, payload: _id });
    }
  } catch (error) {
    console.error(error);
  }
};

/*
  switch (action) {
    case "ADD_TO_HISTORY": {
      const { status } = await axios.post(`${API_URL}/history/${userId}`, {
        _id,
      });
      dispatch({
        type: action,
        payload: _id,
      });
      break;
    }
    case "REMOVE_FROM_HISTORY": {
      const { status } = await axios.put(`${API_URL}/history/${userId}`, {
        _id,
      });
      dispatch({
        type: action,
        payload: _id,
      });
      break;
    }
    case "CLEAR_HISTORY": {
      const { status } = await axios.delete(`${API_URL}/history/${userId}`);
      dispatch({
        type: action,
      });
      break;
    }
  }
*/
