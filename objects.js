var playlist = {artist : "song"}

function updatePlaylist(object, artist){
  playlist['object'] = artist
  return playlist
}

function removeFromPlaylist(object, artist){
  delete playlist.object
  return playlist
}