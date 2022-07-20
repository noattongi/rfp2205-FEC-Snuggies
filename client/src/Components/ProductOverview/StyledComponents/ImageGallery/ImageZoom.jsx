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
                            console.log(zoomPosition, props.imageWidth);
                            // If the width of the image is smaller than the size of the viewport, just render the whole width
                            if ((props.imageWidth * props.magnifier) <  (100/document.documentElement.clientWidth)) {
                              return 0;
                            }
                            if (zoomPosition - props.imageWidth >= 0) {
                              console.log('in up');
                              return zoomPosition;
                            } else {
                              console.log('in down');
                              return props.imageWidth * (props.magnifier - 1) + (100/document.documentElement.clientWidth) + zoomPosition - props.imageWidth*.75;
                            }
                            // if (zoomPosition > props.imageWidth * -1 * (props.magnifier - 1)) {
                            //   return zoomPosition;
                            // } else {
                            //   console.log('RAH!', props.imageWidth * -1 * (props.magnifier) + (100/document.documentElement.clientWidth));
                            //   return props.imageWidth * -1 * (props.magnifier) + (100/document.documentElement.clientWidth) - zoomPosition;
                            // }
                            // return props.imageWidth * (props.magnifier - 1) + (100/document.documentElement.clientWidth) + zoomPosition;
                          }}px;
  background-position-y: ${(props) => {
                            var zoomPosition = props.y * (-1) * props.magnifier + 740/2;
                            if (zoomPosition > 0) {
                              return 0;
                            } else if (zoomPosition >= ((props.magnifier - 1) * -1 * props.imageHeight)) {
                              return zoomPosition;
                            } else {
                              return (props.magnifier - 1) * -1 * props.imageHeight;
                            }
                          }}px;
  border: solid 3px black;
  z-index: 25;
`;

export { ImageZoomContainer, ZoomedImage, Magnifier };