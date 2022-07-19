import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StyleBackground, Container, Image, ShrinkImage} from '../StyledComponents/AddReviewModal.jsx';
import {ImageContainer, ShrinkImg} from '../StyledComponents/ReviewTile.jsx'
var ImageModal = (props) => {

  const [isImageOpen, setIsImageOpen] = useState(false);

  var toggleImageModal = (e) => {
    setIsImageOpen(!isImageOpen);
  }

  return (
    <StyleBackground>
    <div>
      <Container>
      <div>
      <button onClick={props.closeImageModal}> X </button>
          <Image src={props.pic} />
      </div>
      </Container>
    </div>
    </StyleBackground>
  );
}

export default ImageModal;