import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const RelatedCarouselLeft = (props) => {
  // conditional render if more than four cards
  // when click, display currentView from [0, 3] -> [1, 4]
  async function handleBack() {
      return props.setRelatedIndex(Number(props.relatedIndex) - 1)
  }
  return (
    <>
      {Boolean(props.relatedProd[props.relatedIndex + 3] && props.relatedIndex > 0) ? <LeftClick className="fa-solid fa-arrow-left" onClick={handleBack}></LeftClick> : null}
    </>
  )
}

export default RelatedCarouselLeft;

// styled component
const LeftClick = styled.button`
  align-self: center;
  border: solid 2px;
  width: 24px;
  height: 24px;
  position: absolute;
`;