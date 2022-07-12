import React, {useState} from 'react';
import {FormInput} from '../StyledComponents/Containers.jsx';

var SearchQuestions = ({search}) => {

  const [entry, setEntry] = useState('');

  var handleChange = (e) => {
    setEntry(e.target.value);
    search(e.target.value)
  };

  return (
    <FormInput value={entry} onChange={handleChange} placeholder="Have a Question? Search for answers..."/>
  )
}

export default SearchQuestions