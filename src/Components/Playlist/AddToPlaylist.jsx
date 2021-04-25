import { useEffect, useState } from "react";
import { useDataContext } from "../../Context/data-context";
import { PlaylistModal } from "./PlaylistModal";

export const AddToPlaylist = ({ vid }) => {
  const {
    state: { playlist }
  } = useDataContext();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modal = document.querySelector(".modal-container");
    window.onclick = event => {
      if (event.target === modal) {
          setShowModal(false);
      }
  }
  },[showModal]);

  const checkInPlaylist = (vid) =>
    playlist.some((item) => item.videos.some((videoId) => videoId === vid));

  return (
    <>
      {checkInPlaylist(vid) ? (
        <i
          onClick={() => setShowModal((showModal) => !showModal)}
          className="btn fas fa-lg fa-check primaryBg-txt"
        >
          {" "}
          Saved{" "}
        </i>
      ) : (
        <i
          onClick={() => setShowModal((showModal) => !showModal)}
          className="btn fas fa-lg fa-plus"
        >
          {" "}
          Save{" "}
        </i>
      )}
      {showModal && <PlaylistModal vid={vid} setShowModal={setShowModal}/>}
    </>
  );
};
