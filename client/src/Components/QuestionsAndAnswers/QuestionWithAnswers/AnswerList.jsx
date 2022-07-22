import React, {useState} from 'react';
import IndividualAnswer from './IndividualAnswer.jsx';
import styled from 'styled-components';

// add Individual Answer
export default function AnswerList ({answerList}) {

  var [toggleModal, setToggleModal] = useState(false);

  var answer = [];

  for (var key in answerList) {
    answer.push(answerList[key])
  };

  var ascending = (a, b) => {
    return b.helpfulness - a.helpfulness
  };

  var sortAnswer = answer.sort(ascending);

  const [len, setLen] = useState(2)

  var showMoreAnswers = (e) => {
    e.preventDefault();
    setLen(sortAnswer.length)
  }

  var collapseAnswers = (e) => {
    e.preventDefault();
    setLen(2)
  };

  var list = Object.values(answerList).length;

  return (
    <AnswerListContainer>
      {list === 0 &&
      <NoAnswerContainer>
        <NoAnswerSpan> There are 0 answers  </NoAnswerSpan>
        <NoAnswerSpan2>Add an answer to this question! </NoAnswerSpan2>
        </NoAnswerContainer>}
      <ScrollAnswers>
        {sortAnswer.slice(0, len).map((each, i) => {
          return (
            <IndividualAnswer index={i} len={len} key={each.id} answer={each} />
          )
        })}
        {sortAnswer.length > 2 && len < sortAnswer.length && <LoadMoreAnswersButton onClick={showMoreAnswers} > Load More Answers </LoadMoreAnswersButton>}
       </ScrollAnswers>
       {len > 2 && <CollapseAnswerButton onClick={collapseAnswers}> Collapse Answers </CollapseAnswerButton> }
    </AnswerListContainer>
  )
};

// styled components
var ScrollAnswers = styled.div`
  display:flex;
  flex-direction: column;
  height: 150px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 10px;
  height: 275px;
`;

var AnswerListContainer = styled.div`

`;

var CollapseAnswerButton = styled.span`
  font-family: 'Nanum Gothic Coding', monospace;
  padding-bottom: 9px;
  border: none;
  background: none;
  width: 9%;
  text-decoration: underline;
  color: #007185;
  :hover {
    cursor: pointer;
    color: #007185;
  };
`;

var NoAnswerContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

var NoAnswerSpan = styled.span`
  font-family: 'Nanum Gothic Coding', monospace;
  font-size: 25px;
  position: absolute;
  left: 520;
  top: 40;
`;

var NoAnswerSpan2 = styled.span`
  font-family: 'Nanum Gothic Coding', monospace;
  font-size: 25px;
  position: absolute;
  left: 450;
  top: 80;
`;

var LoadMoreAnswersButton = styled.span`
  font-family: 'Nanum Gothic Coding', monospace;
  border: none;
  background: none;
  padding-bottom: 9px;
  width: 20%;
  text-decoration: underline;
  color: #007185;
  :hover {
    cursor: pointer;
    color: #007185;
  };
`;

