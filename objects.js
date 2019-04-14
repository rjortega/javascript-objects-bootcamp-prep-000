var playlist = {artist : "song"}

function updatePlaylist(object, string, song){
  object['string'] = song
  return playlist
}

function removeFromPlaylist(object, string){
  delete object.string
  return playlist
}
