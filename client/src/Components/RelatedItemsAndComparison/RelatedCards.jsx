import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ComparisonModal from './ComparisonModal.jsx'
import styled from 'styled-components';

const RelatedCards = (props) => {
  const [modal, setModal] = useState(false)
  var modalToggle = () => {
    setModal(!modal)
  }

  const handleCardClick = (id) => {
    return props.setProductId(id)
  }
  return (
    <>
    {props.relatedProd?.map((prod) => {
      return (
          <CardBox key={prod.id} onClick={(e) => { handleCardClick(prod.id)}}>
            <div onClick = {modalToggle}>⭐️</div>
            {modal ? <ComparisonModal modalToggle = {modalToggle}/> : null }
            <p>{prod.category}</p>
            <p>{prod.name}</p>
            <p>{prod.default_price}</p>
            <p>Star Rating</p>
          </CardBox>
       )})}
       </>
  )
}

export default RelatedCards;

// styled componenents
const CardBox = styled.div`
  position: flex;
  justify-content: flex-start;
  border: 1px solid black;
  text-align: center;
  margin: 20px;
  width: 25%;
`;
