import { useDataContext } from "../../Context/data-context"
import { FilterVideos, getFilteredVideos } from "./filterVideos";
import { VideoCard } from "./videoCard";

export const VideoList = () => {
    const {state:{videoList, searchValue}} = useDataContext();
    const filteredVideos = getFilteredVideos(videoList, searchValue);
 
    return(
        <>
        <h2 className="txt-header-2">
          Video <span className="secondary-txt">List</span>
        </h2>
        <FilterVideos/>
        {filteredVideos.map(video => (
            <div key={video.id}>
                <VideoCard id={video.id} />
            </div>
        ))}
        </>  
    )
}
