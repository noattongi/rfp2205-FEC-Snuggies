
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewTile from './ReviewTiles.jsx'
import AddReviewModal from './AddReviewModal.jsx'
import {Scroll} from '../StyledComponents/ReviewLimitScroll.jsx'
import {AddReviewButton, RL_Sort, RL_MoreButton, RL_SubmitButton, RL_BotContainer,ReviewListContainer, RL_TopContainer} from '../StyledComponents/ReviewListStyle.jsx'

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
      <RL_TopContainer>
        {allReviews && <RL_Sort>{allReviews.length} reviews, sorted by</RL_Sort>}
          <select onChange={changeSortClick}>
            <option value="relevant" >Relevance</option>
            <option value="helpful" >Helpful</option>
            <option value="newest" >Newest</option>
          </select>
      </RL_TopContainer>
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
      <RL_BotContainer>
      {allReviews && allReviews.length > 2 && reviewCount < allReviews.length && <RL_MoreButton onClick={moreReviewClick} >More Reviews</RL_MoreButton>}
        <RL_MoreButton
          onClick={toggleModal}
        >Add a Review</RL_MoreButton>
      {isOpen && <AddReviewModal closeModal={toggleModal} metaData= {props.metaData} charData={props.metaData.characteristics} postReview={props.postReview} chosenProduct={props.chosenProduct}/>}
      </RL_BotContainer>
  </ReviewListContainer>
  )
}
export default ReviewList