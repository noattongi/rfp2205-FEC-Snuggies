import React, {useState, useEffect} from 'react';
import SearchQuestions from './Form/SearchQuestions.jsx';
import QuestionsList from './QuestionWithAnswers/QuestionsList.jsx';
import MoreAnsweredQuestions from './BottomTabs/MoreAnsweredQuestions.jsx';
import AddQuestion from './BottomTabs/AddQuestion.jsx';
import {QnAContainer, FormInput, BottomTabContainer} from './StyledComponents/Containers.jsx';
const axios = require('axios');

var QnaIndex = (props) => {

  const [question, setQuestion] = useState({});

  useEffect(() => {
    axios.get('/snuggie/qa/questions', {params : {product_id: 40377}})
    .then((response) => {
      setQuestion(response.data);
    })
    .catch((error) => {
      console.log('Error in retrieving question list from server', error);
    });
  }, []);

  return (
    <QnAContainer>
        <SearchQuestions/>
        <QuestionsList questions={question} />
      <BottomTabContainer>
         <MoreAnsweredQuestions />
         <AddQuestion />
      </BottomTabContainer>
    </QnAContainer>
  )
}

export default QnaIndex