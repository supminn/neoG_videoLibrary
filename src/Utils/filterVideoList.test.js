import { getFilteredVideos } from "./filterVideoList";

describe("testing the implementation of filtering video list", () => {
  test("should filter a list containing the search value in video title", () => {
    //Arrange
    const videoList = [
      {
        _id: "v124",
        title: "Jump rope beginner tutorial",
        author: "Rush Atheletics",
      },
      {
        _id: "v125",
        title: "Jump rope advance tricks",
        author: "Nate K G",
      },
      {
        _id: "v126",
        title: "Jump rope mic release",
        author: "Nate K G",
      },
    ];

    //Act
    const filteredVideos = getFilteredVideos(
      videoList,
      "beginner",
      "All videos"
    );

    //Assert
    expect(filteredVideos).toEqual([
      {
        _id: "v124",
        title: "Jump rope beginner tutorial",
        author: "Rush Atheletics",
      },
    ]);
  });

  test("should filter a list containing the search value in video author", () => {
    //Arrange
    const videoList = [
      {
        _id: "v124",
        title: "Jump rope beginner tutorial",
        author: "Rush Atheletics",
      },
      {
        _id: "v125",
        title: "Jump rope advance tricks",
        author: "Nate K G",
      },
      {
        _id: "v126",
        title: "Jump rope mic release",
        author: "Nate K G",
      },
    ];

    //Act
    const filteredVideos = getFilteredVideos(videoList, "nate", "All videos");

    //Assert
    expect(filteredVideos).toEqual([
      {
        _id: "v125",
        title: "Jump rope advance tricks",
        author: "Nate K G",
      },
      {
        _id: "v126",
        title: "Jump rope mic release",
        author: "Nate K G",
      },
    ]);
  });

  test("should filter a list of videos by a particular channel", () => {
    //Arrange
    const videoList = [
      {
        _id: "v124",
        title: "Jump rope beginner tutorial",
        author: "Rush Atheletics",
      },
      {
        _id: "v125",
        title: "Jump rope advance tricks",
        author: "Nate K G",
      },
      {
        _id: "v126",
        title: "Jump rope mic release",
        author: "Nate K G",
      },
    ];

    //Act
    const filteredVideos = getFilteredVideos(videoList, "", "Nate K G");

    //Assert
    expect(filteredVideos).toEqual([
      {
        _id: "v125",
        title: "Jump rope advance tricks",
        author: "Nate K G",
      },
      {
        _id: "v126",
        title: "Jump rope mic release",
        author: "Nate K G",
      },
    ]);
  });
});
