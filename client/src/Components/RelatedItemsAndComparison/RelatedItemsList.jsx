import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Cards from './Cards.jsx';
import Carousel from './Carousel.jsx';
import {CardContainer} from './StyledComponents/Containers.jsx'

const RelatedItemsList = (props) => {
  return (
    <div>
      <CardContainer>
        <Cards relatedProd = {props.relatedProd}/>
      </CardContainer>
      <Carousel />
    </div>
  )
}

export default RelatedItemsList;