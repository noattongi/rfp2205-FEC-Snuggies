import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const Cards = (props) => {
  console.log('props', props)
  return (
    <div>
    {props.relatedProd?.map((prod, i) => {
      <div>
        {/* {console.log(`index ${i}`, prod)} */}
      Product Category
      Product Name
      Price
      Star Rating
       </div>
    })}
    </div>

  )
}

export default Cards;