import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ImagePool from './ImagePool.jsx'
import { format, parseISO } from 'date-fns'
import {ReviewTile} from '../StyledComponents/ReviewLimitScroll.jsx'

var ReviewTiles = (props) => {


  var formatDate = (date) => {
    var dateISO = parseISO(date.slice(0, 10))
    var formattedDate = (`${format(dateISO, 'MMMM, dd, yyyy')}`)
    return formattedDate
  }
  var recommendFilter = (recommended) => {
    var recommend;
    if(recommended === 'true') {
      return recommend = '✅ I recommend this product'
    } else {
      return recommend
    }
  }




  return (
    <ReviewTile>
   <div>
    <div>⭐️⭐️⭐️⭐️⭐️ Star Rating</div>
    <div>Date Of Review: {formatDate(props.reviews.date)}</div>
    <div>Summary: {props.reviews.summary.substr(0, 60)}</div>
    <div><b>Review Body: {props.reviews.body.substr(0, 250)}</b>
    {props.reviews.photos.map((photo, index) =>
        <ImagePool key={index}
                  photo={photo}/>
      )}
    </div>
    <div>Recommend: {recommendFilter(props.reviews.recommend.toString())}</div>
    <div>Reviewer Name: {props.reviews.reviewer_name}</div>
    <div>{props.reviews.response && <h6>{props.reviews.response}</h6>}</div>
    <div>Helpful? yes ({props.reviews.helpfulness})</div>
   </div>
   </ReviewTile>
  )
}
export default ReviewTiles