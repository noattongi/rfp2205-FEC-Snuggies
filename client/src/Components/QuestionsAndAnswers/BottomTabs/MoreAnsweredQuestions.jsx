import React, {useState} from 'react';
import styled from 'styled-components';

var MoreAnsweredQuestions = ({loadMore}) => {
  return (
    <MoreAnsweredQuestionsButton id="12345" onClick={loadMore}> More Answered Questions </MoreAnsweredQuestionsButton>
  )
};

// styled components
var MoreAnsweredQuestionsButton = styled.button`
  border-radius: 5px;
`;

export default MoreAnsweredQuestions