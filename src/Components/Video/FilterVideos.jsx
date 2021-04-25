import { useState } from "react";
import { useDataContext } from "../../Context/data-context";

export const FilterVideos = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const { dispatch } = useDataContext();

  const searchHandler = (e) => {
    if (e.keyCode === 13) {
      dispatch({ type: "SEARCH_VIDEO", payload: searchTxt });
    }
  };

  return (
    <div className="filter-container flex-container">
      <div className="txt-box">
        {" "}
        <input
          className="txt-input"
          type="text"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          onKeyDown={searchHandler}
          placeholder="Search Videos"
        />
        <span
          className="txt-icon"
          onClick={() => {
            dispatch({ type: "SEARCH_VIDEO", payload: searchTxt });
            setSearchTxt("");
          }}
        >
          <i className="fas fa-search fa-lg"></i>
        </span>
      </div>
      <button
        type="button"
        className="btn-clear"
        onClick={() =>{setSearchTxt(""); dispatch({ type: "CLEAR_FILTER" })} }
      >
        Clear Search
      </button>
    </div>
  );
};

export const getFilteredVideos = (videoList, searchValue) => {
  return videoList.filter(
    (video) =>
      video.title.toLowerCase().includes(searchValue) ||
      video.author.toLowerCase().includes(searchValue)
  );
};
