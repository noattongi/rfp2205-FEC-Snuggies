import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const RelatedCarouselRight = (props) => {
  // conditional render if more than four cards
  // when click, display currentView from [0, 3] -> [1, 4]
  async function handleCarousel() {
      return props.setRelatedIndex(Number(props.relatedIndex) + 1)
  }
  return (
    <>
      {Boolean(props.relatedProd[props.relatedIndex + 4]) ? <RightClick className="fa-solid fa-arrow-right" onClick={handleCarousel}></RightClick> : null}
    </>
  )
}

export default RelatedCarouselRight;

// styled component
const RightClick = styled.button`
  align-self: center;
  border: solid 2px;
  width: 24px;
  height: 24px;
  position: absolute;
`;