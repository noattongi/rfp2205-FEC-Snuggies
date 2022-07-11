// The main image-- it can expand!

// Import stuff
import React, { useState } from 'react';
import { Image, DefaultView, ExpandedView } from '../StyledComponents/ImageGallery/MainImage.jsx';

// The component
var MainImage = (props) => {

  const [view, setView] = useState('default');

  return (
    <DefaultView>
      <Image src={props.chosenImageUrl} />
    </DefaultView>
  );
}

// Export it
export default MainImage;