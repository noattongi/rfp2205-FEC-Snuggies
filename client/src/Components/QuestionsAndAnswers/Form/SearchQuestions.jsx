import React, {useState} from 'react';
import {FormInput} from '../StyledComponents/Containers.jsx';

var SearchQuestions = () => {

  const [entry, setEntry] = useState('');


  return (
    <FormInput value={entry} onChange={e => setEntry(e.target.value)} placeholder="Have a Question? Search for answers..."/>
  )
}

export default SearchQuestions