import "./App.css";
import {
  VideoList,
  Navigation,
  Toast,
  LikedVideos,
  Playlist,
  History,
  PrivateRoute,
  UserProfile,
  Login,
  Signup,
  VideoPage,
} from "./Components";
import { useAuthContext, useDataContext } from "./Context";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getLikedVideos, getUserPlaylist } from "./Utils/serverRequest";

function App() {
  const {
    state: { toastMsg },
    dispatch,
  } = useDataContext();

  const { login, userData, setShowLoader } = useAuthContext();

  useEffect(() => {
    getLikedVideos(userData._id, dispatch, setShowLoader);
  }, [login]);

  useEffect(() => {
    if (login && userData._id) {
      getUserPlaylist(userData._id, dispatch, setShowLoader);
    }
  }, [login]);

  return (
    <div className="App">
      <div className="toastmsg-container">{toastMsg && <Toast />}</div>
      <Navigation />
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/:videoId" element={<VideoPage />} />
        <PrivateRoute path="/liked-videos" element={<LikedVideos />} />
        <PrivateRoute path="/playlist" element={<Playlist />} />
        <PrivateRoute path="/history" element={<History />} />
        <PrivateRoute path="/user-profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
