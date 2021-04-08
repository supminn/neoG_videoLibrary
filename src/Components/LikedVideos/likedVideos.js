import { NavLink } from "react-router-dom";
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
         {likedVideos.length===0 && (
             <>
         <h3 className="txt-header-3">No videos to like 🤨</h3>
         <NavLink to="/" className="no-line btn btn-primary">Checkout Videos</NavLink>
         </>
         )}
        </>
    )
}