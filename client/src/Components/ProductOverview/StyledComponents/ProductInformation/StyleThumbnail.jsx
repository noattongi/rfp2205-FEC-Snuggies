// Product Overview Style Thumbnail and all related things styling

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// The style thumbnail image for a style
const StyleThumbnail = styled.img`
  display: block;
  object-fit: fill;
  border: solid;
  border-color: black;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

// An icon that indicates that the thumbnail is the chosen one
const ChosenIcon = styled.img`
  position: absolute;
  top: 7%;
  right: 7%;
  object-fit: fill;
  width: 15px;
  height: 15px;
`;

// Export the styled components
export { StyleThumbnail, ChosenIcon };