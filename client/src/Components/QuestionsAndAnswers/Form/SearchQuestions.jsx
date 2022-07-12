import React, {useState} from 'react';
import styled from 'styled-components';

var SearchQuestions = ({search}) => {

  const [entry, setEntry] = useState('');

  var handleChange = (e) => {
    setEntry(e.target.value);
    search(e.target.value)
  };

  return (
    <FormInput value={entry} onChange={handleChange} placeholder="Have a Question? Search for answers..."/>
  )
};

const FormInput = styled.input`
  width: 19.85%;
  padding: 5px;
`;

export default SearchQuestions