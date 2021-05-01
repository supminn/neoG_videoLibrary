import { useState } from "react";
import { useDataContext } from "../../Context";
import { distinct } from "../../Utils";

export const FilterVideos = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const {
    state: { videoList, categoryFilter },
    dispatch,
  } = useDataContext();

  let authors = ["All videos"].concat(
    videoList.map((video) => video.author).filter(distinct)
  );

  const searchHandler = (e) => {
    if (e.keyCode === 13) {
      dispatch({ type: "SEARCH_VIDEO", payload: searchTxt });
    }
  };

  return (
    <div className="filter-container">
      <div className="search-container flex-container">
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
          onClick={() => {
            setSearchTxt("");
            dispatch({ type: "CLEAR_FILTER" });
          }}
        >
          Clear Search
        </button>
      </div>
      <div className="category-container">
        {authors.map((author) => (
          <button
            className={
              author === categoryFilter ? "btn-category-active" : "btn-category"
            }
            onClick={() =>
              dispatch({ type: "FILTER_CATEGORY", payload: author })
            }
            key={author}
          >
            {author}
          </button>
        ))}
      </div>
    </div>
  );
};

export const getFilteredVideos = (videoList, searchValue, categoryFilter) => {
  videoList = videoList.filter(
    (video) =>
      video.title.toLowerCase().includes(searchValue) ||
      video.author.toLowerCase().includes(searchValue)
  );
  if (categoryFilter !== "All videos") {
    videoList = videoList.filter((video) => video.author === categoryFilter);
  }
  return videoList;
};
