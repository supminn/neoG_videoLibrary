[![wakatime](https://wakatime.com/badge/github/supminn/neoG_videoLibrary.svg)](https://wakatime.com/badge/github/supminn/neoG_videoLibrary)

# SupVision

SupVision is a video library application developed for jump rope enthusiast. It provides videos on jump rope tricks and tutorials.

## Techonology Stack
- React - Reducer + Context
- React Player for video playback
- Styling using personal CSS component library [StyleSUP](https://stylesup.netlify.app/)
- React Router v6 (beta) for routes
- Express & Node for API [Repo Link](https://github.com/supminn/neoG_Backend/)
- MongoDB using mongoose for data storage

## Functionalities

1. Video Listing Page
   - List of videos
   - Search for videos
   - Add to playlist
   - Add to liked videos
   - Filter based on channel

2. Playlist functionality
   - Add video to the playlist
   - Remove video from playlist
   - Move video from one playlist to another
   - Create a custom playlist
   - Total videos present in the playlist
   - Delete custom playlist

3. Liked videos functionality
   - Add video to liked videos
   - Remove video from liked videos
   - Move from liked videos to playlist

4. User Watch History
   - Tracks all the videos while a user signed in
   - Remove individual video from history
   - Clear complete watch history

5. Video Page
   - Video player along with video details
   - Author information and subsequent filtering
   - Feature to add/update personal notes for registered users.

7. Database and API - MongoDB through Mongoose and ExpressJS.
   - Video list
   - User Authentication using JWT
   - User's watch history
   - Liked Videos
   - Watch later and custom playlists

### Enhancements
- Home page designing
## Live link and demo

[Deployed link](https://supvision.netlify.app/)

https://user-images.githubusercontent.com/30731236/122634766-e4de2880-d0fd-11eb-8627-d766deb2a98c.mp4

## Test user credentials
**Username:** Tester

**Password:** Testing1

# Instructions on using SupMart locally.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This starter kit could be installed in 2 ways.

1. Clone this repository and start working on the development.
2. Using [degit](https://github.com/Rich-Harris/degit).

### Instructions while using degit

degit installation:

```bash
npm install -g degit
```

Follow the below instructions to use this starter kit:

```
degit supminn/neoG_videoLibrary my-app-name
cd my-app-name

npm install
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

