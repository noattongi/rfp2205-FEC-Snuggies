// The Thumbnail component
// Import stuff
import React, { useEffect } from 'react';
import { ThumbnailImage } from '../StyledComponents/ImageGallery/ImageThumbnails.jsx';
import Placeholder from '../../../assets/Placeholder.jpeg';

// The list component itself
var Thumbnail = (props) => {



  return (
    <ThumbnailImage alt="ImageThumbnail" src={props.thumbnail.thumbnail_url || Placeholder} onClick={() => {props.setChosenImageIndex(props.index)}} />
  );
}

export default Thumbnail;