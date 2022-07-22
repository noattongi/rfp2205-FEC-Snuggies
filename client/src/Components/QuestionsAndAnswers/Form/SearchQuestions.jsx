import React, {useState} from 'react';
import styled from 'styled-components';

var SearchQuestions = ({search}) => {

  const [entry, setEntry] = useState('');

  var handleChange = (e) => {
    setEntry(e.target.value);
    search(e.target.value)
  };

  return (
    <div>
      <FormInput value={entry} onChange={handleChange} placeholder="Have a Question? Search for answers..."/>
      <MagnifyingIcon className="fa-solid fa-magnifying-glass"> </MagnifyingIcon>
    </div>
  )
};

// styled components
var FormInput = styled.input`
  width: 30%;
  padding: 5px;
  font-family: 'Nanum Gothic Coding', monospace;
  border: 2px solid black;
  border-radius: 5px;
  position: absolute;
`;

var MagnifyingIcon = styled.i`
  position: relative;
  left: 410;
  top: 5.8;
  :hover {
    cursor: pointer;
  };
`;

export default SearchQuestions