import React, {useState, useEffect, useContext} from 'react';
import SearchQuestions from './Form/SearchQuestions.jsx';
import QuestionsList from './QuestionWithAnswers/QuestionsList.jsx';
import MoreAnsweredQuestions from './BottomTabs/MoreAnsweredQuestions.jsx';
import AddQuestion from './BottomTabs/AddQuestion.jsx';
import styled from 'styled-components';
const axios = require('axios');
import {GlobalContext} from '../../App.js';


var QnaIndex = ({ chosenProduct, productId }) => {
  var storage = useContext(GlobalContext);
  // var { _productId } = storage;

  const [question, setQuestion] = useState([]);
  const [defaultQ, setDefaultQ] = useState([]);
  const [len, setLen] = useState(4);
  const [toggleModal, setToggleModal] = useState(false);
  const [filter, setFilter] = useState();
  const [noSearch, setNoSearch] = useState(false);
  const [urlImage, setURLImage] = useState([]);

  var questionSort = question.results?.slice(0, len);

  useEffect(() => {
    if(productId) {
      axios.get('/snuggie/qa/questions', {params : {product_id: productId, count: 100}} )
      .then((response) => {
        setQuestion(response.data);
        setDefaultQ(response.data);
      })
      .catch((error) => {
        console.log('Error in retrieving question list from server', error);
      });
    }
  }, [productId]);

  var search = (query) => {
    var query = query.toLowerCase();

    if (query.length > 2) {
      var filtered = defaultQ.results.filter((e) =>  e.question_body.toLowerCase().includes(query)) ;
      setFilter(filtered)
      console.log('default', defaultQ)
      console.log('filtered', filtered)
      console.log('q state', question)
      console.log('questionSort', questionSort[0])
    };

    if (query.length < 2) {
      setFilter()
    };

    if (filtered.length === 0) {
      setNoSearch(true);
    } else {
      setNoSearch(false);
    };

  };

  var loadQ = () => {
    return setLen(len + 2)
  };

  console.log('list of question', question);

  var postAnswer = (body) => {
    axios.post('/snuggie/post/answer', body)
    .then((response) => {
       axios.get('/snuggie/qa/questions', {params : {product_id: productId, count: 100}})
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
      axios.get('/snuggie/qa/questions', {params : {product_id: productId, count: 100}})
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
        <Header> Questions and Answers </Header>
        <SearchQuestions search={search}/>
        {noSearch && <h2> NO SEARCH RESULT</h2>}
        <QuestionScrollDiv>
          <QuestionsList urlImage={urlImage} chosenProduct={chosenProduct} productId={productId} setURLImage={setURLImage} postAnswerFunc={postAnswer} filter={filter} questions={questionSort} />
        </QuestionScrollDiv>
      <BottomTabContainer>
      {len < question.results?.length && question.results.length > 2 && <MoreAnsweredQuestions loadMore ={loadQ} />}
        <AddQuestionButton chosenProduct={chosenProduct} productId= {productId} onClick={() =>setToggleModal(true)}> Add Question + </AddQuestionButton>
        {toggleModal &&  <AddQuestion productId={productId} chosenProduct={chosenProduct} postQuest={postQuestion} toggleModel={setToggleModal}/> }
      </BottomTabContainer>
    </QnAContainer>
  )
};

// styled components
var QnAContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: rgb(255, 255, 255);
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-bottom: 25px;
  width: 900px;
  border-radius: 5px;
  box-shadow: 0px 0.4rem 1.5rem rgb(0 0 0 / 25%);
`;

var Header = styled.h1`
  padding-left: 325px;
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


