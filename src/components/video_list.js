import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
  // return video list
  //css class => className
  //{props.videos.length}
  //always adding key to each array object
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
  //loop using map
  //var aray = [1,2,3];
  //array.map(function(number) {return '<div>'+number+'</div>'});
}

export default VideoList;
