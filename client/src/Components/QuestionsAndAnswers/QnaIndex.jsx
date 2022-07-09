import React, {useState} from 'react';
import SearchQuestions from './Form/SearchQuestions.jsx';
import QuestionsList from './QuestionWithAnswers/QuestionsList.jsx';
import MoreAnsweredQuestions from './QuestionWithAnswers/MoreAnsweredQuestions.jsx';
import AddQuestion from './QuestionWithAnswers/AddQuestion.jsx'

var QnaIndex = (props) => {


  return (
    <section>
      <SearchQuestions/>
      <QuestionsList />
      <section>
      <MoreAnsweredQuestions />
      <AddQuestion />
      </section>
    </section>
  )
}

export default QnaIndex