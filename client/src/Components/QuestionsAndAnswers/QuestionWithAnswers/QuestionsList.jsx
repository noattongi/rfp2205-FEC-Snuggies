import React, {useState, useEffect} from 'react';
import IndividualQuestions from './IndividualQuestions.jsx';
import styled from 'styled-components';


var QuestionsList = ({productId, chosenProduct, urlImage, setURLImage, questions, postAnswerFunc, filter}) => {


  return (
    <QnAListContainer>
      <IndividualQuestDiv>
      {!filter && questions?.map((each) => {
        return (
          <IndividualQuestions urlImage={urlImage} productId={productId} chosenProduct={chosenProduct} setURLImage={setURLImage} postAnswerfunc={postAnswerFunc} key={each.question_id} question={each}/>
        )
      })}
      {filter && filter?.map((each) => {
        return (
          <IndividualQuestions urlImage={urlImage} productId={productId} chosenProduct={chosenProduct} setURLImage={setURLImage} postAnswerfunc={postAnswerFunc} key={each.question_id} question={each}/>
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
  margin: 0 0 0 30px;
`;

//questionable?
var IndividualQuestDiv = styled.div`
  display: flex;
  flex-direction: column;
`;


export default QuestionsList