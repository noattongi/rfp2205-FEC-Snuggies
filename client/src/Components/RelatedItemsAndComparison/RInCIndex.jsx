import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import RelatedItemsList from './RelatedItemsList.jsx';
import OutfitList from './OutfitList.jsx';
import styled from 'styled-components';

const RInCIndex = () => {
  const [product, setProduct] = useState({});

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
      <RelatedItemsList getProduct = {getProduct}/>
      <OutfitList getProduct = {getProduct}/>
    </div>
  )
}

export default RInCIndex;

// styled components
