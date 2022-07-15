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
  const [len, setLen] = useState(4);
  const [toggleModal, setToggleModal] = useState(false);
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
    // console.log('before', question, defaultQ)
    if (query.length > 2) {

      var filtered = defaultQ.results.filter((e) => e.question_body.includes(query));
      setQuestion(filtered)
      console.log('log', questionSort[0].question_body)
      console.log('questionSort', questionSort)
      console.log('q state', question)
      console.log('default', defaultQ)
      console.log('filtered', filtered)

    }
  };

  var loadQ = () => {
    return setLen(len + 2)
  };

  // need to refactor image upload
  var postAnswer = (body) => {
    axios.post('/snuggie/post/answer', body)
    .then((response) => {
       axios.get('/snuggie/qa/questions', {params : {product_id: 40713, count: 100}})
      .then((response) => {
        setQuestion(response.data);
        setDefaultQ(response.data);
      })
    })
    .catch((error) => {
      console.log('error within posting answer from client')
    })

  };

  var postQuestion = (body) => {
    axios.post('/snuggie/post/question', body)
    .then(() => {
      axios.get('/snuggie/qa/questions', {params : {product_id: 40713, count: 100}})
      .then((response) => {
        setQuestion(response.data);
        setDefaultQ(response.data);
      })
      .catch((error) => {
        console.log('error within getting data after posting question from client')
      })
    })
    .catch((error) => {
      console.log('error within posting question from client side')
    })
  };

  return (
    <QnAContainer>
        <SearchQuestions search={search}/>
        {/* <ImageSupreme src='https://steamuserimages-a.akamaihd.net/ugc/802116768214816000/5828D50E63A95FF6425284A76CC663CEDE61C4FE/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'/> */}
        <QuestionScrollDiv>
          <QuestionsList postAnswerFunc={postAnswer} questions={questionSort} />
        </QuestionScrollDiv>
      <BottomTabContainer>
      {len < question.results?.length && question.results.length > 2 && <MoreAnsweredQuestions loadMore ={loadQ} />}
        <AddQuestionButton onClick={() =>setToggleModal(true)}> Add Question + </AddQuestionButton>
        {toggleModal &&  <AddQuestion postQuest={postQuestion} toggleModel={setToggleModal}/> }
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

var AddQuestionButton = styled.button`
  border-radius: 5px;
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

var ImageSupreme = styled.img`
  opacity: 0.5;
  position: absolute;
  right: 10px;
`
export default QnaIndex


