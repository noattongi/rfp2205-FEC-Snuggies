import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewTile from './ReviewTiles.jsx'

var ReviewList = (props) => {
  var limitReviews = props.productReviews.results?.slice(0,2)
  return (
    <div>
    <ul>
      {limitReviews?.map((review, index) =>
        <ReviewTile key={index}
                  reviews={review} />
      )}
    </ul>
    <button>More Reviews</button>
    <button>Add A Review</button>
    </div>
  )

}
export default ReviewList