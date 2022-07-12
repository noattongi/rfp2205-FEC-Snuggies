// Everything involving the Image Thumbnails in the Image Gallery section of the Product Overview

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// Container to hold the image thumbnails
const ImageThumbnails = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px;
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
  margin-bottom: 20px;
`;

{/* <i class="fa-solid fa-arrow-down"></i> */}
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
export { ImageThumbnails, ThumbnailImage, Arrow };