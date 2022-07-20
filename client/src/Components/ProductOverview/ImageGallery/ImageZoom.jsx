import React, { useState, useEffect } from 'react';
import { ImageZoomContainer, Magnifier, ZoomedImage } from '../StyledComponents/ImageGallery/ImageZoom.jsx';

const ImageZoom = (props) => {

  /* Component needs
  img src: props.imageUrl
  zoom: 2.5x
  */

  const [magnifier, setMagnifier] = useState(2.5); // magnitude of zoom
  const [magnifying, setMagnifying] = useState(false); // whether or not the magnifier is applied
  const [[imageWidth, imageHeight], setSize] = useState([0, 0]);
  const [[x, y], setMousePosition] = useState([0, 0]); // for keeping track of the mouse's position when hovering over the image to zoom

  // Function to calculate the position of the magnifier div
  const handleMouseEnter = (event) => {
    const imageElement = event.currentTarget;
    const { width, height } = imageElement.getBoundingClientRect();
    setSize([width, height]);
    setMagnifying(true);
  }

  // Function to handle updating position of mouse cursor when mouse moves over image to zoom
  const handleMouseMove = (event) => {
    const imageElement = event.currentTarget;
    const { top, left } = imageElement.getBoundingClientRect();
    // Calculate the mouse cursor position on the image to zoom
    // Coordinates on page - coordinates of image top/left position - scroll offsets of page
    const x = event.pageX - left - window.pageXOffset;
    const y = event.pageY - top - window.pageYOffset;
    setMousePosition([x, y]);
  }

  return (
    <ImageZoomContainer>
      <ZoomedImage src={props.imageUrl}
        onMouseEnter={(event) => { handleMouseEnter(event); }}
        onMouseLeave={() => { setMagnifying(false); }}
        onMouseMove={(event) => { handleMouseMove(event) }}
        onClick={() => { props.setZoomed(false); }}
      />
      {magnifying && <Magnifier imageUrl={props.imageUrl} magnifier={magnifier} x={x} y={y} imageWidth={imageWidth} imageHeight={imageHeight} />}
    </ImageZoomContainer>
  );
}

export default ImageZoom;