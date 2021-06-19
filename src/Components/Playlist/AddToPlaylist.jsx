import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDataContext, useAuthContext } from "../../Context";
import { PlaylistModal } from "./PlaylistModal";

export const AddToPlaylist = ({ _id }) => {
  const {
    state: { playlist }
  } = useDataContext();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const {login} = useAuthContext();

  useEffect(() => {
    const modal = document.querySelector(".modal-container");
    window.onclick = event => {
      if (event.target === modal) {
          setShowModal(false);
      }
  }
  },[showModal]);

  const checkInPlaylist = (_id) =>
    playlist.some((item) => item.videos.some((videoId) => videoId === _id));

  return (
    <>
      {checkInPlaylist(_id) ? (
        <i
          onClick={() => setShowModal((showModal) => !showModal)}
          className="btn fas fa-lg fa-check primaryBg-txt"
        >
          {" "}
          Saved{" "}
        </i>
      ) : (
        <i
          onClick={() => login?setShowModal((showModal) => !showModal):navigate("/login")}
          className="btn fas fa-lg fa-plus"
        >
          {" "}
          Save{" "}
        </i>
      )}
      {showModal && <PlaylistModal _id={_id} setShowModal={setShowModal}/>}
    </>
  );
};
