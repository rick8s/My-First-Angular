
app.controller("SongsCtrl", function($scope) {
  $scope.title = "My Songs List";

  $scope.newSong = {
    title: "",
    album: "",
    artist: "",
    genre: ""
  }
  
  
  $scope.songs = [
    {
      "title": "The Heart of Rock And Roll",
      "artist": "Huey Lewis and the News",
      "album": "Back To Basics",
      "genre": "Rock"

      },
    {

      "title": "Miss Misery",
      "artist": "Nazareth",
      "album": "Hair of the Dog",
      "genre": "Hard Rock"

      },

    {
      "title": "Hells Bells",
      "artist": "AC/DC",
      "album": "Back in Black",
      "genre": "Hard Rock"

      },

    { 
      "title": "Fortunate Son",
      "artist": "Credence Clearwater Revival",
      "album": "Willy and the Poor Boys",
      "genre": "Blues Rock"

      },

    {
      "title": "I Wish You Were There",
      "artist": "REO Speedwagon",
      "album":"Hi Infidelity",
      "genre": "Rock"

    }

  ];

  $scope.killSongs = function(item) {
  var itemIndex = $scope.songs.indexOf(item);
  if (itemIndex >= 0) {
    $scope.songs.splice(itemIndex, 1);
    }
  };

  $scope.addSongs = function() {
    $scope.songs.push({
      title: $scope.newSong.title,
      album: $scope.newSong.album,
      artist: $scope.newSong.artist,
      genre: $scope.newSong.genre 
   })    
  }   
  
});