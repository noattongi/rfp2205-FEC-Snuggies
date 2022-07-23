import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StyleBackgroundImage, ImageContainer, Image, ShrinkImage} from '../StyledComponents/AddReviewModal.jsx';
import { ShrinkImg} from '../StyledComponents/ReviewTile.jsx'
var ImageModal = (props) => {

  const [isImageOpen, setIsImageOpen] = useState(false);

  var toggleImageModal = (e) => {
    setIsImageOpen(!isImageOpen);
  }

  return (
    <StyleBackgroundImage>
      <ImageContainer>
      <button onClick={props.closeImageModal}> X </button>
          <Image src={props.pic} />
      </ImageContainer>
    </StyleBackgroundImage>
  );
}

export default ImageModal;