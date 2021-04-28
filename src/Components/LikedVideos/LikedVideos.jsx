import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../Context"
import { LikedVideoCard } from "./LikedVideoCard";
import like from "../../images/like.svg";
import { getLikedVideos } from "../../Utils/serverRequest";
import Loader from "react-loader-spinner";

export const LikedVideos = () => {
    const {state:{likedVideos}, dispatch} = useDataContext();
    const {userData,showLoader, setShowLoader} = useAuthContext();
    useEffect(() => {
        document.title = "SupVision | Liked";
    },[]);
    
    useEffect(() => {
        getLikedVideos(userData._id,dispatch,setShowLoader);
    },[])

    return showLoader ? (
        <div className="loader-container">
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
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