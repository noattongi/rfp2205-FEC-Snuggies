import React, {useState} from 'react';
import {QnAListContainer, IndividualQuestDiv} from '../StyledComponents/QuestionWithAnswers/QnAList.jsx'
import IndividualQuestions from './IndividualQuestions.jsx'

var QuestionsList = () => {
  return (
    <QnAListContainer>
      <IndividualQuestDiv>
        <IndividualQuestions/>
      </IndividualQuestDiv>
    </QnAListContainer>
  )
}

export default QuestionsList