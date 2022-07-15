// The component that houses all of the styles and their thumbnails

// Import stuff
import React, { useState } from 'react';
import { StyleThumbnailContainer } from '../StyledComponents/Containers.jsx';
import { ChosenStyleContainer } from '../StyledComponents/Containers.jsx';
import { StyleThumbnail, ChosenIcon } from '../StyledComponents/ProductInformation/StyleThumbnail.jsx';

// The component
var Styles = (props) => {
  // Split the array of styles into arrays of 4 or less styles
  var styleRows = []; // A matrix-- array of arrays that represent rows of styles
  var styleRow = []; // An array that represents a row of styles (max amount of styles in a row = 4)
  var styleCount = 0; // Index of next empty slot in current row of styles
  for(let i = 0; i < props.styles.length; i++) {
    if (styleCount < 4) { // If there are still slots left in the row, fill them up
      styleRow.push(props.styles[i]);
      styleCount++;
    } else { // Current row filled up; add that row to the list of rows and then start a new row
      styleRows.push(styleRow);
      styleRow = [props.styles[i]];
      styleCount = 0;
    }
    if (i === props.styles.length - 1) { // If the row isn't filled up but we're at the end of the styles list, add the row
      styleRows.push(styleRow);
    }
  }
  console.log('STYLEROWS-------->', styleRows);

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
                <StyleThumbnail className="chosenStyle" alt="StyleThumbnail" id={style.style_id} key={style.style_id} src={style.photos[0].thumbnail_url} onClick={() => {props.setChosenStyle(style)}} ></StyleThumbnail>
              </ChosenStyleContainer>
            );
          }
          // Else just render the thumbnail without the special border
          return (<StyleThumbnail alt="StyleThumbnail" id={style.style_id} key={style.style_id} src={style.photos[0].thumbnail_url} onClick={() => {props.setChosenStyle(style)}} ></StyleThumbnail>);
        })}
      </StyleThumbnailContainer>
    </div>
  );
}

// Export it
export default Styles;