import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../../App.js';
var axios = require('axios');

export default function ImageModal ( {toggleImage, url} ){
  return (
    <Background>
      <ModalContent>
        <Image src={url} />
        <CloseIcon onClick={e => toggleImage(false)} className="fa-solid fa-xmark"> </CloseIcon>
      </ModalContent>
    </Background>
  )
};

//styled components
var Background = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  z-index: 52;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  backdrop-filter: blur(8px);
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

var CloseIcon = styled.i`
  position: absolute;
  display: flex;
  font-size: 35px;
  :hover {
    color: #EF8354;
    text-decoration: none;
    cursor: pointer;
  };
  height: 30px;
  right: 20px;
`;

var ModalContent = styled.div`
  display: flex;
  background-color: #fefefe;
  margin: 2% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 800px;
  position: relative;
  justify-content: center;
`

var Image = styled.img`
  height: 500px;
  width: 50vw;
`;