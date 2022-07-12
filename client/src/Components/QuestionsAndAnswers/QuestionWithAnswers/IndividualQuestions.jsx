import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import {YesButton, QuestionSpan, HelpfulAnswerSpan, AnswerListContainer, LoadMoreAnswersButton, IndividualQuestDiv, HelpfulAndAddAnswerContainer, QuestionHeaderContainer} from '../StyledComponents/QuestionWithAnswers/QnAList.jsx';

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
}

export default IndividualQuestions