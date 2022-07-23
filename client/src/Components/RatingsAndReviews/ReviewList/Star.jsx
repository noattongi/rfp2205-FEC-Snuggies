import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StarContainer = styled.div`
position: relative;
display: inline;
flex-direction:
width: 100%;
`;

const EmptyStarModal = styled.i`
  color: gray;
`;
const FilledStarModal = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  color: yellow;
  overflow: hidden;
  height: 100%;
  z-index: 10;
`;

const Star = (props) => {


  return (
    <StarContainer>
      <EmptyStarModal
        className="fa fa-star-o"
        onClick={props.onClick}
        color="lightgray"
      />
      {props.filled && <FilledStarModal
        className="fa-solid fa-star"
        onClick={props.onClick}
        color="yellow"
        />}
    </StarContainer>
  );
}


export default Star;
