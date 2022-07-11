import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Cards from './Cards.jsx';
import Carousel from './Carousel.jsx';

const RelatedItemsList = ({product, getProduct, getRelated, related}) => {
  return (
    <div>
      {related.map((id) => {
        <Cards key = {product.id} productId = {product.id} related ={related}/>
      })}
      <Carousel />
    </div>
  )
}

export default RelatedItemsList;