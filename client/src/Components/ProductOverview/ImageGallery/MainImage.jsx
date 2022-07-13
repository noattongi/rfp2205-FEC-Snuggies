// The main image-- it can expand!

// Import stuff
import React, { useState } from 'react';
import { Image, DefaultView, Overlay, LeftArrow, RightArrow, ExpandedView } from '../StyledComponents/ImageGallery/MainImage.jsx';

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
          <Overlay>
            <LeftArrow className="fa-solid fa-arrow-left" onClick={() => {props.setChosenImageIndex(props.chosenImageIndex - 1)}} />
            <RightArrow className="fa-solid fa-arrow-right" onClick={() => {props.setChosenImageIndex(props.chosenImageIndex + 1)}} />
          </Overlay>
          <Image src={props.chosenImageUrl} />
        </DefaultView>
      </div>
    );
  }
}

// Export it
export default MainImage;