import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Cards from './Cards.jsx';
import Carousel from './Carousel.jsx';
import styled from 'styled-components';

const RelatedItemsList = (props) => {
  return (
    <>
      <Cards relatedProd = {props.relatedProd}/>
      <Carousel />
    </>
  )
}

export default RelatedItemsList;