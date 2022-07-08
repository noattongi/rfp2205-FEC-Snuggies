import React from 'react';
import ReactDOM from 'react-dom';
import QnaIndex from './Components/QuestionsAndAnswers/QnaIndex.jsx'

var App = () => {



  return(
    <div>
      Overview
      <br/>
      RelatedItems
      <br/>
      <QnaIndex/>
      <br/>
      RatingsAndReviews
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))