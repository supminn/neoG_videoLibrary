import "./App.css";
import {
  VideoList,
  Navigation,
  Toast,
  LikedVideos,
  Playlist,
  History,
} from "./Components";
import { useDataContext } from "./Context/data-context";
import { Routes, Route } from "react-router-dom";
import { VideoPage } from "./Components/VideoPlayer/VideoPage";

function App() {
  const {
    state: { toastMsg },
  } = useDataContext();

  return (
    <div className="App">
      <div className="toastmsg-container">{toastMsg && <Toast />}</div>
      <Navigation />
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/history" element={<History />} />
        <Route path="/:videoId" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
