import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StyleBackground, Container, Image } from '../StyledComponents/AddReviewModal.jsx';

var ImageModal = (props) => {

  const [isImageOpen, setIsImageOpen] = useState(false)

  var toggleImageModal = (e) => {
    setIsImageOpen(!isImageOpen)
  }

  return (
    <StyleBackground>
    <div>
      <Container>
      <div>
      <button onClick={props.closeImageModal}> X </button>
        <Image>
          <img src={props.pic} />
        </Image>
      </div>
      </Container>
    </div>
    </StyleBackground>
  );
}

export default ImageModal;