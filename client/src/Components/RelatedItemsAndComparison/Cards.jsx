import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const Cards = (props) => {
  console.log('props', props)
  return (
    <div>
    {props.relatedProd?.map((prod) => {
      return (
      <div>
        <p>{prod.category}</p>
        <p>{prod.name}</p>
        <p>{prod.default_price}</p>
        <p>Star Rating</p>
       </div>
       )})}
    </div>
  )
}

export default Cards;