import { useEffect, useState } from "react";
import { useDataContext } from "../../Context";
import { FilterVideos, getFilteredVideos } from "./FilterVideos";
import { VideoCard } from "./VideoCard";
import videolist from "../../images/videolist.svg";
import axios from "axios";
import Loader from "react-loader-spinner";

export const VideoList = () => {
  const {
    state: { videoList, searchValue },
    dispatch,
  } = useDataContext();
  const filteredVideos = getFilteredVideos(videoList, searchValue);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    document.title = "SupVision | Videos";
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setShowLoader(true);
        const {
          data: { videos },
        } = await axios.get("https://api-supminn.herokuapp.com/videos");
        dispatch({ type: "SET_VIDEOLIST", payload: videos });
        setShowLoader(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [dispatch]);

  return showLoader ? (
    <div className="loader-container">
      <Loader type="Oval" color="#00BFFF" height={80} width={80} />
    </div>
  ) : (
    <>
      <h2 className="txt-header-2">
        Video <span className="secondary-txt">List</span>
      </h2>
      <FilterVideos />
      <div className="videolist-container">
        {filteredVideos.map((video) => (
          <VideoCard key={video._id} _id={video._id} />
        ))}
      </div>
      {filteredVideos.length === 0 && (
        <>
          <h3 className="txt-header-3">No videos found!</h3>
          <img className="img-res img-svg" src={videolist} alt="videolist" />
        </>
      )}
      <a href="#" className="btn btn-secondary btn-fab">
        {" "}
        <i className="fas fa-angle-double-up fa-lg"></i>
      </a>
    </>
  );
};
