import React, {useState} from 'react';
import styled from 'styled-components';

var AddQuestion = () => {
  return (
    <AddQuestionButton> Add Question + </AddQuestionButton>
  )
};

const AddQuestionButton = styled.button`
  border-radius: 5px;
`;

export default AddQuestion