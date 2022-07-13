import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Cards from './Cards.jsx';
import Carousel from './Carousel.jsx';
import styled from 'styled-components';

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

// styled components
const CardContainer = styled.section`
  display: flex;
  flex-direction: row;
`;