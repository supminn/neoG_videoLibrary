export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    /* Video List */
    case "SET_VIDEOLIST":
      return { ...state, videoList: payload };
    case "TOGGLE_LIKE":
      return {
        ...state,
        toastMsg: state.likedVideos.some((video) => video === payload)?"Removed from Liked videos":"Added to Liked videos",
        likedVideos: state.likedVideos.some((video) => video === payload)
          ? state.likedVideos.filter((video) => video !== payload)
          : state.likedVideos.concat(payload),
      };
      case "TOGGLE_WATCHLATER":
        return {
          ...state,
          toastMsg: state.watchLater.some((video) => video === payload)?"Removed from Watch Later":"Added to Watch Later",
          watchLater: state.watchLater.some((video) => video === payload)
            ? state.watchLater.filter((video) => video !== payload)
            : state.watchLater.concat(payload),
        };
        case "SHOW_TOAST":
          return { ...state, toastMsg: payload };
    default:
      return state;
  }
};
