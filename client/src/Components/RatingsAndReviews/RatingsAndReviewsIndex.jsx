import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewList from '../RatingsAndReviews/ReviewList/ReviewList.jsx'

var RatingsAndReviewsIndex = (props) => {
  const [reviews, setReviews] = useState({});

  const getProductReviews = (productId) => {
    return axios.get('/snuggie/reviews/', {params: {product_id: productId, count: 50}})
    .then((response) => {
      return setReviews(response.data);
    })
    .catch((error) => {
      console.log('Error in getProductReviews', error)
    })
  }
  useEffect (() => {
    getProductReviews(40347)
  }, [])



  return (
    <div>
    <ReviewList productReviews={reviews}/>
    </div>
  )
}

export default RatingsAndReviewsIndex