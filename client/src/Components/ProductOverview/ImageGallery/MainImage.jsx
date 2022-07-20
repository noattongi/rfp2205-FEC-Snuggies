// The main image-- it can expand!

// Import stuff
import React, { useState } from 'react';
import { Image, DefaultView, DefaultOverlay, LeftArrow, RightArrow, FullScreen, ExpandedView, ExpandedOverlay } from '../StyledComponents/ImageGallery/MainImage.jsx';
import ImageZoom from './ImageZoom.jsx';

// The component
var MainImage = (props) => {

  // const [expanded, setExpanded] = useState(false);

  // If the view is zoomed view, render the zoomed view
  if (props.zoomed) {
    return (
      <ImageZoom imageUrl={props.chosenImageUrl} setZoomed={props.setZoomed} />
    );
  // If the view is expanded view, render the expanded view
  } else if (props.expanded) {
    return (
      <ExpandedView>
        <ExpandedOverlay>
          {props.chosenImageIndex > 0 && <LeftArrow className="fa-solid fa-arrow-left" onClick={() => {props.setChosenImageIndex(props.chosenImageIndex - 1)}} />}
            {props.chosenImageIndex < props.maxIndex && <RightArrow className="fa-solid fa-arrow-right" onClick={() => {props.setChosenImageIndex(props.chosenImageIndex + 1)}} />}
          <FullScreen className="fa-solid fa-expand"
            onClick={() => {
              console.log('Contract');
              props.setExpanded(false);
              props.setZoomed(false); // This may be unnecessary
            }}
          />
        </ExpandedOverlay>
        <Image src={props.chosenImageUrl} onClick={() => { console.log('Zoom!'); props.setZoomed(!props.zoomed);}} />
      </ExpandedView>
    );
  // Else render the default view
  } else {
    return (
      <div>
        <DefaultView>
          <DefaultOverlay>
            {props.chosenImageIndex > 0 && <LeftArrow className="fa-solid fa-arrow-left" onClick={() => {props.setChosenImageIndex(props.chosenImageIndex - 1)}} />}
            {props.chosenImageIndex < props.maxIndex && <RightArrow className="fa-solid fa-arrow-right" onClick={() => {props.setChosenImageIndex(props.chosenImageIndex + 1)}} />}
            <FullScreen className="fa-solid fa-expand" onClick={() => {console.log('Expand!'); props.setExpanded(true);}} />
          </DefaultOverlay>
          <Image id="MainImage" src={props.chosenImageUrl} onClick={() => {console.log('Expand!'); props.setExpanded(true);}} />
        </DefaultView>
      </div>
    );
  }
}

// Export it
export default MainImage;