import React, {useState} from 'react';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components';
var axios = require('axios')

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

  var [helpful, setHelpful] = useState(answer.helpfulness);
  var [truth, setTruth] = useState(false);

  // need to refactor so that it stops upvoting through the delay
  var vote = false;
  var upVote = (e) => {
    e.preventDefault();
    if (!vote) {
      axios.put('/snuggie/answer/helpfulness', {answer_id: answer.id})
      .then((results) => {
        if (!truth) {
          setHelpful(helpful + 1);
          setTruth(true);
        }
        vote = true;
      })
      .catch((error) => {
        console.log('Error within upvoting helpfulness from client side')
      })
    }
  };

  return (
    <IndividualAnswerContainer>
      <AnswerSpan> {answer.body} </AnswerSpan>
      <ImageContainer></ImageContainer>
      <BottomInfoContainer>
        <PosterAndDateSpan> {answer.answerer_name} on {parse(answer.date)} </PosterAndDateSpan>
        <span> | </span>
        <AnswerHelpfulnessSpan>  Helpful? <YesAnswerSpan onClick={upVote}>Yes</YesAnswerSpan>({helpful}) </AnswerHelpfulnessSpan>
        <span> | </span>
        <ReportSpan> Report </ReportSpan>
      </BottomInfoContainer>
    </IndividualAnswerContainer>
  )
};

// styled components
var IndividualAnswerContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
`;

var YesAnswerSpan = styled.span`
  text-decoration: underline;
  :hover {
    cursor: pointer;
    color: blue;
  };
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
  width: 40%;
  font-size: 12px;
`;

//adjust
var PosterAndDateSpan = styled.span`
  height: 1.2rem;
`;

//adjust
var AnswerHelpfulnessSpan = styled.span`

`;

//adjust
var ReportSpan = styled.span`
  text-decoration: underline;
`;


