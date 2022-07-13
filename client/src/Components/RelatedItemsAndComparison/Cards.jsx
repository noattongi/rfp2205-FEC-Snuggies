import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ComparisonModal from './ComparisonModal.jsx'
import {CardContainer} from './StyledComponents/Containers.jsx';
const Cards = (props) => {
  const [modal, setModal] = useState(false)
  var modalToggle = () => {
    setModal(!modal)
  }

  return (

    <div>
    {props.relatedProd?.map((prod) => {
      return (
        <CardContainer>
            <div key = {prod.id}>
            <div onClick = {modalToggle}>⭐️</div>
            {modal ? <ComparisonModal /> : null }
            <p>{prod.category}</p>
            <p>{prod.name}</p>
            <p>{prod.default_price}</p>
            <p>Star Rating</p>
            <p>_______________________</p>
          </div>
        </CardContainer>
       )})}
    </div>
  )
}

export default Cards;