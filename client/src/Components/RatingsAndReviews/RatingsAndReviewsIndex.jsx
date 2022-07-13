import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewList from '../RatingsAndReviews/ReviewList/ReviewList.jsx'

var RatingsAndReviewsIndex = (props) => {
  const [sortby, setSortBy] = useState('newest');
  const [reviews, setReviews] = useState({});


  const getProductReviews = (productId, sortedBy) => {
    return axios.get('/snuggie/reviews/', {params: {product_id: productId, count: 50, sort: sortedBy}})
    .then((response) => {
      return setReviews(response.data);
    })
    .catch((error) => {
      console.log('Error in getProductReviews', error)
    })
  }

  var changeSortedBy = (sortBy) => {
    setSortBy(sortBy)
    console.log(sortBy)
  }

  useEffect (() => {

    getProductReviews(40347, sortby)
  }, [sortby])


  return (
    <div>
      <div>
      </div>
    <ReviewList productReviews={reviews} sortedBy={sortby} changeSortedBy={changeSortedBy}/>
    </div>
  )
}

export default RatingsAndReviewsIndex