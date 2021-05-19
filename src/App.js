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
  Footer,
} from "./Components";
import { useAuthContext, useDataContext } from "./Context";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {
  getVideoList,
  getLikedVideos,
  getUserPlaylist,
} from "./Utils/serverRequest";

function App() {
  const {
    state: { toastMsg },
    dispatch,
  } = useDataContext();

  const { login, userData, setShowLoader } = useAuthContext();

  useEffect(() => {
    getVideoList(dispatch, setShowLoader);
  }, []);

  useEffect(() => {
    if (login && userData._id) {
      getLikedVideos(userData._id, dispatch, setShowLoader);
    }
  }, [login, userData]);

  useEffect(() => {
    if (login && userData._id) {
      getUserPlaylist(userData._id, dispatch, setShowLoader);
    }
  }, [login, userData]);

  return (
    <div className="App">
      <div className="toastmsg-container">{toastMsg && <Toast />}</div>
      <Navigation />
      <section className="body-container">
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
      </section>
      <Footer/>
    </div>
  );
}

export default App;
