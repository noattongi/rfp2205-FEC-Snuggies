// The Image zoom/magnifier when the main image is in zoom mode

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// Container to hold everything in the ImageZoom component
const ImageZoomContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 740px;
`;

// The image being zoomed
const ZoomedImage = styled.img`
  overflow: hidden;
  z-index: 16;
  :hover {
    cursor: vertical-text;
  }
`;

// The magnifying div
const Magnifier = styled.div`
  position: absolute;
  pointer-events: none;
  height: 740px;
  width: 100vw;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: 100vw 1850px;
  background-position-x: ${(props) => {return (props.x * (-1) * props.magnifier + (100/document.documentElement.clientWidth)/2)}}px;
  background-position-y: ${(props) => {return (props.y * (-1) * props.magnifier + 740/2)}}px;
  border: solid 3px black;
  z-index: 25;
`;

export { ImageZoomContainer, ZoomedImage, Magnifier };