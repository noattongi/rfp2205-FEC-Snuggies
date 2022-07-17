import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ComparisonModal from './ComparisonModal.jsx'
import styled from 'styled-components';

const RelatedCards = (props) => {
  const [modal, setModal] = useState(false)
  const products = props.relatedProd.slice(props.relatedIndex, props.relatedIndex + 4)
  var modalToggle = () => {
    setModal(!modal)
  }
  useEffect(() => {
    console.log('index', props.relatedIndex)
    console.log('slice', props.relatedProd.slice(props.relatedIndex, props.relatedIndex + 4))
    console.log('related id', props.relatedId)
  }, [props.relatedIndex])
  const handleCardClick = (id) => {
    return props.setProductId(id).then(() => {props.setRelatedIndex(0)})
  }
  return (
    <>
    {products?.map((prod) => {
      return (
          <CardBox key={prod.id} onClick={(e) => {handleCardClick(prod.id)}}>
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
