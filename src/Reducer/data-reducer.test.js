import { dataReducer } from "./data-reducer";

describe("testing the data reducer for initial data setup", () => {
  test("Setup the list of videos within the data state", () => {
    //Arrange
    const action = {
      type: "SET_VIDEOLIST",
      payload: [
        {
          _id: "v123",
          title: "Jump Rope tutorial for beginners",
          author: "Jump Rope Dudes",
        },
        {
          _id: "v124",
          title: "Jump Rope tricks for beginners",
          author: "Jump Rope Dudes",
        },
      ],
    };

    const initialState = {
      videoList: [],
    };

    //Act
    const state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      videoList: [
        {
          _id: "v123",
          title: "Jump Rope tutorial for beginners",
          author: "Jump Rope Dudes",
        },
        {
          _id: "v124",
          title: "Jump Rope tricks for beginners",
          author: "Jump Rope Dudes",
        },
      ],
    });
  });

  test("Setup the list of liked videos specific to a user", () => {
    //Arrange
    const action = {
      type: "SET_LIKEDVIDEOS",
      payload: [
        {
          _id: "v123",
          title: "Jump Rope tutorial for beginners",
          author: "Jump Rope Dudes",
        },
        {
          _id: "v124",
          title: "Jump Rope tricks for beginners",
          author: "Jump Rope Dudes",
        },
      ],
    };

    const initialState = {
      likedVideos: [],
    };

    //Act
    const state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      likedVideos: [
        {
          _id: "v123",
          title: "Jump Rope tutorial for beginners",
          author: "Jump Rope Dudes",
        },
        {
          _id: "v124",
          title: "Jump Rope tricks for beginners",
          author: "Jump Rope Dudes",
        },
      ],
    });
  });

  test("Setup the video history for a specific user", () => {
    //Arrange
    const action = {
      type: "SET_HISTORY",
      payload: [
        {
          _id: "v123",
          title: "Jump Rope tutorial for beginners",
          author: "Jump Rope Dudes",
        },
        {
          _id: "v124",
          title: "Jump Rope tricks for beginners",
          author: "Jump Rope Dudes",
        },
      ],
    };

    const initialState = {
      history: [],
    };

    //Act
    const state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      history: [
        {
          _id: "v123",
          title: "Jump Rope tutorial for beginners",
          author: "Jump Rope Dudes",
        },
        {
          _id: "v124",
          title: "Jump Rope tricks for beginners",
          author: "Jump Rope Dudes",
        },
      ],
    });
  });

  test("Setup the list of playlists specific to a user", () => {
    //Arrange
    const action = {
      type: "SET_PLAYLIST",
      payload: [
        {
          _id: "p213",
          name: "Watch Later",
          videos: ["v123", "v124"],
        },
        {
          _id: "p214",
          name: "JRD",
          videos: ["v126"],
        },
      ],
    };

    const initialState = {
      playlist: [],
    };

    //Act
    const state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      playlist: [
        {
          _id: "p213",
          name: "Watch Later",
          videos: ["v123", "v124"],
        },
        {
          _id: "p214",
          name: "JRD",
          videos: ["v126"],
        },
      ],
    });
  });
});

describe("testing toggle feature to add/remove liked videos", () => {
  test("should add videoId to liked video list", () => {
    //Arrange
    const action = {
      type: "TOGGLE_LIKE",
      payload: "v123",
    };
    const initialState = {
      toastMsg: "",
      likedVideos: ["v124"],
    };

    //Act
    const state = dataReducer(initialState, action);

    //Arrange
    expect(state).toEqual({
      toastMsg: "Added to Liked videos",
      likedVideos: ["v124", "v123"],
    });
  });

  test("should remove videoId from liked video list", () => {
    //Arrange
    const action = {
      type: "TOGGLE_LIKE",
      payload: "v123",
    };
    const initialState = {
      toastMsg: "",
      likedVideos: ["v124", "v123"],
    };

    //Act
    const state = dataReducer(initialState, action);

    //Arrange
    expect(state).toEqual({
      toastMsg: "Removed from Liked videos",
      likedVideos: ["v124"],
    });
  });
});

