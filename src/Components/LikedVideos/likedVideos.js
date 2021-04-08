import { Link } from "react-router-dom";
import { useDataContext } from "../../Context/data-context"
import { LikedVideoCard } from "./likedVideoCard";

export const LikedVideos = () => {
    const {state:{likedVideos}} = useDataContext();

    return(
        <>
        <h2 className="txt-header-2">Liked <span className="secondary-txt">Videos</span></h2>
        {likedVideos.length>0 && <small className="primaryBg-txt">({likedVideos.length} videos)</small>}
        {likedVideos.map(videoId => (
            <div key={videoId}>
                <LikedVideoCard id={videoId} />
            </div>
        ))}
         {likedVideos.length===0 && (
             <>
         <h3 className="txt-header-3">No videos to like 🤨</h3>
         <Link to="/" className="no-line">
             <button className="btn btn-primary">Checkout Videos</button>
             </Link>
         </>
         )}
        </>
    )
}