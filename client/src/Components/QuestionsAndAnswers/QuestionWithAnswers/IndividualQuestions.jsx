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
    <div>
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
    </div>

  )
};

const YesButton = styled.button`
  text-decoration: underline;
  padding: 0;
  border: none;
  background: none;

`;

const QuestionSpan = styled.span`
  display: flex;
  font-weight: bold;
`;

const HelpfulAnswerSpan = styled.div`
  display: flex;
  padding-right: 7px;
  width: 50%
`;

const AnswerListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HelpfulAndAddAnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 20%;
  position: absolute;
  left: 40%
`;
export default IndividualQuestions