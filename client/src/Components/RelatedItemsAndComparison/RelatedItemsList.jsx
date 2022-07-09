import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Cards from './Cards.jsx';
import Carousel from './Carousel.jsx';

const RelatedItemsList = () => {
  return (
    <Cards />
    <Carousel />
  )
}