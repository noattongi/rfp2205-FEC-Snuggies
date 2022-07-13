import React, {useState, useEffect} from 'react';
import SearchQuestions from './Form/SearchQuestions.jsx';
import QuestionsList from './QuestionWithAnswers/QuestionsList.jsx';
import MoreAnsweredQuestions from './BottomTabs/MoreAnsweredQuestions.jsx';
import AddQuestion from './BottomTabs/AddQuestion.jsx';
import styled from 'styled-components'
const axios = require('axios');

var QnaIndex = (props) => {

  const [question, setQuestion] = useState([]);
  const [defaultQ, setDefaultQ] = useState([]);
  const [len, setLen] = useState(4)
  // const [answer, setAnswer] = useState({});

  var questionSort = question.results?.slice(0, len);

  useEffect(() => {
    axios.get('/snuggie/qa/questions', {params : {product_id: 40713, count: 100}} )
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
      console.log('log the question', questionSort)
      console.log('defaultq', defaultQ)
    }
  };

  var loadQ = () => {
    return setLen(len + 2)
  }
  return (
    <QnAContainer>
        <SearchQuestions search={search}/>
        <QuestionScrollDiv>
          <QuestionsList questions={questionSort} />
        </QuestionScrollDiv>
      <BottomTabContainer>
      {len < question.results?.length && question.results.length > 2 && <MoreAnsweredQuestions loadMore ={loadQ} />}
         <AddQuestion />
      </BottomTabContainer>
    </QnAContainer>
  )
};

// styled components
var QnAContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 50px;
`;

var BottomTabContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

var QuestionScrollDiv = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
`;
export default QnaIndex


