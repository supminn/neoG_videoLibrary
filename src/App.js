import { useEffect } from "react";
import { serverRequest } from "./api/serverRequest";
import "./App.css";
import { VideoList, Navigation, Toast, LikedVideos, Playlist } from "./Components";
import { useDataContext } from "./Context/data-context";
import { Routes, Route } from "react-router-dom";

function App() {
  const {
    state: { toastMsg },
    dispatch,
  } = useDataContext();

  useEffect(() => {
    (async () => {
      const {
        response: { videos },
        error,
      } = await serverRequest("api/videos", "GET");
      if (!error) {
        dispatch({ type: "SET_VIDEOLIST", payload: videos });
      }
    })();
  }, []);

  return (
    <div className="App">
      <div className="route-container">{toastMsg && <Toast/>}</div>
      <Navigation/>
      <Routes>
     <Route path="/" element={<VideoList/>}/> 
      <Route path="/liked-videos" element={<LikedVideos/>}/>     
      <Route path="/playlist" element={<Playlist/>}/>     
      </Routes>
    </div>
  );
}

export default App;
