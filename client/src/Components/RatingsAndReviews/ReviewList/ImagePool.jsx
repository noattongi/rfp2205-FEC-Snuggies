import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ImageModal from './ImageModal.jsx'
import {StyleBackground, Container, Image} from '../StyledComponents/AddReviewModal.jsx'
import {ShrinkImg, ImageContainer} from '../StyledComponents/ReviewTile.jsx'

var ImagePool = (props) => {

  const [isImageOpen, setIsImageOpen] = useState(false);

  var toggleImageModal = (e) => {
    setIsImageOpen(!isImageOpen);
  }

  return (
    <ImageContainer>
      <ShrinkImg>
        <img src={props.photo.url} onClick={toggleImageModal} />
      </ShrinkImg>
        {isImageOpen && <ImageModal pic={props.photo.url} closeImageModal={toggleImageModal}/>}
        </ImageContainer>
  );
}

export default ImagePool;

