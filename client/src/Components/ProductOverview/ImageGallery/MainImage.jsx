// The main image-- it can expand!

// Import stuff
import React, { useState } from 'react';
import { Image, DefaultView, DefaultOverlay, LeftArrow, RightArrow, FullScreen, ExpandedView, ExpandedOverlay } from '../StyledComponents/ImageGallery/MainImage.jsx';

// The component
var MainImage = (props) => {

  const [expanded, setExpanded] = useState(false);

  // If the view is expanded view, render the expanded view
  if (expanded) {
    return (
      <ExpandedView>
        <ExpandedOverlay>
          {props.chosenImageIndex > 0 && <LeftArrow className="fa-solid fa-arrow-left" onClick={() => {props.setChosenImageIndex(props.chosenImageIndex - 1)}} />}
            {props.chosenImageIndex < props.maxIndex && <RightArrow className="fa-solid fa-arrow-right" onClick={() => {props.setChosenImageIndex(props.chosenImageIndex + 1)}} />}
          <FullScreen className="fa-solid fa-expand" onClick={() => {console.log('Contract'); setExpanded(false);}} />
        </ExpandedOverlay>
        <Image src={props.chosenImageUrl} />
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
            <FullScreen className="fa-solid fa-expand" onClick={() => {console.log('Expand!'); setExpanded(true);}} />
          </DefaultOverlay>
          <Image id="MainImage" src={props.chosenImageUrl} onClick={() => {console.log('Expand!'); setExpanded(true);}} />
        </DefaultView>
      </div>
    );
  }
}

// Export it
export default MainImage;