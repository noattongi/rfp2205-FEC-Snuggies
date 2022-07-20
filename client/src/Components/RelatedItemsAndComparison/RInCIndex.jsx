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
    <div>
      <RelatedItemsList getProduct = {getProduct} productId={props.productId} setProductId={props.setProductId} />
      <OutfitList getProduct = {getProduct} productId={props.productId} setProductId={props.setProductId} />
    </div>
  )
}

export default RInCIndex;

// styled components
