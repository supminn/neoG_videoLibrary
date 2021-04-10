import { videoExists } from "../Components/Video/videoUtil";

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    /* Video List */
    case "SET_VIDEOLIST":
      return { ...state, videoList: payload };

    /* Liked videos */
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

    /* Toggle videos from existing playlist */
    case "TOGGLE_PLAYLIST":
      const list = state.playlist.find(
        (item) => item.listId === payload.listId
      );
      const videoFlag = list.videos.some((videoId) => videoId === payload.id);

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
                  ? listItem.videos.filter((videoId) => videoId !== payload.id)
                  : listItem.videos.concat(payload.id),
              }
            : listItem
        ),
      };

    /* Create new playlist and add video */
    case "ADD_TO_NEW_PLAYLIST":
      if (payload.listName) {
        return {
          ...state,
          toastMsg: `Added to ${payload.listName}`,
          playlist: state.playlist.concat({
            listId: state.playlist.length + 1,
            name: payload.listName,
            videos: [payload.id],
          }),
        };
      } else {
        return { ...state };
      }

    /* Delete playlist */
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.filter((list) => list.listId !== payload),
      };

    /* Rename playlist */
    case "RENAME_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((list) =>
          list.listId === payload.listId
            ? { ...list, name: payload.listName }
            : list
        ),
      };

    /* User's Video History */
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
        return{
          ...state,
          toastMsg:"Removed from history",
          history: state.history.filter(videoId => videoId !== payload)
        }
      case "CLEAR_HISTORY":
        return {
          ...state,
          toastMsg:"Cleared watch history",
          history: []
        }
    /* Filter videos */
    case "SEARCH_VIDEO":
      return { ...state, searchValue: payload.toLowerCase() };
    case "CLEAR_FILTER":
      return {
        ...state,
        searchValue: "",
      };

    /* Toast message */
    case "SHOW_TOAST":
      return { ...state, toastMsg: payload };

    /* Default case */
    default:
      return state;
  }
};

/*

 case "TOGGLE_PLAYLIST":
      const list = state.playlist.find((item) => item.name === payload.name);
      const videoFlag = list.videos.some((videoId) => videoId === payload.id);
      return {
        ...state,
        toastMsg: videoFlag
          ? `Removed from ${list.name}`
          : `Added to ${list.name}`,
        playlist: state.playlist.map((vList) =>
          vList.name === list.name
            ? videoFlag
              ? state.playlist.videos.filter(
                  (videoId) => videoId !== payload.id
                )
              : state.playlist.videos.concat(payload.id)
            : vList
        ),
      };

      */
