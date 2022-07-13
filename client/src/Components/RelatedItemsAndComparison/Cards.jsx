import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ComparisonModal from './ComparisonModal.jsx'
import styled from 'styled-components';

const Cards = (props) => {
  const [modal, setModal] = useState(false)
  var modalToggle = () => {
    setModal(!modal)
  }

  return (

    <div>
    {props.relatedProd?.map((prod) => {
      return (
        <CardBox>
            <div key = {prod.id}>
            <div onClick = {modalToggle}>⭐️</div>
            {modal ? <ComparisonModal modalToggle = {modalToggle}/> : null }
            <p>{prod.category}</p>
            <p>{prod.name}</p>
            <p>{prod.default_price}</p>
            <p>Star Rating</p>
          </div>
        </CardBox>
       )})}
    </div>
  )
}

export default Cards;

const CardBox = styled.section`
  display: flex;
`;