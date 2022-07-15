import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewTile from './ReviewTiles.jsx'
import AddReviewModal from './AddReviewModal.jsx'
import {Scroll} from '../StyledComponents/ReviewLimitScroll.jsx'

var ReviewList = (props) => {
  console.log(props, 'look at this')
  const [reviewCount, setReviewCount] = useState(2);
  const [isOpen, setIsOpen] = useState(false)


  var toggleModal = (event) => {
    setIsOpen(!isOpen)
  }

  var moreReviewClick = (event) => {
    setReviewCount(reviewCount + 2)
  }

  var changeSortClick = (event) => {
    props.changeSortedBy(event.target.value)
  }


  // var limitReviews = props.productReviews.results?.slice(0,reviewCount)
  return (
    <div>
      <div>
      {props.productReviews.results?.length} reviews, sorted by
      <select onChange={changeSortClick}>
        <option value="relevant" >Relevance</option>
        <option value="helpful" >Helpful</option>
        <option value="newest" >Newest</option>
      </select>
      </div>
      <Scroll>
        <div>
    <ul>
      {props.productReviews.results?.slice(0,reviewCount)?.map((review, index) =>
        <ReviewTile key={index}
                  reviews={review} upVoteHelpfulness={props.upVoteHelpfulness}/>
      )}
    </ul>
    </div>
    </Scroll>
    {props.productReviews.results?.length > 2 && reviewCount < props.productReviews.results?.length && <button onClick={moreReviewClick} >More Reviews</button>}
    <button
      className="openModalBtn"
      onClick={toggleModal}
    >Add a Review</button>
      {isOpen && <AddReviewModal closeModal={toggleModal} metaData= {props.metaData} postReview={props.postReview} />}
    </div>
  )

}
export default ReviewList