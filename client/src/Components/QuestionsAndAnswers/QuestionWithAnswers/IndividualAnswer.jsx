import React, {useState} from 'react';
import {IndividualAnswerContainer, AnswerSpan, ImageContainer, BottomInfoContainer, PosterAndDateSpan, ReportSpan, AnswerHelpfulnessSpan} from '../StyledComponents/QuestionWithAnswers/IndividualAnswer.jsx'

// one container (column)
// four items inside - Answer, Photos(situational), Bottom Info Container, Load More Answers

// Answer is a span
// Photo Containers (Row)
// Bottom Info Container (Row)
  // Poster, Date, Helpfulness, Report



// **If photos length !== 0, render photos

export default function IndividualAnswer() {
  return (
    <IndividualAnswerContainer>
      <AnswerSpan> Our Answer </AnswerSpan>
      <ImageContainer></ImageContainer>
      <BottomInfoContainer>
        <PosterAndDateSpan> Insert Poster and Date </PosterAndDateSpan>
        <span> | </span>
        <AnswerHelpfulnessSpan>  Helpful? Yes </AnswerHelpfulnessSpan>
        <span> | </span>
        <ReportSpan> Report </ReportSpan>
      </BottomInfoContainer>
    </IndividualAnswerContainer>
  )
}