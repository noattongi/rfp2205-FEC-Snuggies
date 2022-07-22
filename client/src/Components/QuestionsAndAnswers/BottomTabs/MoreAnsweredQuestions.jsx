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
  border: 2.4px solid black;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: white;
  :hover {
    cursor: pointer;
    background-color: #EF8354;
  };
`;

export default MoreAnsweredQuestions