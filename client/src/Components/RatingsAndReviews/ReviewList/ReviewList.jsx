import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewTile from './ReviewTiles.jsx'

var ReviewList = (props) => {
  const [reviewCount, setReviewCount] = useState(2);


  var moreReviewClick = (event) => {
    setReviewCount(reviewCount + 2)
  }
  var limitReviews = props.productReviews.results?.slice(0,reviewCount)

  return (
    <div>
    <ul>
      {limitReviews?.map((review, index) =>
        <ReviewTile key={index}
                  reviews={review}/>
      )}
    </ul>
    {props.productReviews.results?.length > 2 && reviewCount < props.productReviews.results?.length && <button onClick={moreReviewClick} >More Reviews</button>}
    <button>Add A Review</button>
    </div>
  )

}
export default ReviewList