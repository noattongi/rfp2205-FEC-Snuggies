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
      {Boolean(props.relatedProd[props.relatedIndex + 3] && props.relatedIndex > 0) ? <button onClick={handleBack}>⬅️</button> : null}
    </>
  )
}

export default RelatedCarouselLeft;

// styled component
