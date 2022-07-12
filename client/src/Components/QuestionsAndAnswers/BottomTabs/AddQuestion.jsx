import React, {useState} from 'react';
import styled from 'styled-components';

var AddQuestion = () => {
  return (
    <AddQuestionButton> Add Question + </AddQuestionButton>
  )
};

// styled components
var AddQuestionButton = styled.button`
  border-radius: 5px;
`;

export default AddQuestion