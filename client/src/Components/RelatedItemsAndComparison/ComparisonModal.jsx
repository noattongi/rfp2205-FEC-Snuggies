import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Cards from './Cards.jsx';
import Carousel from './Carousel.jsx';
import Add from './Add.jsx';

const OutfitList = () => {
  return (
    <Add />
    <Cards />
    <Carousel />
  )
}