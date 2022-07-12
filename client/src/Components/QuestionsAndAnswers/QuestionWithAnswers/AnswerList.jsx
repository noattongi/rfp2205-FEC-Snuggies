import React, {useState} from 'react';
import IndividualAnswer from './IndividualAnswer.jsx';
import {AnswerSpan} from '../StyledComponents/QuestionWithAnswers/IndividualAnswer.jsx';
// add Individual Answer
export default function AnswerList () {
  return (
    <div>
      <AnswerSpan> Our Answer </AnswerSpan>
      <IndividualAnswer/>
    </div>
  )
}