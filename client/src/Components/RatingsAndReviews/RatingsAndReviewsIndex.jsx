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
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState({});
  const [starCount, setStarCount] = useState(0);
  const [fiveStarCount, setFiveStarCount] = useState(0);
  const [fourStarCount, setFourStarCount] = useState(0);
  const [threeStarCount, setThreeStarCount] = useState(0);
  const [twoStarCount, setTwoStarCount] = useState(0);
  const [oneStarCount, setOneStarCount] = useState(0);
  const [ratings, setRatings] = useState({});
  const [filteredArray, setFilteredArray] = useState([])
  const [fiveRatingFilter, setFiveRatingFilter] = useState(false)
  const [fourRatingFilter, setFourRatingFilter] = useState(false)
  const [threeRatingFilter, setThreeRatingFilter] = useState(false)
  const [twoRatingFilter, setTwoRatingFilter] = useState(false)
  const [oneRatingFilter, setOneRatingFilter] = useState(false)


  var filterToggle = (ratingNum) => {
    if(ratingNum === 5) {
      setFiveRatingFilter(!fiveRatingFilter);
      console.log('five filter', fiveRatingFilter);
    } else if(ratingNum === 4) {
      console.log('four filter', fourRatingFilter);
    } else if(ratingNum === 3) {
      setThreeRatingFilter(!threeRatingFilter);
      console.log('three filter', threeRatingFilter)
    } else if(ratingNum === 2) {
      setTwoRatingFilter(!twoRatingFilter);
      console.log('two filter', twoRatingFilter)
    } else if(ratingNum === 1) {
      setOneRatingFilter(!oneRatingFilter);
      console.log('one filter', oneRatingFilter)
    }
    console.log('five filter', fiveRatingFilter);
    console.log('four filter', fourRatingFilter);
    console.log('three filter', threeRatingFilter)
    console.log('two filter', twoRatingFilter)
    console.log('one filter', oneRatingFilter)
  }

  var filterTheReviews = (ratingNum) => {
    filterToggle(ratingNum)
    console.log(fiveRatingFilter, "check the toggle herer")
    let filtered = reviews.filter((review) => {
      return (
        (fiveRatingFilter === true && review.rating === 5)  ||
        (fourRatingFilter === true && review.rating === 4) ||
        (threeRatingFilter === true && review.rating === 3) ||
        (twoRatingFilter === true && review.rating === 2) ||
        (oneRatingFilter === true && review.rating === 1)
      )
    });
      // setReviews(filtered)
      setFilteredArray(filtered);//set filter Array with filtered data
      return filtered;
    }

  const getProductReviews = (productId, sortedBy) => {
    return axios.get('/snuggie/reviews/', {params: {product_id: productId, count: 500, sort: sortedBy}})
    .then((response) => {
      setReviews(response.data.results);
      return response.data.results
    })
    // .then((response) => {
    //   console.log(response, 'REspponnsee')
    // })
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
      var filtered = getProductReviews(props.productId, sortby)
      return filtered
      console.log(response, 'response in postReview func')
    })
    .catch((error) => {
      console.log( error,'Error in Post ProductReviews')
    })
  }

  var upVoteHelpfulness = (reviewid) => {
      return axios.put('/snuggie/reviews/helpfulness', {review_id: reviewid})
      .then((response) => {
        // getProductReviews(props.productId, sortby)
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
    setFilteredArray(filteredReviews)
  }

  useEffect(() => {
    if (props.productId) {
      getProductReviews(props.productId, sortby);
      getReviewsMeta(props.productId);
    }

  }, [props.productId, sortby, starCount, ratings, fiveRatingFilter, fourRatingFilter,threeRatingFilter, twoRatingFilter, oneRatingFilter]);

  // console.log(meta, 'reviiiews')
  return (
    <div>
    <span>Ratings &amp; Reviews</span>
    <RRContainer>
    <OverAllBreakDown metaData={meta} filterTheReviews={filterTheReviews} filteredReviews={filteredReviews} reviewData={meta.ratings} productReviews={reviews} fiveTotal={barTotal(fiveStarCount)} fourTotal={barTotal(fourStarCount)} threeTotal={barTotal(threeStarCount)} twoTotal={barTotal(twoStarCount)} oneTotal={barTotal(oneStarCount)}/>
    <ReviewList productReviews={reviews} filteredReviews={filteredArray} metaData={meta} sortedBy={sortby} changeSortedBy={changeSortedBy} postReview={postReview} chosenProduct={props.chosenProduct} upVoteHelpfulness={upVoteHelpfulness} reportReview={reportReview}/>
    </RRContainer>
    </div>
  )
}

export default RatingsAndReviewsIndex