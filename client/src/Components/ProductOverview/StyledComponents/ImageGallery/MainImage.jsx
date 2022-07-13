// The Main Image styling

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// The Main Image itself
const Image = styled.img`
  object-fit: cover;
  overflow: hidden;
  z-index: 1;
`;

// The Main Image, default view
const DefaultView = styled.div`
  display: flex;
  justify-content: center;
  width: 642px;
  height: 628px;
  background-color: black;
  :hover {
    cursor: zoom-in;
  }
`;

// An overlay div that'll go over the Default View div; this contains the Left and Right Arrows
const Overlay = styled.div`
  position: absolute;
  width: 642px;
  height: 628px;
`;

// The left arrow icon that cycles the shown Main Image
const LeftArrow = styled.i`
  position: absolute;
  left: 5%;
  top: 50%;
  object-fit: fill;
  width: 15px;
  height: 15px;
  background-color: white;
  padding: 3px;
  border: solid;
  border-color: black;
  border-radius: 10%;
  z-index: 2;
  :hover {
    cursor: pointer;
  }
`;

// The right arrow icon that cycles the shown Main Image
const RightArrow = styled.i`
  position: absolute;
  right: 5%;
  top: 50%;
  object-fit: fill;
  width: 15px;
  height: 15px;
  background-color: white;
  padding: 3px;
  border: solid;
  border-color: black;
  border-radius: 10%;
  z-index: 2;
  :hover {
    cursor: pointer;
  }
`;

// The icon the expands/minimizes the Main Image to Expanded/Default view modes
const FullScreen = styled.i`
  position: absolute;
  right: 5%;
  top: 5%;
  object-fit: fill;
  width: 15px;
  height: 15px;
  background-color: white;
  padding: 3px;
  border: solid;
  border-color: black;
  border-radius: 10%;
  z-index: 2;
  :hover {
    cursor: pointer;
  }
`;

// The Main Image, expanded view
const ExpandedView = styled.div`
  width: 1000px;
  height: 628px;
  background-color: black;
`;

// Export the styled components
export { Image, DefaultView, Overlay, LeftArrow, RightArrow, FullScreen, ExpandedView };