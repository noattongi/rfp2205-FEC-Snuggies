import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

var ReviewTiles = (props) => {
  return (
   <div>
    <div>⭐️⭐️⭐️⭐️⭐️</div>
    <div>Date Of Review</div>
    <div>Review Summary</div>
    <div>Review Body</div>
    <div>Reccomend</div>
    <div>Reviwer Name</div>
    <div>Response to Review</div>
    <div>Rating Helpfulness</div>
   </div>
  )
}
export default ReviewTiles