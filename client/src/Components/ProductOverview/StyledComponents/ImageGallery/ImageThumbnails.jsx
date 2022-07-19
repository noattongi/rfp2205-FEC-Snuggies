// Everything involving the Image Thumbnails in the Image Gallery section of the Product Overview

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// Container to hold the image thumbnails
const ImageThumbnails = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 16px 16px 16px;
  border: solid 3px;
  border-color: #120309;
  border-radius: 10px;
  min-width: 84px;
  min-height: 702px;
`;

// An image thumbnail
const ThumbnailImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  width: 62px;
  height: 62px;

  border: solid 3px;
  border-color: #3A606E;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    border-color: #EF8354;
  }
`;

// A regular div element
const Div = styled.div`
  margin: 8px 8px 8px 8px;
`;

// A div element that wraps around the chosen (selected) image thumbnail
const ChosenDiv = styled.div`
  margin: 8px 8px 8px 8px;
  background-color: #EF8354;

  border: solid 3px;
  border-radius: 5px;
  border-color: #EF8354;

`;

// The up/down arrow icon that shifts the shown thumbnails up/down
const Arrow = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  width: 15px;
  height: 15px;
  background-color: #FFFFFF;
  padding: 3px;
  border: solid;
  border-color: #120309;
  border-radius: 10%;
  margin: 15px 0px 15px 0px;
  :hover {
    cursor: pointer;
    background-color: #EF8354;
  }
`;

// Export the styled components
export { ImageThumbnails, ThumbnailImage, Div, ChosenDiv, Arrow };