// The main image-- it can expand!

// Import stuff
import React, { useState } from 'react';
import { Image, DefaultView, DefaultOverlay, LeftArrow, RightArrow, FullScreen, ExpandedView } from '../StyledComponents/ImageGallery/MainImage.jsx';

// The component
var MainImage = (props) => {

  const [view, setView] = useState('default');

  // If the view is expanded view, render the expanded view
  if (view === 'expanded') {
    return (
      <ExpandedView>
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
            <FullScreen className="fa-solid fa-expand" />
          </DefaultOverlay>
          <Image id="MainImage" src={props.chosenImageUrl} />
        </DefaultView>
      </div>
    );
  }
}

// Export it
export default MainImage;