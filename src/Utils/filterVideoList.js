export const getFilteredVideos = (videoList, searchValue, categoryFilter) => {
    videoList = videoList.filter(
      (video) =>
        video.title.toLowerCase().includes(searchValue) ||
        video.author.toLowerCase().includes(searchValue)
    );
    if (categoryFilter !== "All videos") {
      videoList = videoList.filter((video) => video.author === categoryFilter);
    }
    return videoList;
  };
  