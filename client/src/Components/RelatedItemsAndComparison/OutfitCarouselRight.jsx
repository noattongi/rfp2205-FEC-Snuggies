import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const OutfitCarouselRight = (props) => {
  // conditional render if more than four cards
  // when click, display currentView from [0, 3] -> [1, 4]
  async function handleCarousel() {
      return props.setOutfitIndex(Number(props.outfitIndex) + 1)
  }
  return (
    <>
      {Boolean(props.outfitProd[props.outfitIndex + 3]) ? <RightClick className="fa-solid fa-arrow-right" onClick={handleCarousel}></RightClick> : null}
    </>
  )
}

export default OutfitCarouselRight;

// styled component
const RightClick = styled.button`
  align-self: center;
  border: solid 2px;
  width: 24px;
  height: 24px;
  position: absolute;
`;