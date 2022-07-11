// The Thumbnail component
// Import stuff
import React, { useEffect } from 'React';
import { ThumbnailImage } from '../StyledComponents/ImageGallery/ImageThumbnails.jsx';

// The list component itself
var Thumbnail = (props) => {



  return (
    <ThumbnailImage src={props.thumbnail_url} />
  );
}

export default Thumbnail;