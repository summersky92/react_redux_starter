import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

  //const video = props.video;
  //in the functions {video}. which means get he prop.video from the pass in props
  //console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list meida">

        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>
    </li>
  )

};

export default VideoListItem;
