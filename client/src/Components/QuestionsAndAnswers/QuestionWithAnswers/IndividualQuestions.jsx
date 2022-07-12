import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import {QuestionSpan, HelpfulAnswerSpan, AnswerListContainer, LoadMoreAnswersButton, IndividualQuestDiv, HelpfulAndAddAnswerContainer, QuestionHeaderContainer} from '../StyledComponents/QuestionWithAnswers/QnAList.jsx'

var IndividualQuestions = ({question}) => {
  // contains QuestionDiv AnswerListContainer,
  // Question div has Question and Helpful/Add Answer Section
  // AnswerListDiv has IndividualAnswers
  // console.log(question.question_helpfulness)
  return (
    <div>
      <QuestionHeaderContainer>
        <QuestionSpan> Q: {question.question_body} </QuestionSpan>
        <HelpfulAndAddAnswerContainer>
          <AddAnswer/>
          <HelpfulAnswerSpan> Helpful? Yes ({question.question_helpfulness}) </HelpfulAnswerSpan>
        </HelpfulAndAddAnswerContainer>
      </QuestionHeaderContainer>

      <AnswerListContainer>
        <AnswerList/>
      <LoadMoreAnswersButton> Load More Answers</LoadMoreAnswersButton>
      </AnswerListContainer>
    </div>

  )
}

export default IndividualQuestions