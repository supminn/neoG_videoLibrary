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

    /* Toggle existing playlist */
    case "TOGGLE_PLAYLIST":
      const list = state.playlist.find((item) => item.name === payload.name);
      const videoFlag = list.videos.some((videoId) => videoId === payload.id);

      return {
        ...state,
        toastMsg: videoFlag
          ? `Removed from ${list.name}`
          : `Added to ${list.name}`,
        playlist: state.playlist.map((listItem) =>
          listItem.name === list.name
            ? {
                ...listItem,
                videos: videoFlag
                  ? listItem.videos.filter((videoId) => videoId !== payload.id)
                  : listItem.videos.concat(payload.id),
              }
            : listItem
        ),
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
