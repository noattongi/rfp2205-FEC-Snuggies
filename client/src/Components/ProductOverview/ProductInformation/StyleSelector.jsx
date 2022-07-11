// The component that houses all of the styles and their thumbnails

// Import stuff
import React, { useState } from 'react';
import { StyleThumbnailContainer } from '../StyledComponents/Containers.jsx';
import { ChosenStyleContainer } from '../StyledComponents/Containers.jsx';
import { StyleThumbnail, ChosenIcon } from '../StyledComponents/ProductInformation/StyleThumbnail.jsx';

// The component
var Styles = (props) => {

  return (
    <div>
      <StyleThumbnailContainer>
        {/* For each style in the styles prop, render a thumbnail of the first image of the style */}
        {props.styles.map((style) => {
          // If the style is the chosen one, render a special thumbnail (it has a border around it that indicates that it's the selected one)
          if (style.style_id === props.chosenStyle.style_id) {
            return (
              <ChosenStyleContainer>
                <ChosenIcon src="https://media.istockphoto.com/photos/green-checkmark-picture-id503451933?k=20&m=503451933&s=612x612&w=0&h=5X5bKop-YhMgPI5YgPOvroGXlbRX1shmtsGUM948cZo=" ></ChosenIcon>
                <StyleThumbnail src={style.photos[0].thumbnail_url} ></StyleThumbnail>
              </ChosenStyleContainer>
            );
          }
          // Else just render the thumbnail without the special border
          return (<StyleThumbnail src={style.photos[0].thumbnail_url} ></StyleThumbnail>);
        })}
      </StyleThumbnailContainer>
    </div>
  );
}

// Export it
export default Styles;