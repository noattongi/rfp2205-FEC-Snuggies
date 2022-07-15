import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewList from '../RatingsAndReviews/ReviewList/ReviewList.jsx'

var RatingsAndReviewsIndex = (props) => {
  const [sortby, setSortBy] = useState('relevant');
  const [reviews, setReviews] = useState({});
  const [meta, setMeta] = useState({})


  const getProductReviews = (productId, sortedBy) => {
    return axios.get('/snuggie/reviews/', {params: {product_id: productId, count: 50, sort: sortedBy}})
    .then((response) => {
      return setReviews(response.data);
    })
    .catch((error) => {
      console.log('Error in getProductReviews', error)
    })
  }

  const getReviewsMeta = (productId) => {
    console.log('step one')
    return axios.get('/snuggie/reviews/meta', {params: {product_id: productId}})
    .then((response) => {
      console.log(response.data, 'metttaaa datataaaa')
      return setMeta(response.data);
    })
    .catch((error) => {
      console.log('Error in get meta data client side', error)
    })
  }


  var postReview = (postReviewObj) => {
    console.log(postReviewObj)
    return axios.post('/snuggie/reviews', postReviewObj)
    .then((response) => {
      getProductReviews(40347, sortby)
      console.log(response, 'response in postReview func')
    })
    .catch((error) => {
      console.log( error,'Error in Post ProductReviews')
    })
  }

  var changeSortedBy = (sortBy) => {
    setSortBy(sortBy)
    console.log(sortBy)
  }

  useEffect (() => {

    getProductReviews(40347, sortby)
    getReviewsMeta(40347)
  }, [sortby])


  return (
    <div>
      <div>
      </div>
    <ReviewList productReviews={reviews} metaData={meta} sortedBy={sortby} changeSortedBy={changeSortedBy} postReview={postReview}/>
    </div>
  )
}

export default RatingsAndReviewsIndex