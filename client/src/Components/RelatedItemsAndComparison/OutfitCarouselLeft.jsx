import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const OutfitCarouselLeft = (props) => {
  // conditional render if more than four cards
  // when click, display currentView from [0, 3] -> [1, 4]
  async function handleBack() {
      return props.setOutfitIndex(Number(props.outfitIndex) - 1)
  }
  return (
    <>
      {Boolean(props.outfitProd[props.outfitIndex + 3] && props.outfitIndex > 0) ? <button onClick={handleBack}>⬅️</button> : null}
    </>
  )
}

export default OutfitCarouselLeft;

// styled component
