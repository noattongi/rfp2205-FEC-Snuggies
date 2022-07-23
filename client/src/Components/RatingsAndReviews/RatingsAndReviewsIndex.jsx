import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewList from '../RatingsAndReviews/ReviewList/ReviewList.jsx'
import StarBreakDown from '../RatingsAndReviews/OverallBreakDown/RatingsBreakdown.jsx'
import {RRContainer, SingleBar, BarText, OBContainer} from '../RatingsAndReviews/StyledComponents/R&RContainer.jsx'
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
  const [filteredArray, setFilteredArray] = useState([]);
  const [ratingFilter, setRatingFilter] = useState({'5':false, '4':false, '3':false, '2':false, '1':false});
  const [filterbyNums, setfilterbyNums] = useState([]);
  const [ratingNumArray, setRatingNumArray] = useState([]);

  const filterToggle =  (ratingNum) => {
     setRatingFilter({...ratingFilter, [ratingNum] : !ratingFilter[ratingNum]});
  }
  var resetFilters = async () => {
    setRatingNumArray([]);
  }

  var filterTheReviews = async (ratingNum) => {
    if(ratingNumArray.includes(ratingNum)) {
      var newArr = ratingNumArray.filter((e) => {
        return e !== ratingNum;
      })
        await setRatingNumArray(newArr);
    } else {
      var array = [...ratingNumArray, ratingNum]
        setRatingNumArray(array);
    }
     return filterToggle(ratingNum);
    }


  const getProductReviews = (productId, sortedBy) => {
    return axios.get('/snuggie/reviews/', {params: {product_id: productId, count: 500, sort: sortedBy}})
    .then((response) => {
      return response.data.results
    })
    .then((response) => {
      if(ratingNumArray.length > 0)  {
        var filteredReviews = response.filter( (review) => {
          return ratingNumArray.includes(review.rating);
        })
        return filteredReviews;
      }
      return response;
    })
    .then((data) => {
      setReviews(data);
    })
    .catch((error) => {
      console.log('Error in getProductReviews', error);
    })
  }

  const getReviewsMeta = (productId) => {
    return axios.get('/snuggie/reviews/meta', {params: {product_id: productId}})
    .then((response) => {
      setMeta(response.data);
    var starTotal = Number(response.data.ratings['1']) + Number(response.data.ratings['2']) + Number(response.data.ratings['3']) + Number(response.data.ratings['4']) + Number(response.data.ratings['5']);
      setStarCount(starTotal);
      setFiveStarCount(Number(response.data.ratings['5']));
      setFourStarCount(Number(response.data.ratings['4']));
      setThreeStarCount(Number(response.data.ratings['3']));
      setTwoStarCount(Number(response.data.ratings['2']));
      setOneStarCount(Number(response.data.ratings['1']));
    })
    .catch((error) => {
      console.log('Error in get meta data client side', error)
    })
  }

  var postReview = (postReviewObj) => {
      return axios.post('/snuggie/reviews', postReviewObj)
    .then((response) => {
      var filtered = getProductReviews(props.productId, sortby)
      console.log(response, 'response in postReview func')
      return filtered

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

  }, [props.productId, sortby, filteredArray, starCount, ratings, ratingFilter,ratingNumArray]);



  return (
    <div id="Reviews">
      Ratings &amp; Reviews
    <RRContainer>
      <OBContainer><OverAllBreakDown resetFilters={resetFilters} filterTheReviews={filterTheReviews} metaData={meta} reviewData={meta.ratings} fiveTotal={barTotal(fiveStarCount)} fourTotal={barTotal(fourStarCount)} threeTotal={barTotal(threeStarCount)} twoTotal={barTotal(twoStarCount)} oneTotal={barTotal(oneStarCount)}/></OBContainer>
      <ReviewList ratingNumArray={ratingNumArray} ratingFilter={ratingFilter} productReviews={reviews} metaData={meta} sortedBy={sortby} changeSortedBy={changeSortedBy} postReview={postReview} chosenProduct={props.chosenProduct} upVoteHelpfulness={upVoteHelpfulness} reportReview={reportReview}/>
    </RRContainer>
    </div>
  )
}

export default RatingsAndReviewsIndex