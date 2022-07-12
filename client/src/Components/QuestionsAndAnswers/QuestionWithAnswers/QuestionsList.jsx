import React, {useState} from 'react';
import IndividualQuestions from './IndividualQuestions.jsx';
import styled from 'styled-components';

// need to map each question

var QuestionsList = ({questions}) => {
  // console.log('questions loggerindividual', questions.results)

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
};

const QnAListContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

//questionable?
const IndividualQuestDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default QuestionsList