import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ComparisonModal from './ComparisonModal.jsx'
import styled from 'styled-components';

const RelatedCards = (props) => {
  const [modal, setModal] = useState(false)
  const [products, setProducts] = useState([])
  var modalToggle = () => {
    setModal(!modal)
  }
  useEffect(() => {
    console.log('index', props.relatedIndex)
    console.log('slice', props.relatedProd.slice(props.relatedIndex, props.relatedIndex + 4))
    console.log('related id', props.relatedId)
    setProducts(props.relatedProd.slice(props.relatedIndex, props.relatedIndex + 4));
  }, [props.relatedIndex, props.relatedProd])
  async function handleCardClick(id) {
    return props.setProductId(id).then(() => {props.setRelatedIndex(0)})
  }
  return (
    <>
    {products?.map((prod) => {
      return (
          <CardBox key={prod.id}>
            <div onClick = {modalToggle}>⭐️</div>
            {modal ? <ComparisonModal modalToggle = {modalToggle} clickedProd={prod} chosenProduct={props.chosenProduct}/> : null }
            <p onClick={(e) => {handleCardClick(prod.id)}}>{prod.category}</p>
            <p onClick={(e) => {handleCardClick(prod.id)}}>{prod.name}</p>
            <p onClick={(e) => {handleCardClick(prod.id)}}>{prod.default_price}</p>
            <p onClick={(e) => {handleCardClick(prod.id)}}>Star Rating</p>
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
