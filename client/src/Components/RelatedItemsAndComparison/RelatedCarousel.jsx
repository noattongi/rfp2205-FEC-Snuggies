import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const RelatedCarousel = (props) => {
  // conditional render if more than four cards
  // when click, display currentView from [0, 3] -> [1, 4]
  async function handleCarousel() {
    // if (props.relatedId[props.relatedIndex + 4]) {
      return props.setRelatedIndex(Number(props.relatedIndex) + 1)
    // } else {
    //   return props.setRelatedIndex(props.index)
    // }
  }
  return (
      <button onClick={handleCarousel}>></button>
  )
}

export default RelatedCarousel;

// styled component