describe("testing playlist modification functionalities", () => {
  test("should add/remove videoId from an individual playlist", () => {
    //Arrange
    const action = {
      type: "TOGGLE_PLAYLIST",
      payload: {
        listId: "p213",
        _id: "v124",
      },
    };
    const initialState = {
      toastMsg: "",
      playlist: [
        {
          _id: "p213",
          name: "Watch Later",
          videos: ["v123"],
        },
      ],
    };

    //Act
    let state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      toastMsg: "Added to Watch Later",
      playlist: [
        {
          _id: "p213",
          name: "Watch Later",
          videos: ["v123", "v124"],
        },
      ],
    });
  });

  test("should add a new playlist data into the list of playlists", () => {
    //Arrange
    const action = {
      type: "ADD_TO_NEW_PLAYLIST",
      payload: {
        _id: "p214",
        name: "JRD",
        videos: ["v124"],
      },
    };
    const initialState = {
      toastMsg: "",
      playlist: [
        {
          _id: "p213",
          name: "Watch Later",
          videos: ["v125"],
        },
      ],
    };

    //Act
    const state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      toastMsg: "Added to JRD",
      playlist: [
        {
          _id: "p213",
          name: "Watch Later",
          videos: ["v125"],
        },
        {
          _id: "p214",
          name: "JRD",
          videos: ["v124"],
        },
      ],
    });
  });

  test("should rename an existing playlist", () => {
    //Arrange
    const action = {
      type: "RENAME_PLAYLIST",
      payload: {
        listId: "p214",
        listName: "JRD workout",
      },
    };
    const initialState = {
      playlist: [
        {
          _id: "p213",
          name: "Watch Later",
          videos: ["v125"],
        },
        {
          _id: "p214",
          name: "JRD",
          videos: ["v124"],
        },
      ],
    };

    //Act
    const state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      playlist: [
        {
          _id: "p213",
          name: "Watch Later",
          videos: ["v125"],
        },
        {
          _id: "p214",
          name: "JRD workout",
          videos: ["v124"],
        },
      ],
    });
  });

  test("should delete an existing playlist with all its videos", () => {
    //Arrange
    const action = {
      type: "DELETE_PLAYLIST",
      payload: "p214",
    };

    const initialState = {
      playlist: [
        {
          _id: "p213",
          name: "Watch Later",
          videos: ["v125"],
        },
        {
          _id: "p214",
          name: "JRD",
          videos: ["v124"],
        },
      ],
    };

    //Act
    const state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      playlist: [
        {
          _id: "p213",
          name: "Watch Later",
          videos: ["v125"],
        },
      ],
    });
  });
});

describe("testing history modification functionalities", () => {
  test("should add new video to history list or modify the order of an existing video", () => {
    //Arrange
    let action = {
      type: "ADD_TO_HISTORY",
      payload: "v124",
    };
    const initialState = {
      history: ["v123"],
    };

    //Act
    let state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      history: ["v123", "v124"],
    });

    //Arrange
    action = {
      type: "ADD_TO_HISTORY",
      payload: "v123",
    };

    //Act
    state = dataReducer(state, action);

    //Assert
    expect(state).toEqual({
      history: ["v124", "v123"],
    });
  });

  test("should remove a video from history list", () => {
    //Arrange
    const action = {
      type: "REMOVE_FROM_HISTORY",
      payload: "v124",
    };

    const initialState = {
      toastMsg: "",
      history: ["v124", "v123"],
    };

    //Act
    const state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      toastMsg: "Removed from history",
      history: ["v123"],
    });
  });

  test("should clear user watch history", () => {
    let action = {
      type: "CLEAR_HISTORY",
    };
    const initialState = {
      toastMsg: "",
      history: ["v123", "v124", "v125"],
    };

    //Act
    let state = dataReducer(initialState, action);

    //Assert
    expect(state).toEqual({
      toastMsg: "Cleared watch history",
      history: [],
    });
  });
});

describe("testing video filter features", () => {
  test("should set the searchValue with value passed by user", () => {
    //Arrange
    const action = {
      type: "SEARCH_VIDEO",
      payload: "beginner",
    };

    const initialState = {
      searchValue: "",
    };

    //Act
    const state = dataReducer(initialState, action);

    //Arrange
    expect(state).toEqual({
      searchValue: "beginner",
    });
  });

  test("should clear the data set on searchValue field", () => {
    //Arrange
    const action = {
      type: "CLEAR_FILTER",
    };

    const initialState = {
      searchValue: "beginner",
    };

    //Act
    const state = dataReducer(initialState, action);

    //Arrange
    expect(state).toEqual({
      searchValue: "",
    });
  });

  test("should set filter category", () => {
    //Arrange
    const action = {
      type: "FILTER_CATEGORY",
      payload: "Jump Rope Dudes",
    };

    const initialState = {
      categoryFilter: "",
    };

    //Act
    const state = dataReducer(initialState, action);

    //Arrange
    expect(state).toEqual({
      categoryFilter: "Jump Rope Dudes",
    });
  });

  test("should set a message to toast", () => {
    //Arrange
    const action = {
      type: "SHOW_TOAST",
      payload: "Toast message",
    };

    const initialState = {
      toastMsg: "",
    };

    //Act
    const state = dataReducer(initialState, action);

    //Arrange
    expect(state).toEqual({
      toastMsg: "Toast message",
    });
  });
});
