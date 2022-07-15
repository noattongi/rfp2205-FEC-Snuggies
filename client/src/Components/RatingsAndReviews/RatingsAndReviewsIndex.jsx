import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewList from '../RatingsAndReviews/ReviewList/ReviewList.jsx'

var RatingsAndReviewsIndex = (props) => {

  const [sortby, setSortBy] = useState('relevant');
  const [reviews, setReviews] = useState({});
  const [meta, setMeta] = useState({})



  const getProductReviews = (productId, sortedBy) => {
    return axios.get('/snuggie/reviews/', {params: {product_id: productId, count: 100, sort: sortedBy}})
    .then((response) => {
      console.log(response.data)
      return setReviews(response.data);
    })
    .catch((error) => {
      console.log('Error in getProductReviews', error)
    })
  }

  const getReviewsMeta = (productId) => {
    return axios.get('/snuggie/reviews/meta', {params: {product_id: productId}})
    .then((response) => {
      // console.log(response.data, 'metttaaa datataaaa')
      return setMeta(response.data);
    })
    .catch((error) => {
      console.log('Error in get meta data client side', error)
    })
  }

  var postReview = (postReviewObj) => {
    // console.log(postReviewObj)
    return axios.post('/snuggie/reviews', postReviewObj)
    .then((response) => {
      getProductReviews(props.productId, sortby)
      console.log(response, 'response in postReview func')
    })
    .catch((error) => {
      console.log( error,'Error in Post ProductReviews')
    })
  }

  var upVoteHelpfulness = (reviewid) => {
    // if (!voted) {
      axios.put('/snuggie/reviews/helpfulness', {review_id: reviewid})
      .then((response) => {
        getProductReviews(props.productId, sortby)
        // still needs to be refactored
        // if (!truth) {
        //   setHelpful(helpful + 1);
        //   setTruth(true);
        // }
        // voted = true;
      })
      .catch((error) => {
        console.log('Error within updating reviews helpfulness from Client Side')
      })
    // }
  };

  var changeSortedBy = (sortBy) => {
    setSortBy(sortBy)
    console.log(sortBy)
  }


  useEffect(() => {
    if (props.productId) {
      getProductReviews(props.productId, sortby)
      getReviewsMeta(props.productId)
    }
  }, [props.productId, sortby]);


  return (
    <div>
      <div>
      </div>
    <ReviewList productReviews={reviews} metaData={meta} sortedBy={sortby} changeSortedBy={changeSortedBy} postReview={postReview} chosenProduct={props.chosenProduct} upVoteHelpfulness={upVoteHelpfulness}/>
    </div>
  )
}

export default RatingsAndReviewsIndex