// The component that houses all of the styles and their thumbnails

// Import stuff
import React, { useState } from 'react';
import { StyleThumbnailContainer } from '../StyledComponents/Containers.jsx';
import StyleThumbnail from '../StyledComponents/ProductInformation/StyleThumbnail.jsx';

// The component
var Styles = (props) => {

  return (
    <div>
      <StyleThumbnailContainer>
        {/* For each style in the styles prop, render a thumbnail of the first image of the style */}
        {props.styles.map((style) => {
          // Add something here such that if the style is the chosen one, make it have a special border
          return <StyleThumbnail src={style.photos[0].thumbnail_url}></StyleThumbnail>
        })}
      </StyleThumbnailContainer>
    </div>
  );
}

// Export it
export default Styles;