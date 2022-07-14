import React from 'react';
import ReactDOM from 'react-dom';
import AddQuestion from '../../client/src/Components/QuestionsAndAnswers/BottomTabs/AddQuestion.jsx';

it ("renders a button", () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddQuestion/>, div)
})