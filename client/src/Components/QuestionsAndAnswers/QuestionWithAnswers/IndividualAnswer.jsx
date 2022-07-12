import React, {useState} from 'react';
import {IndividualAnswerContainer, AnswerSpan, ImageContainer, BottomInfoContainer, PosterAndDateSpan, ReportSpan, AnswerHelpfulnessSpan} from '../StyledComponents/QuestionWithAnswers/IndividualAnswer.jsx'
import { format, parseISO } from 'date-fns';
// one container (column)
// four items inside - Answer, Photos(situational), Bottom Info Container, Load More Answers

// Answer is a span
// Photo Containers (Row)
// Bottom Info Container (Row)
  // Poster, Date, Helpfulness, Report



// **If photos length !== 0, render photos

export default function IndividualAnswer({answer}) {

  var parse = (date) => {
    var dateISO = parseISO(date.slice(0,10));

    return format(dateISO, "MMMM dd, yyyy")
  };
  console.log('da answers', answer)
  return (
    <IndividualAnswerContainer>
      <AnswerSpan> {answer.body} </AnswerSpan>
      <ImageContainer></ImageContainer>
      <BottomInfoContainer>
        <PosterAndDateSpan> {answer.answerer_name} on {parse(answer.date)} </PosterAndDateSpan>
        <span> | </span>
        <AnswerHelpfulnessSpan>  Helpful? Yes </AnswerHelpfulnessSpan>
        <span> | </span>
        <ReportSpan> Report </ReportSpan>
      </BottomInfoContainer>
    </IndividualAnswerContainer>
  )
}