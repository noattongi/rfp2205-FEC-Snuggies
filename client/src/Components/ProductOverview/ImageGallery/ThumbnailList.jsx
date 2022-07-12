// The List of Thumbnail components

// Import stuff
import React, { useState, useEffect } from 'react';
import { ImageThumbnails } from '../StyledComponents/ImageGallery/ImageThumbnails.jsx';
import Thumbnail from './Thumbnail.jsx';

// The list component itself
var ThumbnailList = (props) => {

  // const [chosenThumbnail, setChosenThumbnail] = useState('');

  return (
    <ImageThumbnails>
      {props.imageThumbnails.map((thumbnail, index = 0) => {
        return (
          <Thumbnail thumbnail={thumbnail} key={index++} setChosenImageUrl={props.setChosenImageUrl} />
          // If the thumbnail is the chosen one, render a bar under it to indicate that it's the chosen one
        );
      })}
    </ImageThumbnails>
  );
}

export default ThumbnailList;