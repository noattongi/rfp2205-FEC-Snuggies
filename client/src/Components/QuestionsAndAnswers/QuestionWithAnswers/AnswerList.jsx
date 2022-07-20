import React, {useState} from 'react';
import IndividualAnswer from './IndividualAnswer.jsx';
import styled from 'styled-components';

// add Individual Answer
export default function AnswerList ({answerList}) {

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
  }
  return (
    <div>
      <AnswerSpan> A: </AnswerSpan>
      <ScrollAnswers>
        {sortAnswer.slice(0, len).map((each) => {
          return (
            <IndividualAnswer len={len} key={each.id} answer={each} />
          )
        })}
        {sortAnswer.length > 2 && len < sortAnswer.length && <LoadMoreAnswersButton onClick={showMoreAnswers} > Load More Answers </LoadMoreAnswersButton>}
       </ScrollAnswers>
       {len > 2 && <CollapseAnswerButton onClick={collapseAnswers}> Collapse Answers </CollapseAnswerButton> }
    </div>
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
  height: 200px;
`;

var AnswerSpan = styled.span`
  height: 1rem;
  font-weight: bold;

`;

var CollapseAnswerButton = styled.span`
  padding: 9px;
  border: none;
  background: none;
  width: 9%;
  text-decoration: underline;
  color: blue;
  :hover {
    cursor: pointer;
    color: blue;
  };
`;

var LoadMoreAnswersButton = styled.span`
  border: none;
  background: none;
  width: 20%;
  text-decoration: underline;
  color: blue;
  :hover {
    cursor: pointer;
    color: blue;
  };
`;

