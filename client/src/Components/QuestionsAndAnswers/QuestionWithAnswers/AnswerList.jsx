import React, {useState} from 'react';
import IndividualAnswer from './IndividualAnswer.jsx';
import {AnswerSpan, CollapseAnswerButton, LoadMoreAnswersButton} from '../StyledComponents/QuestionWithAnswers/IndividualAnswer.jsx';

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
    setLen(len + 2)
  }

  var collapseAnswers = (e) => {
    e.preventDefault();
    setLen(2)
  }
  return (
    <div>
      <AnswerSpan> Our Answer </AnswerSpan>
      {sortAnswer.slice(0, len).map((each) => {
        return (
          <IndividualAnswer key={each.id} answer={each} />
        )
      })}
       {sortAnswer.length > 2 && len < sortAnswer.length && <LoadMoreAnswersButton onClick={showMoreAnswers} > Load More Answers </LoadMoreAnswersButton>}
       {len > 2 && <CollapseAnswerButton onClick={collapseAnswers}> Collapse Answers </CollapseAnswerButton> }
    </div>
  )
}