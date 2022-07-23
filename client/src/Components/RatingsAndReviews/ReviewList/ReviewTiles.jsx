import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ImagePool from './ImagePool.jsx';
import { format, parseISO } from 'date-fns';
import {ReviewTile} from '../StyledComponents/ReviewLimitScroll.jsx';
import {SeeMore, RT_StarContainer, TopContainer, UserandDate, Summary, RecommendProduct, ReviewBody, BottomInfoContainer, ReportSpan, AnswerHelpfulnessSpan, YesAnswerSpan, ImageContainer} from '../StyledComponents/ReviewTile.jsx';
import styled from 'styled-components';
import StarRating from '../../SharedComponents/StarRating.jsx'

var ReviewTiles = (props) => {
  const [helpful, setHelpful] = useState(props.reviews.helpfulness);
  const [yesVote, setYesVote] = useState(false);
  const [notHelpful, setNotHelpful] = useState(0)
  const [noVote, setNoVote] = useState(false);
  const [reviewBodyRender, setReviewBodyRender] = useState(props.reviews.body?.substr(0, 250));
  const [seeMore, setSeeMore] = useState(true)
  var formatDate = (date) => {
  var dateISO = parseISO(date.slice(0, 10))

  var formattedDate = (`${format(dateISO, 'MMMM, dd, yyyy')}`)
    return formattedDate;
  }

  useEffect(() => {
  }, [helpful])

  var seeMoreClick = (event) => {
    setSeeMore(false);
  }

  var onHelpfulClick = () => {

    props.upVoteHelpfulness(props.reviews.review_id);
    setHelpful(helpful + 1);
    setYesVote(true);
    setNoVote(true);
   }

   var onNotHelpfulClick = () => {
    setNotHelpful(notHelpful + 1);
    setNoVote(true);
    setYesVote(true);
  }

  var onReportClick = () => {
    props.reportReview(props.reviews.review_id);
   }

  var seeMoreRendered = (seeMore) => {
    var rendered;
    if(seeMore === true) {
      return rendered = props.reviews.body.substr(0, 250);
    } else {
      return rendered = props.reviews.body;
    }
  }

  return (
    <ReviewTile>
   <div>
     <TopContainer>
        <RT_StarContainer><StarRating reviewData={props.reviews.rating}/></RT_StarContainer>
        <UserandDate>
          <div>{props.reviews.reviewer_name}   </div>
          <div> {`,  ${formatDate(props.reviews.date)}`}</div>
        </UserandDate>
      </TopContainer>
    <Summary>{props.reviews.summary.substr(0, 60)}</Summary>
    <ReviewBody>{seeMoreRendered(seeMore)}
    <SeeMore>{props.reviews.body.length > 250 && seeMore && <a onClick={seeMoreClick} style={{cursor: 'pointer'}}>See More</a>}</SeeMore>
    </ReviewBody><ImageContainer>
    {props.reviews.photos.map((photo, index) => {
      return(
        <ImagePool key={index}
                  photo={photo}/>
      )
  })}
    </ImageContainer>
    {props.reviews.recommend && <RecommendProduct>✅ I recommend this product</RecommendProduct>}
    {props.reviews.response !== null && <div>Response from seller {props.reviews.response}</div>}
    <BottomInfoContainer>

    <AnswerHelpfulnessSpan>
       Helpful?
      {!yesVote && <YesAnswerSpan onClick={onHelpfulClick}>Yes</YesAnswerSpan> }
      {!yesVote &&  <span>({helpful}) </span>}
      {yesVote && <YesAnswerSpan>Yes</YesAnswerSpan> }
      {yesVote &&  <span> ({helpful}) </span>}
      <span> | </span>
      {/* {/* {!noVote && <YesAnswerSpan onClick={onNotHelpfulClick}>No</YesAnswerSpan> }
      {!noVote &&  <span>({notHelpful})</span>} */}
      <YesAnswerSpan>No</YesAnswerSpan>
      <span> (0) </span>
     </AnswerHelpfulnessSpan>
      <span> | </span>
        {<ReportSpan onClick={onReportClick}> Report </ReportSpan>}
    </BottomInfoContainer>
   </div>
   </ReviewTile>
  )
};


export default ReviewTiles