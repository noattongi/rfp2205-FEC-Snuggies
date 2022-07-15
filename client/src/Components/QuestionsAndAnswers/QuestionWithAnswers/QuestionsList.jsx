import React, {useState, useEffect} from 'react';
import IndividualQuestions from './IndividualQuestions.jsx';
import styled from 'styled-components';


var QuestionsList = ({questions, postAnswerFunc}) => {

  return (
    <QnAListContainer>
      <IndividualQuestDiv>
      {questions?.map((each) => {
        return (
          <IndividualQuestions postAnswerfunc={postAnswerFunc} key={each.question_id} question={each}/>
        )
      })}
      </IndividualQuestDiv>
    </QnAListContainer>
  )
};

// styled components
var QnAListContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

//questionable?
var IndividualQuestDiv = styled.div`
  display: flex;
  flex-direction: column;
`;


export default QuestionsList