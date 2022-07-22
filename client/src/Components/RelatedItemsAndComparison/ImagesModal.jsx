import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ImagesModal = (props) => {
  return (
    <ModalBackground onClick={(e) => {props.imgModalToggle()}}>
      <ModalContainer>
        <ModalBody>
          {props.clickedImg.map((img, i) => {
            return <ThumbnailImage key={i} src={img.thumbnail_url} />
          })}
        </ModalBody>
    </ModalContainer>
  </ModalBackground>
  )
}

export default ImagesModal;

const ModalBackground =styled.div`
  backdrop-filter: blur(8px);
  display: block;
  position: fixed;
  z-index: 26;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  `;

  const ModalContainer = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 1000px;
  `;

  const ModalBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 1rem;
  text-align: center;
  `;

  const ThumbnailImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  width: 120px;
  height: 120px;
  background-color: white;
  border: solid;
  border-color: black;
  :hover {
    cursor: pointer;
  }
`;