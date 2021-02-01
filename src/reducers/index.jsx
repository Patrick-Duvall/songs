import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    {title: 'Cant stop believing', duration: '4:05'},
    {title: 'No Scrubs', duration: '3:05'},
    {title: 'All-star', duration: '3:25'},
    {title: 'I Want it That Way', duration: '2:25'}
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})