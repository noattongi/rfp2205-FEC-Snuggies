import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Cards from './Cards.jsx';
import Carousel from './Carousel.jsx';

const RelatedItemsList = (props) => {
  return (
    <div>
      <Cards relatedProd = {props.relatedProd}/>
      <Carousel />
    </div>
  )
}

export default RelatedItemsList;