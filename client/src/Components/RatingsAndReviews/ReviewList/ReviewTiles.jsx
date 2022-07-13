import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ImagePool from './ImagePool.jsx'
import { format, parseISO } from 'date-fns'
import {ReviewTile} from '../StyledComponents/ReviewLimitScroll.jsx'
import { AnswerHelpfulnessSpan, BottomInfoContainer, ReportSpan} from '../../QuestionsAndAnswers/StyledComponents/QuestionWithAnswers/IndividualAnswer.jsx'
import {TopContainer, UserandDate, Summary, RecommendProduct, ReviewBody} from '../StyledComponents/ReviewTile.jsx'

var ReviewTiles = (props) => {
  const [reviewBodyRender, setReviewBodyRender] = useState(props.reviews.body.substr(0, 250))
  const [seeMore, setSeeMore] = useState(true)

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
    setReviewBodyRender(props.reviews.body)
    setSeeMore(false)
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
    <ReviewBody>{reviewBodyRender}
    <div>{props.reviews.body.length > 250 && seeMore && <a onClick={seeMoreClick} style={{cursor: 'pointer'}}>See More</a>}</div>
    {props.reviews.photos.map((photo, index) =>
        <ImagePool key={index}
                  photo={photo}/>
      )}
    </ReviewBody>
    <RecommendProduct>{recommendFilter(props.reviews.recommend.toString())}</RecommendProduct>
    <div>{props.reviews.response && <h6>{props.reviews.response}</h6>}</div>
    <BottomInfoContainer>
    <AnswerHelpfulnessSpan>Helpful? Yes ({props.reviews.helpfulness})</AnswerHelpfulnessSpan>
        <span>|</span>
        <ReportSpan> Report </ReportSpan>
    </BottomInfoContainer>
   </div>
   </ReviewTile>
  )
}


export default ReviewTiles