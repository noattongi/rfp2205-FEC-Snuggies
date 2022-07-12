import React, {useState} from 'react';
import {IndividualAnswerContainer, AnswerSpan, ImageContainer, BottomInfoContainer, PosterAndDateSpan, ReportSpan, AnswerHelpfulnessSpan, ReportButton} from '../StyledComponents/QuestionWithAnswers/IndividualAnswer.jsx'
import { format, parseISO } from 'date-fns';
import {YesButton} from '../StyledComponents/QuestionWithAnswers/QnAList.jsx'
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

  return (
    <IndividualAnswerContainer>
      <AnswerSpan> {answer.body} </AnswerSpan>
      <ImageContainer></ImageContainer>
      <BottomInfoContainer>
        <PosterAndDateSpan> {answer.answerer_name} on {parse(answer.date)} </PosterAndDateSpan>
        <span> | </span>
        <AnswerHelpfulnessSpan>  Helpful? <YesButton>Yes</YesButton>({answer.helpfulness}) </AnswerHelpfulnessSpan>
        <span> | </span>
        <ReportSpan> <ReportButton> Report </ReportButton> </ReportSpan>
      </BottomInfoContainer>
    </IndividualAnswerContainer>
  )
}