// The 'main' component that keeps all of the pieces of the gallery together

// Import stuff
import React, { useState, useEffect } from 'react';
import { ImageGalleryContainer } from '../StyledComponents/Containers.jsx';
import MainImage from './MainImage.jsx';
import ThumbnailList from './ThumbnailList.jsx';

// The component
var Gallery = (props) => {

  const [imageThumbnails, setImageThumbnails] = useState([]);
  const [chosenImageUrl, setChosenImageUrl] = useState('');

  // When the chosenStyle state is updated, update this component's hooks accordingly
  useEffect(() => {
    if (props.chosenStyle.photos) {
      setImageThumbnails(props.chosenStyle.photos);
      setChosenImageUrl(props.chosenStyle.photos[0].url)
    }
  }, [props.chosenStyle])

  return (

    <ImageGalleryContainer>
      <ThumbnailList imageThumbnails={imageThumbnails} />
      <MainImage chosenImageUrl={chosenImageUrl} />
    </ImageGalleryContainer>

  );
}

// Export it
export default Gallery;