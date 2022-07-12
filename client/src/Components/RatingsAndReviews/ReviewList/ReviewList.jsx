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
  // console.log(props.productReviews.results)
  var moreReviewToggle = (reviewLength) => {
    var moreReviewbutton;
    console.log(reviewCount, 'lesss athan ',reviewLength, 'hellooo')
    if(reviewLength > 2 && reviewCount < reviewLength) {
      moreReviewbutton = <button onClick={moreReviewClick} >More Reviews</button>
      return moreReviewbutton
    } else {
      return moreReviewbutton;
    }
  }

  return (
    <div>
    <ul>
      {limitReviews?.map((review, index) =>
        <ReviewTile key={index}
                  reviews={review}/>
      )}
    </ul>
    {moreReviewToggle(props.productReviews.results?.length)}
    <button>Add A Review</button>
    </div>
  )

}
export default ReviewList