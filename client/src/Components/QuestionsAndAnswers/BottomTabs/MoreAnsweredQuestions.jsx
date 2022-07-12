import React, {useState} from 'react';
import styled from 'styled-components';

var MoreAnsweredQuestions = () => {
  return (
    <MoreAnsweredQuestionsButton> More Answered Questions </MoreAnsweredQuestionsButton>
  )
};

const MoreAnsweredQuestionsButton = styled.button`
  border-radius: 5px;
`;

export default MoreAnsweredQuestions