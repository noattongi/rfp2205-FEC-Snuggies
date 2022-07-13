// The Thumbnail component
// Import stuff
import React, { useEffect } from 'react';
import { ThumbnailImage } from '../StyledComponents/ImageGallery/ImageThumbnails.jsx';

// The list component itself
var Thumbnail = (props) => {



  return (
    <ThumbnailImage src={props.thumbnail.thumbnail_url} onClick={() => {props.setChosenImageIndex(props.index)}} />
  );
}

export default Thumbnail;