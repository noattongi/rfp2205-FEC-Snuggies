// The List of Thumbnail components

// Import stuff
import React, { useState, useEffect } from 'react';
import { ImageThumbnails, Div, ChosenDiv, Arrow } from '../StyledComponents/ImageGallery/ImageThumbnails.jsx';
import Thumbnail from './Thumbnail.jsx';

// The list component itself
var ThumbnailList = (props) => {

  // The starting index of the 7 thumbnails that are being shown
  const [index, setIndex] = useState(0);
  // The 7 thumbnails that are being shown
  const [shown, setShown] = useState([]);

  // Whenever imageThumbnails changes, set the shown thumbnails
  useEffect(() => {
    setShown(props.imageThumbnails.slice(index, index + 7));
  }, [index, props.imageThumbnails])


  return (
    <ImageThumbnails>
      {index > 0 && <Arrow className="fa-solid fa-arrow-up" onClick={() => {setIndex(index - 1)}} /> /* If the starting index is > 0, render an up arrow */}
      {shown.map((thumbnail, keyIndex = 0) => {
        // If the thumbnail is the chosen one, also render a box around it to indicate that it's the chosen one
        if (thumbnail.url === props.chosenImageUrl) {
          return (
            <ChosenDiv><Thumbnail thumbnail={thumbnail} key={keyIndex++} setChosenImageUrl={props.setChosenImageUrl} /></ChosenDiv>
          );
        }
        // Else just render the thumbnail itself
        return (<Div><Thumbnail thumbnail={thumbnail} key={keyIndex++} setChosenImageUrl={props.setChosenImageUrl} /></Div>);
      })}
      {index + 7 < props.imageThumbnails.length && <Arrow className="fa-solid fa-arrow-down" onClick={() => {setIndex(index + 1)}} />/* If the starting index + 7 is < props.imageThumbnails.length, render a down arrow */}
    </ImageThumbnails>
  );
}

export default ThumbnailList;