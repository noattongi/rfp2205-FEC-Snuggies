import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { format, parseISO } from 'date-fns'

var ReviewTiles = (props) => {
 console.log(props.reviews)

  var formatDate = (date) => {
    var dateISO = parseISO(date.slice(0, 10))
    var formattedDate = (`${format(dateISO, 'MMMM, dd, yyyy')}`)
    return formattedDate
  }
  var recommendFilter = (recommended) => {
    var checked;
    if(recommended === 'true') {
      return checked = '✅ I reccomend this product'
    } else {
      return checked
    }

  }
  return (
   <div>
    <div>⭐️⭐️⭐️⭐️⭐️ Star Rating</div>
    <div>Date Of Review: {formatDate(props.reviews.date)}</div>
    <div>Summary: {props.reviews.summary.substr(0, 60)}</div>
    <div><b>Review Body: {props.reviews.body.substr(0, 250)}</b>

    </div>
    <div>Recommend: {recommendFilter(props.reviews.recommend.toString())}</div>
    <div>Reviewer Name: {props.reviews.reviewer_name}</div>
    <div>Response to Review: {props.reviews.response}</div>
    <div>Rating Helpfulness: {props.reviews.helpfulness}</div>
   </div>
  )
}
export default ReviewTiles