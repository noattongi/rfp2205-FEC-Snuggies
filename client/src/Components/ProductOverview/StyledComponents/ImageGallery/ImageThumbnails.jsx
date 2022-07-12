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

// Export the styled components
export { ImageThumbnails, ThumbnailImage };