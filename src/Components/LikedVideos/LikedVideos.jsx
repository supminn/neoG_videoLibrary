import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../Context"
import { LikedVideoCard } from "./LikedVideoCard";
import like from "../../images/like.svg";

export const LikedVideos = () => {
    const {state:{likedVideos}} = useDataContext();

    useEffect(() => {
        document.title = "SupVision | Liked";
    },[]);
    

    return(
        <>
        <h2 className="txt-header-2">Liked <span className="secondary-txt">Videos</span></h2>
        {likedVideos.length>0 && <small className="primaryBg-txt">({likedVideos.length} videos)</small>}
     <div className="card-container">
     {likedVideos.map(_id => (
                <LikedVideoCard key={_id} _id={_id} />
        ))}
     </div>
         {likedVideos.length===0 && (
             <>
         <h3 className="txt-header-3">No videos to like 🤨</h3>
         <Link to="/" className="no-line">
             <button className="btn btn-primary">Checkout Videos</button>
             </Link>
             <br/>
             <img className="img-res img-svg" src={like} alt="like"/>
         </>
         )}
        </>
    )
}