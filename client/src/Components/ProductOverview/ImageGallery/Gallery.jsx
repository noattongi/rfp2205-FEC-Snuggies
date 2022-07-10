// The 'main' component that keeps all of the pieces of the gallery together

// Import stuff
import React, { useState } from 'react';
import { ImageGalleryContainer } from '../StyledComponents/Containers.jsx';
import { ImageThumbnails, Thumbnail } from '../StyledComponents/ImageGallery/ImageThumbnails.jsx';
import MainImage from '../StyledComponents/ImageGallery/MainImage.jsx';

// The component
var Gallery = (props) => {

  return (
    <div>
      <ImageGalleryContainer>
        <ImageThumbnails>
          <Thumbnail></Thumbnail><Thumbnail></Thumbnail><Thumbnail></Thumbnail>
        </ImageThumbnails>
        <MainImage></MainImage>
      </ImageGalleryContainer>
    </div>
  );
}

// Export it
export default Gallery;