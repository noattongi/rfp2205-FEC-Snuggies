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
          <HelpfulAnswerSpan> Helpful? </HelpfulAnswerSpan>
           <YesQuestionSpan> Yes </YesQuestionSpan>({question.question_helpfulness})
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
  padding-top: 1rem;
  padding-bottom; 1rem;
`;

var YesQuestionSpan = styled.span`
  text-decoration: underline;
`;

var QuestionSpan = styled.span`
  display: flex;
  font-weight: bold;
  flex-wrap: wrap;
  width: 40%;
`;

var HelpfulAnswerSpan = styled.div`
  display: flex;
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
  justify-content: space-between;
  width: 17%
`;
export default IndividualQuestions