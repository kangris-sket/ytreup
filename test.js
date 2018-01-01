var Youtube = require('youtube-video-api');
var youtube = Youtube({ 
  video: {
    part: 'status,snippet' 
  }
})
 
var params = {
    email: 'fillerix99@gmail.com',
  resource: {
    snippet: {
      title: 'test video',
      description: 'This is a test video uploaded via the YouTube API'
    },
    status: {
      privacyStatus: 'private'
    }
  }
}
 
youtube.authenticate('my-client-id', 'my-client-secret', function (err, tokens) {
  if (err) return console.error('Cannot authenticate:', err)
  uploadVideo()
})
 
function uploadVideo() {
  youtube.upload('path/to/video.mp4', params, function (err, video) {
    if (err) {
      return console.error('Cannot upload video:', err)
    }
 
    console.log('Video was uploaded with ID:', video.id)
  
  })
}