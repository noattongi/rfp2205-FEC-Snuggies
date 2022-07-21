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
      {Boolean(props.outfitProd[props.outfitIndex + 3]) ? <button onClick={handleCarousel}>➡️</button> : null}
    </>
  )
}

export default OutfitCarouselRight;

// styled component
