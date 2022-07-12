// Everything involving the Image Thumbnails in the Image Gallery section of the Product Overview

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// Container to hold the image thumbnails
const ImageThumbnails = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 16px 16px 16px;
  background-color: teal;
`;

// An image thumbnail
const ThumbnailImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  width: 62px;
  height: 62px;
  background-color: white;

  border: solid;
  border-color: black;
`;

// A regular div element
const Div = styled.div`
  margin: 0 16px 20px 16px;
`;

// A div element that wraps around the chosen (selected) image thumbnail
const ChosenDiv = styled.div`
  margin: 0 16px 20px 16px;
  border-bottom: solid;
  border-color: white;
`;

// The up/down arrow icon that shifts the shown thumbnails up/down
const Arrow = styled.i`
  object-fit: fill;
  width: 15px;
  height: 15px;
  background-color: white;
  padding: 3px;
  border: solid;
  border-color: black;
  border-radius: 10%;
`;

// Export the styled components
export { ImageThumbnails, ThumbnailImage, Div, ChosenDiv, Arrow };