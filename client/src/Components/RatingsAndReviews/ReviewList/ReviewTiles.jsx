import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ImagePool from './ImagePool.jsx'
import { format, parseISO } from 'date-fns'
import {ReviewTile} from '../StyledComponents/ReviewLimitScroll.jsx'
// import { AnswerHelpfulnessSpan, BottomInfoContainer, ReportSpan} from '../../QuestionsAndAnswers/StyledComponents/QuestionWithAnswers/IndividualAnswer.jsx'
import {TopContainer, UserandDate, Summary, RecommendProduct, ReviewBody, BottomInfoContainer, ReportSpan, AnswerHelpfulnessSpan, YesAnswerSpan} from '../StyledComponents/ReviewTile.jsx';
import styled from 'styled-components'

var ReviewTiles = (props) => {

  console.log(props, 'these are the props you are looking fro')
  const [reviewBodyRender, setReviewBodyRender] = useState(props.reviews.body?.substr(0, 250))
  const [seeMore, setSeeMore] = useState(true)
  const [helpfulClickCount, setHelpfulClickCount] = useState(0)

  var formatDate = (date) => {
    var dateISO = parseISO(date.slice(0, 10))
    var formattedDate = (`${format(dateISO, 'MMMM, dd, yyyy')}`)
    return formattedDate
  }

  var recommendFilter = (recommended) => {
    var recommend;
    if(recommended === 'true') {
      return recommend = '✅ I recommend this product'
    } else {
      return recommend
    }
  }

  var seeMoreClick = (event) => {
    // setReviewBodyRender(props.reviews.body)
    setSeeMore(false)
  }

   var onHelpfulClick = () => {
    if(helpfulClickCount < 1) {
      props.upVoteHelpfulness(props.reviews.review_id)
      setHelpfulClickCount(helpfulClickCount + 1)
    } else {
      alert('You can only upvote once!')
    }

   }

  var seeMoreRendered = (seeMore) => {
    var rendered;
    if(seeMore === true) {
      return rendered = props.reviews.body.substr(0, 250)
    } else {
      return rendered = props.reviews.body
    }
  }


  return (
    <ReviewTile>
   <div>
     <TopContainer>
        <div>⭐️⭐️⭐️⭐️⭐️</div>
        <UserandDate>
          <span>{props.reviews.reviewer_name}   </span>
          <span> {`,  ${formatDate(props.reviews.date)}`}</span>
        </UserandDate>
      </TopContainer>
    <Summary>{props.reviews.summary.substr(0, 60)}</Summary>
    <ReviewBody>{seeMoreRendered(seeMore)}
    <div>{props.reviews.body.length > 250 && seeMore && <a onClick={seeMoreClick} style={{cursor: 'pointer'}}>See More</a>}</div>
    {props.reviews.photos.map((photo, index) =>
        <ImagePool key={index}
                  photo={photo}/>
      )}
    </ReviewBody>
    <RecommendProduct>{recommendFilter(props.reviews.recommend.toString())}</RecommendProduct>
    <div>{props.reviews.response && <h6>{props.reviews.response}</h6>}</div>
    <BottomInfoContainer>
    <AnswerHelpfulnessSpan>  Helpful? <YesAnswerSpan onClick={onHelpfulClick}>Yes</YesAnswerSpan> ({props.reviews.helpfulness}) </AnswerHelpfulnessSpan>
        <span> | </span>
        {<ReportSpan > Report </ReportSpan>}
    </BottomInfoContainer>
   </div>
   </ReviewTile>
  )
};


export default ReviewTiles