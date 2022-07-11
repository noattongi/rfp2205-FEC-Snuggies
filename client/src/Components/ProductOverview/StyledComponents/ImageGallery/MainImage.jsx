// The Main Image styling

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// The Main Image itself
const Image = styled.img`
  object-fit: cover;
  overflow: hidden;
`;

// The Main Image, default view
const DefaultView = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: black;
`;

// The Main Image, expanded view
const ExpandedView = styled.div`
  width: 600px;
  height: 300px;
  background-color: black;
`;

// Export the styled components
export { Image, DefaultView, ExpandedView };