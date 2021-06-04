import { videoExists } from "../Utils/arrayOperations";

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_VIDEOLIST":
      return { ...state, videoList: payload };

    case "SET_LIKEDVIDEOS":
      return { ...state, likedVideos: payload };

    case "SET_HISTORY":
      return { ...state, history: payload };

    case "SET_PLAYLIST":
      return { ...state, playlist: payload };

    case "SET_VIDEO_NOTES":
      return { ...state, notes: payload };

    case "TOGGLE_LIKE":
      return {
        ...state,
        toastMsg: videoExists(state.likedVideos, payload)
          ? "Removed from Liked videos"
          : "Added to Liked videos",
        likedVideos: videoExists(state.likedVideos, payload)
          ? state.likedVideos.filter((video) => video !== payload)
          : state.likedVideos.concat(payload),
      };

    case "TOGGLE_PLAYLIST":
      const list = state.playlist.find((item) => item._id === payload.listId);
      const videoFlag = list.videos.some((videoId) => videoId === payload._id);
      return {
        ...state,
        toastMsg: videoFlag
          ? `Removed from ${list.name}`
          : `Added to ${list.name}`,
        playlist: state.playlist.map((listItem) =>
          listItem._id === list._id
            ? {
                ...listItem,
                videos: videoFlag
                  ? listItem.videos.filter((videoId) => videoId !== payload._id)
                  : listItem.videos.concat(payload._id),
              }
            : listItem
        ),
      };

    case "ADD_TO_NEW_PLAYLIST":
      if (payload.name) {
        return {
          ...state,
          toastMsg: `Added to ${payload.name}`,
          playlist: state.playlist.concat(payload),
        };
      } else {
        return { ...state };
      }

    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.filter((list) => list._id !== payload),
      };

    case "RENAME_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((list) =>
          list._id === payload.listId
            ? { ...list, name: payload.listName }
            : list
        ),
      };

    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: state.history.some((videoId) => videoId === payload)
          ? state.history
              .filter((videoId) => videoId !== payload)
              .concat(payload)
          : state.history.concat(payload),
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        toastMsg: "Removed from history",
        history: state.history.filter((videoId) => videoId !== payload),
      };
    case "CLEAR_HISTORY":
      return {
        ...state,
        toastMsg: "Cleared watch history",
        history: [],
      };

    case "SEARCH_VIDEO":
      return { ...state, searchValue: payload.toLowerCase() };
    case "CLEAR_FILTER":
      return {
        ...state,
        searchValue: "",
      };

    case "FILTER_CATEGORY":
      return { ...state, categoryFilter: payload };

    case "SHOW_TOAST":
      return { ...state, toastMsg: payload };

    case "ADD_NOTE":
      return { ...state, notes: state.notes.concat({ ...payload }), toastMsg:"Note added successfully" };

    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === payload._id ? payload : note
        ),
        toastMsg:"Note updated successfully"
      };

    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== payload._id),
        toastMsg:"Note deleted successfully"
      };
    default:
      return state;
  }
};
