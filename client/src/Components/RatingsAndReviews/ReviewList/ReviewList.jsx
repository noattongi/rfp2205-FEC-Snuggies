import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReviewTile from './ReviewTiles.jsx'

var ReviewList = (props) => {

  return (
    <div>
    <ReviewTile/>
    <button>More Reviews</button>
    <button>Add A Review</button>
    </div>
  )

}
export default ReviewList