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
      <AnswerSpan> Our Answer </AnswerSpan>
      {/* <ScrollAnswers> */}
      {sortAnswer.slice(0, len).map((each) => {
        return (
          <IndividualAnswer key={each.id} answer={each} />
        )
      })}
       {sortAnswer.length > 2 && len < sortAnswer.length && <LoadMoreAnswersButton onClick={showMoreAnswers} > Load More Answers </LoadMoreAnswersButton>}
       {len > 2 && <CollapseAnswerButton onClick={collapseAnswers}> Collapse Answers </CollapseAnswerButton> }
       {/* </ScrollAnswers> */}
    </div>
  )
}

// var ScrollAnswers = styled.div`
//   display:flex;
//   flex-direction: column;
//   width: 50%;
//   height: 150px;
//   overflow-x: hidden;
//   overflow-y: auto;
//   text-align: center;
//   padding: 20px;
// `;

const AnswerSpan = styled.span`
  height: 1rem;
`;

const CollapseAnswerButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  width: 9%;
  text-decoration: underline;
  color: blue;
`;

const LoadMoreAnswersButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  width: 9%;
  text-decoration: underline;
  color: blue;
`;