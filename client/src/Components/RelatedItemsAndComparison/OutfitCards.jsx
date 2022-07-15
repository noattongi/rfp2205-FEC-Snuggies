import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const OutfitCards = (props) => {
  useEffect(() => {
    // console.log('child component', props.outfitId)
  }, [props.outfitProd, props.outfitId])

  async function handleDeleteClick(id) {
    if (props.outfitId.length > 1) {
      var temp = props.outfitId.splice(props.outfitId.indexOf(id) - 1, 1);
      return props.setOutfitId(temp);
    } else {
      return props.setOutfitId([]);
    }
  }
  return (
    <div>
    {props.outfitProd?.map((prod) => {
      return (
          <div key={prod.id}>
            <button onClick = {(e) => {handleDeleteClick(prod.id)}}>X</button>
            <p>{prod.category}</p>
            <p>{prod.name}</p>
            <p>{prod.default_price}</p>
            <p>Star Rating</p>
          </div>
       )})}
       </div>
  )
}

export default OutfitCards;
