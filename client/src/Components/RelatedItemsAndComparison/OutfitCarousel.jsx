import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const OutfitCarousel = (props) => {
  // conditional render if more than four cards
  // when click, display currentView from [0, 3] -> [1, 4]
  async function handleCarousel() {
      return props.setOutfitIndex(Number(props.outfitIndex) + 1)
  }
  async function handleBack() {
      return props.setOutfitIndex(Number(props.outfitIndex) - 1)
  }
  return (
    <>
      {Boolean(props.outfitProd[props.outfitIndex + 4]) ? <button onClick={handleCarousel}>➡️</button> : null}
      {Boolean(props.outfitProd[props.outfitIndex + 3] && props.outfitIndex > 0) ? <button onClick={handleBack}>⬅️</button> : null}
    </>
  )
}

export default OutfitCarousel;

// styled component
