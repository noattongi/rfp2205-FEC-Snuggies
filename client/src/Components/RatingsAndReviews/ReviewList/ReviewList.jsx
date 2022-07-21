
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewTile from './ReviewTiles.jsx'
import AddReviewModal from './AddReviewModal.jsx'
import {Scroll} from '../StyledComponents/ReviewLimitScroll.jsx'
import {ReviewListContainer} from '../StyledComponents/ReviewListStyle.jsx'

var ReviewList = (props) => {
  const [reviewCount, setReviewCount] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredArray, setfilteredArray] = useState([])
  const [allReviews, setAllReviews] = useState()
  const [activeFilters, setActiveFilters] = useState([])
  const [allProps, setAllProps] = useState()

  var toggleModal = (event) => {
    setIsOpen(!isOpen);
  };

  var moreReviewClick = (event) => {
    setReviewCount(reviewCount + 2);
  };

  var changeSortClick = (event) => {
    props.changeSortedBy(event.target.value);
  };
  useEffect(() => {
    if(props.productReviews) {
      setAllReviews(props.productReviews)
    }
  }, [ reviewCount, props.productReviews, activeFilters, props.ratingFilter, props.ratingNumArray, allReviews])
  return (
    <ReviewListContainer>
      <div>
        {allReviews && <div>{allReviews.length} reviews, sorted by</div>}
          <select onChange={changeSortClick}>
            <option value="relevant" >Relevant</option>
            <option value="helpful" >Helpful</option>
            <option value="newest" >Newest</option>
          </select>
      </div>
      <Scroll>
        <div>
          {allReviews && <ul>
            {allReviews.slice(0,reviewCount).map((review, index) =>
              <ReviewTile key={index}
                          reviews={review}
                          upVoteHelpfulness={props.upVoteHelpfulness}
                          reportReview={props.reportReview}
                          metaData= {props.metaData}/>
            )}
          </ul>}
        </div>
      </Scroll>
      {allReviews && allReviews.length > 2 && reviewCount < allReviews.length && <button onClick={moreReviewClick} >More Reviews</button>}
        <button
          className="openModalBtn"
          onClick={toggleModal}
        >Add a Review</button>
      {isOpen && <AddReviewModal closeModal={toggleModal} metaData= {props.metaData} postReview={props.postReview} chosenProduct={props.chosenProduct}/>}
  </ReviewListContainer>
  )
}
export default ReviewList