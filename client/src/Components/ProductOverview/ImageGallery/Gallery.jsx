// The 'main' component that keeps all of the pieces of the gallery together

// Import stuff
import React, { useState, useEffect } from 'react';
import { ImageGalleryContainer } from '../StyledComponents/Containers.jsx';
import { RelativeWrapper } from '../StyledComponents/ImageGallery/MainImage.jsx';
import MainImage from './MainImage.jsx';
import ThumbnailList from './ThumbnailList.jsx';

// The component
var Gallery = (props) => {

  const [imageThumbnails, setImageThumbnails] = useState([]);
  const [chosenImageUrl, setChosenImageUrl] = useState('');
  const [chosenImageIndex, setChosenImageIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // When the chosenStyle state is updated, update this component's hooks accordingly
  useEffect(() => {
    if (props.chosenStyle.photos) {
      setImageThumbnails(props.chosenStyle.photos);
      setChosenImageUrl(props.chosenStyle.photos[chosenImageIndex].url);
      if (chosenImageIndex) {
        setChosenImageIndex(chosenImageIndex);
      } else {
        setChosenImageIndex(0);
      }
      setMaxIndex(props.chosenStyle.photos.length - 1);
    }
  }, [props.chosenStyle])

  // When the chosenImageIndex is updated, update the chosenImageUrl accordingly
  useEffect(() => {
    if (props.chosenStyle.photos) {
      setChosenImageUrl(props.chosenStyle.photos[chosenImageIndex].url);
    }
  }, [chosenImageIndex])

  return (

    <ImageGalleryContainer>
      <RelativeWrapper>
        <ThumbnailList imageThumbnails={imageThumbnails} chosenImageUrl={chosenImageUrl} setChosenImageUrl={setChosenImageUrl} chosenImageIndex={chosenImageIndex} setChosenImageIndex={setChosenImageIndex} />
        <MainImage chosenImageUrl={chosenImageUrl} chosenImageIndex={chosenImageIndex} setChosenImageIndex={setChosenImageIndex} maxIndex={maxIndex} />
      </RelativeWrapper>
    </ImageGalleryContainer>

  );
}

// Export it
export default Gallery;