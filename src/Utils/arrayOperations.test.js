import {
  distinct,
  formatDate,
  formatNumber,
  imageURL,
  videoExists,
  videoURL,
} from "./arrayOperations";

describe("testing array utility operations", () => {
  test("should return true when id exists in the list of video ids", () => {
    //Arrange
    const videos = ["v123", "v124", "v125"];

    //Act
    const data = videoExists(videos, "v123");

    //Assert
    expect(data).toBe(true);
  });

  test("should return false when id does not exists in the list of video ids", () => {
    //Arrange
    const videos = ["v123", "v124", "v125"];

    //Act
    const data = videoExists(videos, "v126");

    //Assert
    expect(data).toBe(false);
  });

  test("should return a URL for a given image id", () => {
    //Arrange
    const imageId = "v124";

    //Act
    const imgUrl = imageURL(imageId);

    //Assert
    expect(imgUrl).toBe("https://img.youtube.com/vi/v124/hqdefault.jpg");
  });

  test("should return a URL for a given video id", () => {
    //Arrange
    const videoId = "e42835g234fu259";

    //Act
    const videoUrl = videoURL(videoId);

    //Assert
    expect(videoUrl).toBe("https://www.youtube.com/watch?v=e42835g234fu259");
  });

  test("should return a unique list of elements present in the array", () => {
    //Arrange
    const brands = [
      "Jump Rope Dudes",
      "Jump Rope Dudes",
      "Rush Athletics",
      "Nate K G",
      "Rush Athletics",
      "Jump Rope Dudes",
      "Nate K G",
    ];

    //Act
    const uniqueListOfAuthors = brands.filter(distinct);

    //Assert
    expect(uniqueListOfAuthors).toEqual([
      "Jump Rope Dudes",
      "Rush Athletics",
      "Nate K G",
    ]);
  });

  test("should return a date formated in MMM DD YYYY", () => {
    //Arrange
    const unformattedDate = "2021-06-04T10:52:35.814+00:00";

    //Act
    const formattedDate = formatDate(unformattedDate);

    //Arrange
    expect(formattedDate).toBe("Jun 04 2021");
  });

  test("should return a number formatted in 1000's as 'k'", () => {
    //Arrange
    const unformattedNumber = 2568790;

    //Act
    const formattedNumber = formatNumber(unformattedNumber);

    //Arrange
    expect(formattedNumber).toBe("2568.8k");
  });
});
