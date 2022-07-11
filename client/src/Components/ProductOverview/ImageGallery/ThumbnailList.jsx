// The List of Thumbnail components

// Import stuff
import React, { useState, useEffect } from 'React';
import { ImageThumbnails } from '../StyledComponents/ImageGallery/ImageThumbnails.jsx';
import Thumbnail from './Thumbnail.jsx';

// The list component itself
var ThumbnailList = (props) => {

  // const [chosenThumbnail, setChosenThumbnail] = useState('');
  // An index to use as the keys of the thumbnails
  var index = 0;

  return (
    <ImageThumbnails>
      {props.imageThumbnails.map((thumbnail) => {
        return (
          <Thumbnail thumbnail_url={thumbnail.thumbnail_url} key={index++} />
          // If the thumbnail is the chosen one, render a bar under it to indicate that it's the chosen one
        );
      })}
    </ImageThumbnails>
  );
}

export default ThumbnailList;