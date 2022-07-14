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

  return (
    <>
    {props.relatedProd?.map((prod) => {
      return (
          <div>
            <div onClick = {modalToggle}>⭐️</div>
            {modal ? <ComparisonModal modalToggle = {modalToggle}/> : null }
            <p>{prod.category}</p>
            <p>{prod.name}</p>
            <p>{prod.default_price}</p>
            <p>Star Rating</p>
          </div>
       )})}
       </>
  )
}

export default RelatedCards;
