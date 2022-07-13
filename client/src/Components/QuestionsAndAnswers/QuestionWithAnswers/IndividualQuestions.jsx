import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import styled from 'styled-components';
import IndividualAnswer from './IndividualAnswer.jsx';

var IndividualQuestions = ({question}) => {
  // contains QuestionDiv AnswerListContainer,
  // Question div has Question and Helpful/Add Answer Section
  // AnswerListDiv has IndividualAnswers


  return (
    <QnAContainer>
      <QuestionHeaderContainer>
        <QuestionSpan> Q: {question.question_body} </QuestionSpan>
        <HelpfulAndAddAnswerContainer>
          <AddAnswer/>
          <HelpfulAnswerSpan> Helpful? <YesButton> Yes </YesButton>  ({question.question_helpfulness}) </HelpfulAnswerSpan>
        </HelpfulAndAddAnswerContainer>
      </QuestionHeaderContainer>

      <AnswerListContainer>
        <AnswerList key={question.question_id} answerList={question.answers} />

      </AnswerListContainer>
    </QnAContainer>

  )
};

// styled components
var QnAContainer = styled.div`
  padding-top: 35px;
  padding-bottom; 35px;
`;

var YesButton = styled.button`
  text-decoration: underline;
  padding: 0;
  border: none;
  background: none;

`;

var QuestionSpan = styled.span`
  display: flex;
  font-weight: bold;
  flex-wrap: wrap;
  width: 40%;
`;

var HelpfulAnswerSpan = styled.div`
  display: flex;
  padding-right: 7px;
  width: 50%
`;

var AnswerListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

var QuestionHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

var HelpfulAndAddAnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export default IndividualQuestions