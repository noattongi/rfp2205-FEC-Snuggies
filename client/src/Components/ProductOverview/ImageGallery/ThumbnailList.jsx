// The List of Thumbnail components

// Import stuff
import React, { useState, useEffect } from 'react';
import { ImageThumbnails, Div, ChosenDiv, Arrow, ImageThumbnailIconContainer, ImageThumbnailIcon, ChosenImageThumbnailIcon } from '../StyledComponents/ImageGallery/ImageThumbnails.jsx';
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

  // If the zoomed state is not active...
  if (!props.zoomed) {
    // ...and the view is expanded, render the default Image Thumbnail List
    if (props.expanded) {
      return (
        <ImageThumbnailIconContainer>
          {index > 0 && <Arrow className="fa-solid fa-arrow-up" key={"LeftArrow"} onClick={() => {setIndex(index - 1)}} /> /* If the starting index is > 0, render an up arrow */}
          {shown.map((thumbnail, keyIndex = 0) => {
            // If the thumbnail is the chosen one, also render a box around it to indicate that it's the chosen one
            if (keyIndex + index === props.chosenImageIndex) {
              return (
                <ChosenImageThumbnailIcon className="fa-solid fa-circle" index={index + keyIndex} onClick={() => {props.setChosenImageIndex(index + keyIndex)}} key={keyIndex} />
              );
            }
            // Else just render the thumbnail itself
            return (<ImageThumbnailIcon className="fa-solid fa-circle" index={index + keyIndex} onClick={() => {props.setChosenImageIndex(index + keyIndex)}} key={index + keyIndex}/>);
          })}
          {index + 7 < props.imageThumbnails.length && <Arrow className="fa-solid fa-arrow-down" key={"RightArrow"} onClick={() => {setIndex(index + 1)}} />/* If the starting index + 7 is < props.imageThumbnails.length, render a down arrow */}
        </ImageThumbnailIconContainer>
      );
    // Else the view is not expanded so render the default Image Thumbnail List
    } else {
      return (
        <ImageThumbnails>
          {index > 0 && <Arrow className="fa-solid fa-arrow-up" key={"LeftArrow"} onClick={() => {setIndex(index - 1)}} /> /* If the starting index is > 0, render an up arrow */}
          {shown.map((thumbnail, keyIndex = 0) => {
            // If the thumbnail is the chosen one, also render a box around it to indicate that it's the chosen one
            if (keyIndex + index === props.chosenImageIndex) {
              return (
                <ChosenDiv key={"ChosenDiv"}><Thumbnail className="chosenImage" thumbnail={thumbnail} index={index + keyIndex} key={keyIndex++} setChosenImageIndex={props.setChosenImageIndex} /></ChosenDiv>
              );
            }
            // Else just render the thumbnail itself
            return (<Div key={`Div${keyIndex}`}><Thumbnail thumbnail={thumbnail} index={index + keyIndex} key={index + keyIndex++} setChosenImageIndex={props.setChosenImageIndex} /></Div>);
          })}
          {index + 7 < props.imageThumbnails.length && <Arrow className="fa-solid fa-arrow-down" key={"RightArrow"} onClick={() => {setIndex(index + 1)}} />/* If the starting index + 7 is < props.imageThumbnails.length, render a down arrow */}
        </ImageThumbnails>
      );
    }
  }

}

export default ThumbnailList;