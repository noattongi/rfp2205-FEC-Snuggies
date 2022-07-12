import React, {useState} from 'react';
import {QnAListContainer, IndividualQuestDiv} from '../StyledComponents/QuestionWithAnswers/QnAList.jsx'
import IndividualQuestions from './IndividualQuestions.jsx'

// need to map each question

var QuestionsList = ({questions}) => {
  console.log('questions loggerindividual', questions.results)

  return (
    <QnAListContainer>
      <IndividualQuestDiv>
       {questions.results?.map((each) => {
         return (
           <IndividualQuestions key={each.question_id} question={each}/>
         )
       })}
      </IndividualQuestDiv>
    </QnAListContainer>
  )
}

export default QuestionsList