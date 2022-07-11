import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import RelatedItemsList from './RelatedItemsList.jsx';
import OutfitList from './OutfitList.jsx';

const RInCIndex = () => {
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([])
  const getProduct = (productId) => {
    return axios.get('/snuggie/products/', {params: {product_id: productId}})
    .then((response) => {
      setProduct(response.data);
    })
    .catch((error) => {
      console.log('Error in getProduct', error)
    })
  }
  const getRelated = (productId) => {
    return axios.get('/snuggie/products', {params: {product_id: productId + '/related'}})
    .then((response) => {
      setRelated(response.data);
    })
    .catch((error) => {
      console.log('Error in getRelated', error)
    })
  }
  return (
    <div>
      {/* invoke functions */}
      {console.log('product', product)}
      {console.log('related', related)}
      <RelatedItemsList product = {product} getProduct = {getProduct} getRelated = {getRelated} related = {related}/>
      <OutfitList />
    </div>
  )
}

export default RInCIndex;