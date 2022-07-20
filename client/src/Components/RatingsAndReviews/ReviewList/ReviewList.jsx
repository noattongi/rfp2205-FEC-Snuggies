import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewTile from './ReviewTiles.jsx'
import AddReviewModal from './AddReviewModal.jsx'
import {Scroll} from '../StyledComponents/ReviewLimitScroll.jsx'
import {ReviewListContainer} from '../StyledComponents/ReviewListStyle.jsx'

var ReviewList = (props) => {

  // console.log(props)
  const [reviewCount, setReviewCount] = useState(2);
  const [isOpen, setIsOpen] = useState(false);


  var toggleModal = (event) => {
    setIsOpen(!isOpen);
  }

  var moreReviewClick = (event) => {
    setReviewCount(reviewCount + 2);
  }

  var changeSortClick = (event) => {
    props.changeSortedBy(event.target.value);
  }


  // var limitReviews = props.productReviews.results?.slice(0,reviewCount)
  if(props.productReviews.results?.length > 0) {
  return (
    <ReviewListContainer>
      <div>
        {props.productReviews.results?.length} reviews, sorted by
          <select onChange={changeSortClick}>
            <option value="relevant" >Relevant</option>
            <option value="helpful" >Helpful</option>
            <option value="newest" >Newest</option>
          </select>
      </div>
      <Scroll>
        <div>
          <ul>
            {props.productReviews.results?.slice(0,reviewCount)?.map((review, index) =>
              <ReviewTile key={index}
                          reviews={review}
                          upVoteHelpfulness={props.upVoteHelpfulness}
                          reportReview={props.reportReview}
                          metaData= {props.metaData}/>
            )}
          </ul>
        </div>
      </Scroll>
      {props.productReviews.results?.length > 2 && reviewCount < props.productReviews.results?.length && <button onClick={moreReviewClick} >More Reviews</button>}
        <button
          className="openModalBtn"
          onClick={toggleModal}
        >Add a Review</button>
      {isOpen && <AddReviewModal closeModal={toggleModal} metaData= {props.metaData} postReview={props.postReview} chosenProduct={props.chosenProduct}/>}
  </ReviewListContainer>
  )
            }
}
export default ReviewList