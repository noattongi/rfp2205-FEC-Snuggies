import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewList from '../RatingsAndReviews/ReviewList/ReviewList.jsx'

var RatingsAndReviewsIndex = (props) => {

  const getProductReviews = (productId) => {
    return axios.get('/snuggie/reviews/', {params: {product_id: '?product_id=' + productId}})
    .then((response) => {
      setProduct(response.data);
    })
    .catch((error) => {
      console.log('Error in getProduct', error)
    })
  }


  return (
    <ReviewList/>
  )
}

export default RatingsAndReviewsIndex