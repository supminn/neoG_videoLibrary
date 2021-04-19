import { useEffect } from "react";
import { useDataContext } from "../../Context/data-context";
import { FilterVideos, getFilteredVideos } from "./filterVideos";
import { VideoCard } from "./videoCard";
import videolist from "../../images/videolist.svg";

export const VideoList = () => {
  const {
    state: { videoList, searchValue },
  } = useDataContext();
  const filteredVideos = getFilteredVideos(videoList, searchValue);

  useEffect(() => {
    document.title = "SupVision | Videos";
  }, []);

  return (
    <>
      <h2 className="txt-header-2">
        Video <span className="secondary-txt">List</span>
      </h2>
      <FilterVideos />
      <div className="videolist-container">
        {filteredVideos.map((video) => (
            <VideoCard key={video.vid} vid={video.vid} />
        ))}
      </div>
      {filteredVideos.length===0 && (
        <>
        <h3 className="txt-header-3">No videos found!</h3>
        <img className="img-res img-svg" src={videolist} alt="videolist"/>
        </>
      )}
      <a href="#" className="btn btn-secondary btn-fab"> <i className="fas fa-angle-double-up fa-lg"></i></a>
    </>
  );
};
