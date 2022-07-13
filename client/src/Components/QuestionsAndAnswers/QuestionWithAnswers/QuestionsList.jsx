import React, {useState, useEffect} from 'react';
import IndividualQuestions from './IndividualQuestions.jsx';
import styled from 'styled-components';

// need to map each question

var QuestionsList = ({questions}) => {

  // var [q, setQ] = useState([])

  // useEffect(() => {
  //   setQ(questions)
  // }, [questions])

  console.log('Qlist', questions)
  // console.log('Q state', q)
  return (
    <QnAListContainer>
      <IndividualQuestDiv>
      {questions?.map((each) => {
        return (
          <IndividualQuestions key={each.question_id} question={each}/>
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