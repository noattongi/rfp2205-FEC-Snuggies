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
              <ChosenStyleContainer key="ChosenStyleContainer" >
                <ChosenIcon className="fa-solid fa-check" key="ChosenStyleIcon"></ChosenIcon>
                <StyleThumbnail alt="StyleThumbnail" key={style.style_id} src={style.photos[0].thumbnail_url} onClick={() => {props.setChosenStyle(style)}} ></StyleThumbnail>
              </ChosenStyleContainer>
            );
          }
          // Else just render the thumbnail without the special border
          return (<StyleThumbnail alt="StyleThumbnail" key={style.style_id} src={style.photos[0].thumbnail_url} onClick={() => {props.setChosenStyle(style)}} ></StyleThumbnail>);
        })}
      </StyleThumbnailContainer>
    </div>
  );
}

// Export it
export default Styles;