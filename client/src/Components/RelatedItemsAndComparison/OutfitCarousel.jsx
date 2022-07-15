import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Carousel = (props) => {
  // conditional render if more than four cards
  // when click, display currentView from [0, 3] -> [1, 4]
  async function handleCarousel() {
    if (props.outfitId[props.index + 4]) {
      return props.setIndex(props.index + 1)
    } else {
      return props.setIndex(props.index)
    }

  }
  return (
      <button onClick={handleCarousel}>></button>
  )
}

export default Carousel;

// styled component
