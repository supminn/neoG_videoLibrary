import { useDataContext } from "../../Context/data-context"
import { VideoCard } from "./videoCard";

export const VideoList = () => {
    const {state:{videoList}} = useDataContext();

    return(
        <>
        <h2 className="txt-header-2">
          Video <span className="secondary-txt">List</span>
        </h2>
        {videoList.map(video => (
            <div key={video.id}>
                <VideoCard id={video.id} />
            </div>
        ))}
        </>  
    )
}
