import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Cards from './Cards.jsx';
import Carousel from './Carousel.jsx';

const RelatedItemsList = ({getProduct, relatedProd}) => {
  return (
    <div>
      {/* {relatedProd?.map((prod) => {
        <Cards key = {prod.id} prod ={prod}/>
      })} */}
      <Carousel />
    </div>
  )
}

export default RelatedItemsList;