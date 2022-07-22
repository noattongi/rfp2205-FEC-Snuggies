import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import RelatedItemsList from './RelatedItemsList.jsx';
import OutfitList from './OutfitList.jsx';
import styled from 'styled-components';

const RInCIndex = (props) => {

  // useEffect(() => {
  // }, [props.productId])

  const getProduct = (productId) => {
    return axios.get('/snuggie/products', {params: {product_id: productId}})
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log('Error in getProduct', error)
    })
  }

  return (
    <div id='RelatedItems'>
      <RelatedItemsList getProduct = {getProduct} productId={props.productId} chosenProduct={props.chosenProduct} setProductId={props.setProductId} setChosenProduct={props.setChosenProduct} />
      <OutfitList getProduct = {getProduct} productId={props.productId} chosenProduct={props.chosenProduct} setProductId={props.setProductId} setChosenProduct={props.setChosenProduct}/>
    </div>
  )
}

export default RInCIndex;

// styled components
const RInCContainer = styled.div`
  display: flex;
  font-family: 'Nanum Gothic Coding', monospace;
  flex-direction: column;
  width: 1354px;
`;