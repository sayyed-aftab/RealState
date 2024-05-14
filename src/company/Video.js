import React from 'react';
import './Video.css';

const Video = () => {
  // Direct URL to the thumbnail image
  const thumbnailUrl = 'https://i0.wp.com/propertyphotos.uk/wp-content/uploads/2019/09/0022.jpg?ssl=1';

  return (
    <div className="video-container">
      <video width="1500" height="1000" controls autoPlay poster={thumbnailUrl}>
        <source src="videoproperty.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

export default Video;
