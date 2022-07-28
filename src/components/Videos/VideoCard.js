import React from 'react';
import "./Videos.css"

const VideoCard = ({name, image, index}) => {

    const playIcon =<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M16 37.85v-28l22 14Zm3-14Zm0 8.55 13.45-8.55L19 15.3Z"/></svg>
  return (
    <div className="videoCard" style={{backgroundImage : `url(${image})`}}>
        <a href="https://:facebook.com">{playIcon}</a>
        <p>{name}</p>
    </div>
  )
}

export default VideoCard