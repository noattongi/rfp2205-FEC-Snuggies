import React, {useState} from 'react'
import styled from 'styled-components'
// modal

var AddAnswer = () => {
  return (
    <AddAnswerButton> Add Answer </AddAnswerButton>
  )
}

const AddAnswerButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  width: 40%;
  text-decoration: underline;
  color: blue;
`;

export default AddAnswer