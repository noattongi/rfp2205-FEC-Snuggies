import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import styled from 'styled-components';
import IndividualAnswer from './IndividualAnswer.jsx';
var axios = require('axios')

var IndividualQuestions = ({urlImage, setURLImage, question, postAnswerfunc}) => {

  var [toggleModal, setToggleModal] = useState(false);
  var [helpful, setHelpful] = useState(question.question_helpfulness);
  var [vote, setVoted] = useState(false);

  // need to refactor the spacing between the helpfulness button
  var upVote = (e) => {
    e.preventDefault();
    axios.put('/snuggie/question/helpfulness', {question_id: question.question_id})
    .then((response) => {
      setHelpful(helpful + 1);
      setVoted(true);
    })
    .catch((error) => {
      console.log('Error within updating question helpfulness from Client Side')
    })
  };

  return (
    <QnAContainer>
      <QuestionHeaderContainer>
        <QuestionSpan> Q: {question.question_body} </QuestionSpan>
        <HelpfulAndAddAnswerContainer>
         <AddAnswerSpan onClick={() => setToggleModal(!toggleModal)}> Add Answer </AddAnswerSpan>
          {toggleModal && <AddAnswer urlImage={urlImage} setURLImage={setURLImage} postAnswer={postAnswerfunc} toggleModal={setToggleModal}q={question}/>}
          <span> | </span>
          <HelpfulAnswerSpan>
             Helpful?
           {!vote && <YesQuestionSpan onClick={upVote}>Yes</YesQuestionSpan>}
           {!vote && <span>({helpful})</span>}
           {vote && <VotedYesSpan>Yes</VotedYesSpan>}
           {vote && <VotedHelpfulSpan>({helpful})</VotedHelpfulSpan>}
           </HelpfulAnswerSpan>
        </HelpfulAndAddAnswerContainer>
      </QuestionHeaderContainer>
      <AnswerListContainer>
        <AnswerList key={question.question_id} answerList={question.answers} />
      </AnswerListContainer>
    </QnAContainer>
  )
};

// styled components
var QnAContainer = styled.div`
  padding-top: 1rem;
  padding-bottom; 1rem;
  border-bottom: 2px solid grey;
  height: 300px;
`;

var VotedHelpfulSpan = styled.span`
  color: blue;
`;

var VotedYesSpan = styled.span`
  text-decoration: underline;
  color:blue;
  padding-left: 6px;
  padding-right: 2px;
`;

var YesQuestionSpan = styled.span`
  text-decoration: underline;
  :hover {
    cursor: pointer;
    color: blue;
  };
  padding-left: 6px;
  padding-right: 2px;
`;

var AddAnswerSpan = styled.span`
  text-decoration: underline;
  color: blue;
  padding-left: 4.5px;
  padding-right: 4.5px;
`;


var QuestionSpan = styled.span`
  display: flex;
  font-weight: bold;
  flex-wrap: wrap;
  width: 60%;
`;

var HelpfulAnswerSpan = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 4.5px;
  padding-right: 4.5px;
`;

var AnswerListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

var QuestionHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 7.5px;
`;

var HelpfulAndAddAnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%

`;
export default IndividualQuestions