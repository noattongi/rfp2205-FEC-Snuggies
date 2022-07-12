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
const ChosenIcon = styled.i`
  position: absolute;
  top: 5%;
  right: 5%;
  object-fit: fill;
  width: 15px;
  height: 15px;
  background-color: white;
  padding: 3px;
  border: solid;
  border-color: black;
  border-radius: 50%;
`;

// Export the styled components
export { StyleThumbnail, ChosenIcon };