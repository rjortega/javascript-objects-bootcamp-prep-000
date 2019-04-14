var playlist = {artist : "song"}

function updatePlaylist(object, artistName, songTitle){
  object['artistName'] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}
