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
  top: 0;
  left: 0;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: ${(props) => {return (props.imageWidth * props.magnifier)}}px ${(props) => {return (props.imageHeight * props.magnifier)}}px;
  background-position-x: ${(props) => {
                            var zoomPosition = props.x * (-1) * props.magnifier + (100/document.documentElement.clientWidth)/2;
                            console.log(zoomPosition);
                            if (zoomPosition >= ((props.magnifier - 1) * -1 * props.imageWidth)) {
                              return zoomPosition;
                            } else {
                              return 0;
                            }
                          }}px;
  background-position-y: ${(props) => {
                            var zoomPosition = props.y * (-1) * props.magnifier + (100/document.documentElement.clientWidth)/2;
                            if (zoomPosition >= ((props.magnifier - 1) * -1 * props.imageHeight)) {
                              return zoomPosition;
                            } else {
                              return (props.magnifier - 1) * -1 * props.imageHeight;
                            }
                          }}px;
  border: solid 3px black;
  z-index: 25;
`;

export { ImageZoomContainer, ZoomedImage, Magnifier };