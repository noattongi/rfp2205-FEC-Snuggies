import React, {useState} from 'react';
import styled from 'styled-components';

var MoreAnsweredQuestions = ({loadMore}) => {
  return (
    <MoreAnsweredQuestionsButton id="12345" onClick={loadMore}> More Answered Questions </MoreAnsweredQuestionsButton>
  )
};

// styled components
var MoreAnsweredQuestionsButton = styled.button`
  font-family: 'Nanum Gothic Coding', monospace;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  };
`;

export default MoreAnsweredQuestions