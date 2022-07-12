import React, {useState} from 'react';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components'

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
};

// styled components
var IndividualAnswerContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

var YesButton = styled.button`
  text-decoration: underline;
  padding: 0;
  border: none;
  background: none;

`;

var AnswerSpan = styled.span`
  height: 1rem;
`;

var ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

var BottomInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 23%;
  font-size: 12px;
`;

//adjust
var PosterAndDateSpan = styled.span`
  height: 1.2rem;
`;

//adjust
var AnswerHelpfulnessSpan = styled.span`
  height: 1rem;
`;

//adjust
var ReportSpan = styled.span`
  height: 1rem;
`;

var ReportButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  text-decoration: underline;
`;