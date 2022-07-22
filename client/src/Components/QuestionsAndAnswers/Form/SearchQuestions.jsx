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
  font-size: 20px;
  font-weight: bold;
  width: 50%;
  height: 40px;
  padding: 5px;
  font-family: 'Nanum Gothic Coding', monospace;
  border: 2px solid black;
  border-radius: 5px;
  margin: 0 0 10px 30px;
`;

var MagnifyingIcon = styled.i`
  position: relative;
  font-size: 25px;
  right: 30;
  top: 5;
  :hover {
    cursor: pointer;
  };
`;

export default SearchQuestions