import React from 'react';
import ReactDOM from 'react-dom';
import RInC from 'client/src/Components/RelatedItemsAndComparison/RInCIndex.jsx'

var App = () => {
  return(
    <div>
      <RInC/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))