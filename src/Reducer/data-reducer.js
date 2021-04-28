import { videoExists } from "../Utils";

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_VIDEOLIST":
      return { ...state, videoList: payload };

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
      const list = state.playlist.find(
        (item) => item.listId === payload.listId
      );
      const videoFlag = list.videos.some((videoId) => videoId === payload._id);

      return {
        ...state,
        toastMsg: videoFlag
          ? `Removed from ${list.name}`
          : `Added to ${list.name}`,
        playlist: state.playlist.map((listItem) =>
          listItem.listId === list.listId
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
      if (payload.listName) {
        return {
          ...state,
          toastMsg: `Added to ${payload.listName}`,
          playlist: state.playlist.concat({
            listId: state.playlist.length + 1,
            name: payload.listName,
            videos: [payload._id],
          }),
        };
      } else {
        return { ...state };
      }

    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.filter((list) => list.listId !== payload),
      };

    case "RENAME_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((list) =>
          list.listId === payload.listId
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

    case "SHOW_TOAST":
      return { ...state, toastMsg: payload };

    default:
      return state;
  }
};
