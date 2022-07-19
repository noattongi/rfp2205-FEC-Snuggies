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

  var [helpful, setHelpful] = useState(answer.helpfulness);
  var [report, setReport] = useState(true);
  var [yesVote, setYesVote] = useState(false);
  var parse = (date) => {
    var dateISO = parseISO(date.slice(0,10));

    return format(dateISO, "MMMM dd, yyyy")
  };

  // need to refactor so that it stops upvoting through the delay
  var upVote = (e) => {
    e.preventDefault();
    axios.put('/snuggie/answer/helpfulness', {answer_id: answer.id})
    .then((results) => {
      setHelpful(helpful + 1);
      setYesVote(true);
    })
    .catch((error) => {
      console.log('Error within upvoting helpfulness from client side')
    })

  };

  var reportClick = (e) => {
    e.preventDefault();
    axios.put('/snuggie/report', {answer_id: answer.id})
    .then(() => {})
    .catch((error) => {
      console.log("Error in reporting from client side")
    })
    setReport(false);
  }
  // console.log('what is answer', answer.photos)

  return (
    <IndividualAnswerContainer>
      <IndividualAnswerBody>
        <AnswerSpan> {answer.body} </AnswerSpan>
        <ImageContainer></ImageContainer>
        <BottomInfoContainer>
          <PosterAndDateSpan> By {answer.answerer_name} on {parse(answer.date)} </PosterAndDateSpan>
          <span> | </span>
          <AnswerHelpfulnessSpan>
            Helpful?
           {!yesVote && <YesAnswerSpan onClick={upVote}>Yes</YesAnswerSpan> }
           {!yesVote &&  <span>({helpful}) </span>}
           {yesVote && <YesAnswerSpanVoted>Yes</YesAnswerSpanVoted> }
           {yesVote &&  <VotedSpan> ({helpful}) </VotedSpan>}
          </AnswerHelpfulnessSpan>
          <span> | </span>
          {report && <ReportSpan onClick={reportClick}> Report </ReportSpan>}
          {!report && <ReportedSpan> Reported! </ReportedSpan>}
        </BottomInfoContainer>
      </IndividualAnswerBody>
      <ImageSection>
        {answer.photos.map((each, i) => {
          return (
            <Images key={i} src={each}  />
          )
        })}
      </ImageSection>
    </IndividualAnswerContainer>
  )
};

// styled components
var IndividualAnswerContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 500px;
`;

var VotedSpan = styled.span`
  color: blue;
`;

var ImageSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

var Images = styled.img`
  width: 75px;
  height: 75px;
  padding: 10px;
  border-radius: 15px;

  :hover {
    cursor: pointer;
    border: 1px solid black;
    padding: 2px;
  }
`;



var YesAnswerSpanVoted = styled.span`
  text-decoration: underline;
  color: blue;
  padding-left: 5px;
  padding-right: 2px;
`;

var IndividualAnswerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  padding-bottom: 5px;
`;

var YesAnswerSpan = styled.span`
  text-decoration: underline;
  :hover {
    cursor: pointer;
    color: blue;
  };
  padding-left: 5px;
  padding-right: 2px;
`;

var ReportedSpan = styled.span`
  text-decoration: underline;
  color: red;
  padding-left: 7px;
  padding-right: 1px;
`;

var AnswerSpan = styled.span`
  height: 1rem;
  padding-bottom: 5px;
`;

var ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

var BottomInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 200px%;
  font-size: 12px;
`;

//adjust
var PosterAndDateSpan = styled.span`
  height: 1.2rem;
  padding-left: 1px;
  padding-right: 7px;
`;

//adjust
var AnswerHelpfulnessSpan = styled.span`
  padding-left: 7px;
  padding-right: 7px;
`;

//adjust
var ReportSpan = styled.span`
  text-decoration: underline;
  :hover {
    cursor: pointer;
    color: blue;
  };
  padding-left: 7px;
  padding-right: 1px;
`;


