import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ComparisonModal from './ComparisonModal.jsx'
const Cards = (props) => {
  return (
    <div>
    {props.relatedProd?.map((prod) => {
      return (
      <div key = {prod.id}>
        <ComparisonModal />
        <p>{prod.category}</p>
        <p>{prod.name}</p>
        <p>{prod.default_price}</p>
        <p>Star Rating</p>
        <p>_______________________</p>
       </div>
       )})}
    </div>
  )
}

export default Cards;