import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import {HelpfulAnswerSpan, IndividualQuestDiv, HelpfulAndAddAnswerContainer, QuestionHeaderContainer} from '../StyledComponents/QuestionWithAnswers/QnAList.jsx'
var IndividualQuestions = () => {
  // contains QuestionDiv AnswerListContainer,
  // Question div has Question and Helpful/Add Answer Section
  // AnswerListDiv has IndividualAnswers

  return (
    <div>
      <QuestionHeaderContainer>
        <span> Question </span>
        <HelpfulAndAddAnswerContainer>
          <AddAnswer/>
          <HelpfulAnswerSpan> Helpful? Yes </HelpfulAnswerSpan>
        </HelpfulAndAddAnswerContainer>
      </QuestionHeaderContainer>

      <AnswerListContainer>
        <AnswerList/>
      </AnswerListContainer>
    </div>

  )
}

export default IndividualQuestions