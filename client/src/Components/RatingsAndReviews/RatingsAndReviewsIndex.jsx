import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewList from '../RatingsAndReviews/ReviewList/ReviewList.jsx'
import StarBreakDown from '../RatingsAndReviews/OverallBreakDown/RatingsBreakdown.jsx'
import {RRContainer, SingleBar, BarText} from '../RatingsAndReviews/StyledComponents/R&RContainer.jsx'
import {Done, Progress, BodyContainer, AllStarsBodyContainer} from '../RatingsAndReviews/StyledComponents/BreakdownBars.jsx'
import StarRating from '../SharedComponents/StarRating.jsx';
import { ProductOverviewStarContainer } from '../ProductOverview/StyledComponents/Containers.jsx';
import OverAllBreakDown from '../RatingsAndReviews/OverallBreakDown/OverallBreakdown.jsx'


var RatingsAndReviewsIndex = (props) => {
  const [sortby, setSortBy] = useState('relevant');
  const [reviews, setReviews] = useState({});
  const [meta, setMeta] = useState({});
  const [starCount, setStarCount] = useState(0);
  const [fiveStarCount, setFiveStarCount] = useState(0);
  const [fourStarCount, setFourStarCount] = useState(0);
  const [threeStarCount, setThreeStarCount] = useState(0);
  const [twoStarCount, setTwoStarCount] = useState(0);
  const [oneStarCount, setOneStarCount] = useState(0);
  const [ratings, setRatings] = useState({});
  const [filterArray, setFilterArray] = useState([])
  const [fiveRatingFilter, setFiveRatingFilter] = useState(true)
  const [fourRatingFilter, setFourRatingFilter] = useState(false)
  const [threeRatingFilter, setThreeRatingFilter] = useState(false)
  const [twoRatingFilter, setTwoRatingFilter] = useState(false)
  const [oneRatingFilter, setOneRatingFilter] = useState(false)

  const getProductReviews = (productId, sortedBy) => {
    return axios.get('/snuggie/reviews/', {params: {product_id: productId, count: 500, sort: sortedBy}})
    .then((response) => {
      return setReviews(response.data);
    })
    .catch((error) => {
      console.log('Error in getProductReviews', error);
    })
  }

  const getReviewsMeta = (productId) => {
    return axios.get('/snuggie/reviews/meta', {params: {product_id: productId}})
    .then((response) => {
      // console.log(response.data, 'metttaaa datataaaa')
    setMeta(response.data);
    var starTotal = Number(response.data.ratings['1']) + Number(response.data.ratings['2']) + Number(response.data.ratings['3']) + Number(response.data.ratings['4']) + Number(response.data.ratings['5']);
    setStarCount(starTotal);
    setFiveStarCount(Number(response.data.ratings['1']));
    setFourStarCount(Number(response.data.ratings['2']));
    setThreeStarCount(Number(response.data.ratings['3']));
    setTwoStarCount(Number(response.data.ratings['4']));
    setOneStarCount(Number(response.data.ratings['5']));
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
      return axios.put('/snuggie/reviews/helpfulness', {review_id: reviewid})
      .then((response) => {
        getProductReviews(props.productId, sortby)
      })
      .catch((error) => {
        console.log('Error within updating reviews helpfulness from Client Side')
      })
  };

  var reportReview = (reviewid) => {
    console.log(reviewid)
    return axios.put('/snuggie/reviews/report', {review_id: reviewid})
    .then((response) => {
      getProductReviews(props.productId, sortby)
    })
    .catch((error) => {
      console.log('Error within reporting from Client Side')
    })
};

  var changeSortedBy = (sortBy) => {
    setSortBy(sortBy);
    console.log(sortBy);
  }


  var barTotal = (ratingTotal) => {
    var average =  ((ratingTotal / starCount) * 100);
    return average.toString();
  }
  var filteredReviews = (filteredReviews) => {
    console.log(filteredReviews, 'helllllooooooooooo')
  }
  // var filterReviews = (ratingNum) => {
  //   //toggle if filter is on
  //   if(ratingNum === 5) {
  //     console.log('did this wor 5')
  //     setFiveRatingFilter(!fiveRatingFilter)
  //   }
  //   if(ratingNum === 4) {
  //     console.log('did this work 4')
  //     setFourRatingFilter(!fourRatingFilter)
  //   }
  //   if(ratingNum === 3) {
  //     setThreeRatingFilter(!threeRatingFilter)
  //   }
  //   if(ratingNum === 2) {
  //     setTwoRatingFilter(!twoRatingFilter)
  //   }
  //    if(ratingNum === 1) {
  //     setOneRatingFilter(!oneRatingFilter)
  //   }
  //   //filter based on toggles
  //   let filtered = reviews.results.filter((review) => {
  //     (fiveRatingFilter === true && review.ratings === 5) &&
  //     (fourRatingFilter === true && review.ratings === 4) &&
  //     (threeRatingFilter === true && review.ratings === 3) &&
  //     (twoRatingFilter === true && review.ratings === 2) &&
  //     (oneRatingFilter === true && review.ratings === 1)
  //   });
  //   console.log(oneRatingFilter, fiveRatingFilter)
  //   console.log("filterrreddd", filtered)
  //   setFilterArray(filtered)
  //   console.log(filterArray, 'fiillllterrrr')
  // }

  // var filterToggle = (rating) => {
  //   if(rating === 5) {
  //     setFiveRatingFilter(!fiveRatingFilter)
  //   } else if(rating === 4) {
  //     setFourRatingFilter(!fourRatingFilter)
  //   } else if(rating === 3) {
  //     setThreeRatingFilter(!threeRatingFilter)
  //   } else if(rating === 2) {
  //     setTwoRatingFilter(!twoRatingFilter)
  //   } else if(rating === 1) {
  //     setOneRatingFilter(!oneRatingFilter)
  //   }

  // }

  useEffect(() => {
    if (props.productId) {
      getProductReviews(props.productId, sortby);
      getReviewsMeta(props.productId);
    }

  }, [props.productId, sortby, starCount, ratings]);

  // console.log(meta, 'reviiiews')
  return (
    <div>
    <RRContainer>
    <OverAllBreakDown metaData={meta} filteredReviews={filteredReviews} reviewData={meta.ratings} productReviews={reviews} fiveTotal={barTotal(fiveStarCount)} fourTotal={barTotal(fourStarCount)} threeTotal={barTotal(threeStarCount)} twoTotal={barTotal(twoStarCount)} oneTotal={barTotal(oneStarCount)}/>
    <ReviewList productReviews={reviews} metaData={meta} sortedBy={sortby} changeSortedBy={changeSortedBy} postReview={postReview} chosenProduct={props.chosenProduct} upVoteHelpfulness={upVoteHelpfulness} reportReview={reportReview}/>
    </RRContainer>
    </div>
  )
}

export default RatingsAndReviewsIndex