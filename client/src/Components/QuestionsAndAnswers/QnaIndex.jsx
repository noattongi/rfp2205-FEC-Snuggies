import React, {useState, useEffect} from 'react';
import SearchQuestions from './Form/SearchQuestions.jsx';
import QuestionsList from './QuestionWithAnswers/QuestionsList.jsx';
import MoreAnsweredQuestions from './BottomTabs/MoreAnsweredQuestions.jsx';
import AddQuestion from './BottomTabs/AddQuestion.jsx';
// import {QnAContainer, BottomTabContainer} from './StyledComponents/Containers.jsx';
import styled from 'styled-components'
const axios = require('axios');

var QnaIndex = (props) => {

  const [question, setQuestion] = useState([]);
  const [defaultQ, setDefaultQ] = useState([]);
  // const [answer, setAnswer] = useState({});

  useEffect(() => {
    axios.get('/snuggie/qa/questions', {params : {product_id: 40378, count: 4}})
    .then((response) => {
      setQuestion(response.data);
      setDefaultQ(response.data);
      // axios.get('/snuggie/answers', {params: {product_id: 1, count: 2}})
      // .then((response) => {
      //   setAnswer(response.data);
      //   console.log('answers', response.data)
      // })
      // .catch((error) => {
      //   console.log('Error in retrieving answers list from server', error)
      // });
    })
    .catch((error) => {
      console.log('Error in retrieving question list from server', error);
    });
  }, []);

  var search = (query) => {
    if (query.length > 2) {
      var filtered = defaultQ.results.filter((e) => e.question_body.includes(query));
      setQuestion(filtered);
      console.log('filterd', filtered)
      console.log('log the question', question)
      console.log('defaultq', defaultQ)
    }
  };

  return (
    <QnAContainer>
        <SearchQuestions search={search}/>
        <QuestionsList questions={question} />
      <BottomTabContainer>
      <MoreAnsweredQuestions />
         <AddQuestion />
      </BottomTabContainer>
    </QnAContainer>
  )
};

const QnAContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const BottomTabContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

export default QnaIndex


