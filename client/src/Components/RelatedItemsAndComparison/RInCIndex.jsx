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
    <RInCContainer>
      <RelatedItemsList getProduct = {getProduct} productId={props.productId} setProductId={props.setProductId} chosenProduct={props.chosenProduct}/>
      <OutfitList getProduct = {getProduct} productId={props.productId} setProductId={props.setProductId} chosenProduct={props.chosenProduct}/>
    </RInCContainer>
  )
}

export default RInCIndex;

// styled components
const RInCContainer = styled.div`
  display: flex;
  font-family: 'Nanum Gothic Coding', monospace;
  flex-direction: column;
  width: 1360px;
`;