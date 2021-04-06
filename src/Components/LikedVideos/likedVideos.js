import { useDataContext } from "../../Context/data-context"
import { VideoCard } from "../Video/videoCard";

export const LikedVideos = () => {
    const {state:{likedVideos}} = useDataContext();

    return(
        <>
        <h2 className="txt-header-2">Liked <span className="secondary-txt">Videos</span></h2>
        {likedVideos.map(videoId => (
            <div key={videoId}>
                <VideoCard id={videoId} />
            </div>
        ))}
        </>
    )
}