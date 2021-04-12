import { useEffect } from "react";
import { useDataContext } from "../../Context/data-context";
import { FilterVideos, getFilteredVideos } from "./filterVideos";
import { VideoCard } from "./videoCard";

export const VideoList = () => {
  const {
    state: { videoList, searchValue },
  } = useDataContext();
  const filteredVideos = getFilteredVideos(videoList, searchValue);

  useEffect(() => {
    document.title = "SUPVision | Videos";
  }, []);

  return (
    <>
      <h2 className="txt-header-2">
        Video <span className="secondary-txt">List</span>
      </h2>
      <FilterVideos />
      <div className="videolist-container">
        {filteredVideos.map((video) => (
            <VideoCard key={video.id} id={video.id} />
        ))}
      </div>
      <a href="#" className="btn btn-secondary btn-fab"> <i className="fas fa-angle-double-up fa-lg"></i></a>
    </>
  );
};
