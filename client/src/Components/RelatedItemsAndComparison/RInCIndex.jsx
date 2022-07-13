import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import RelatedItemsList from './RelatedItemsList.jsx';
import OutfitList from './OutfitList.jsx';
import styled from 'styled-components';

const RInCIndex = () => {
  const [product, setProduct] = useState({});
  const [relatedId, setRelatedId] = useState([]);
  const [relatedProd, setRelatedProd] = useState([]);

  const getProduct = (productId) => {
    return axios.get('/snuggie/products', {params: {product_id: productId}})
    .then((response) => {
      var temp = relatedProd;
      temp.push(response.data);
      return temp;
    })
    .then((relProd) => {
      return setRelatedProd(relProd)
    })
    .catch((error) => {
      console.log('Error in getProduct', error)
    })
  }
  const getRelated = (productId) => {
    return axios.get('/snuggie/products', {params: {product_id: productId + '/related'}})
    .then((response) => {
      setRelatedId(response.data);
      return response.data
    })
    .catch((error) => {
      console.log('Error in getRelated', error)
    })
  }
  useEffect(() => {
    getRelated(40344)
    .then((data) => {
      var temp = []
      data.forEach((id) => {
        temp.push(axios.get('/snuggie/products', {params: {product_id: id}})
        .then((res) => { return res.data}))
      })
      return temp;
    })
    .then((array) => {
      Promise.all(array)
      .then((values) => {
        setRelatedProd(values)
      })
    })
    .catch((error) => {
      console.log('useEffect error', error)
    })
  }, [])
  return (
    <div>
      <RelatedContainer>
        <RelatedItemsList relatedProd = {relatedProd}/>
      </RelatedContainer>
      <OutfitContainer>
        <OutfitList />
      </OutfitContainer>
    </div>
  )
}

export default RInCIndex;

// styled components
const RelatedContainer = styled.section`
  display: flex;
  border: 1px solid black;
`;

const OutfitContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;