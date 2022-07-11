import React, {useState} from 'react';
import SearchQuestions from './Form/SearchQuestions.jsx';
import QuestionsList from './QuestionWithAnswers/QuestionsList.jsx';
import MoreAnsweredQuestions from './BottomTabs/MoreAnsweredQuestions.jsx';
import AddQuestion from './BottomTabs/AddQuestion.jsx';
import {QnAContainer, FormInput, BottomTabContainer} from './StyledComponents/Containers.jsx';

var QnaIndex = (props) => {


  return (
    <QnAContainer>
        <SearchQuestions/>
        <QuestionsList />
      <BottomTabContainer>
         <MoreAnsweredQuestions />
         <AddQuestion />
      </BottomTabContainer>
    </QnAContainer>
  )
}

export default QnaIndex