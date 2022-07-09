import React from 'react';
import ReactDOM from 'react-dom';
import QnaIndex from './Components/QuestionsAndAnswers/QnaIndex.jsx'
import RInC from './Components/RatingsAndReviews/RelatedItemsAndComparison.jsx'
var App = () => {



  return(
    <div>
      Overview
      <br/>
      <RInC/>
      <br/>
      <QnaIndex/>
      <br/>
      RatingsAndReviews
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))