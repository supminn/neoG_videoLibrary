# Supminn's video library application

This video library application would have the following features. It is being built on ReactJS. The main hooks being used here are useContext and useReducer.

## Functionalities to be implemented

1. Video Listing Page
    * List of videos
    * Search for videos
    * Add to playlist
    * Add to liked videos 
    * Filter based on category

2. Playlist functionality
    * Add video to playlist
    * Remove video from playlist
    * Move video from one playlist to another
    * Create custom playlist
    * Total videos present in the playlist
    * Delete custom playlist

3. Liked videos functionality
    * Add video to liked videos
    * Remove video from liked videos
    * Move from liked videos to playlist

4. Beautifying with styleSUP
    * Import the css library on .css file
    * Add respective classes
    * Change theme using ThemeProvider (upcoming)

## Practices
* Mirage for backend. Setup database, products and address management | faker data - seeded to mirage
* Custom hook for axios calls
* useContext for product, cart and wishlist
* useReducer to main the cart, product and wishlist state; address state.
* Segregate into respective folders

### Additional Libraries
1. Miragejs
2. Faker
3. Axios

### Future Enhancements
* Authentication - login to add to liked videos and playlists
* Filter/search by category of videos
* Take personal notes from video - capture video time duration


