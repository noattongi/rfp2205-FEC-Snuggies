// The Image zoom/magnifier when the main image is in zoom mode

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// Container to hold everything in the ImageZoom component
const ImageZoomContainer = styled.section`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 1353px;
  height: 740px;
  background-color: #828e82;
  z-index: 15;
  border: solid 3px;
  border-radius: 10px 10px 10px 10px;
  border-color: #120309;
`;

// Overlay that hold image zoom (magnifier)
const ImageZoomOverlay = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 15;
  width: 1353px;
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
  width: 1353px;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: ${(props) => {return (props.imageWidth * props.magnifier)}}px ${(props) => {return (props.imageHeight * props.magnifier)}}px;
  background-position-x: ${(props) => {
                            var zoomPosition = props.x * (-1) * props.magnifier + (100/document.documentElement.clientWidth)/2;
                            // if ((zoomPosition < -1 * props.imageWidth * .75)) {
                            //   return 0;
                            // }
                            return props.imageWidth * (props.magnifier - 1) + (100/document.documentElement.clientWidth) + zoomPosition - props.imageWidth*.75;
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
  background-color: #828e82;
  z-index: 25;
`;

export { ImageZoomContainer, ImageZoomOverlay, ZoomedImage, Magnifier };