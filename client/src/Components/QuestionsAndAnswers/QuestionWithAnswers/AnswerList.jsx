import React, {useState} from 'react';
import IndividualAnswer from './IndividualAnswer.jsx';
import {AnswerSpan, CollapseAnswerButton, LoadMoreAnswersButton} from '../StyledComponents/QuestionWithAnswers/IndividualAnswer.jsx';

// add Individual Answer
export default function AnswerList ({answerList}) {

  var answer = [];
  for (var key in answerList) {
    answer.push(answerList[key])
  };

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
      {answer.slice(0, len).map((each) => {
        return (
          <IndividualAnswer key={each.id} answer={each} />
        )
      })}
       {answer.length > 2 && len < answer.length && <LoadMoreAnswersButton onClick={showMoreAnswers} > Load More Answers </LoadMoreAnswersButton>}
       {len > 2 && <CollapseAnswerButton onClick={collapseAnswers}> Collapse Answers </CollapseAnswerButton> }
    </div>
  )
}