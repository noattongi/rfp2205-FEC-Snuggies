import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const ComparisonModal = () => {
  return (
  <div>
    <div>
      <p>Current Product Check Marks</p>
      <p>___________________________</p>
      <p>✅</p>
      <p>❌</p>
      <p>✅</p>
      <p>❌</p>
      <p>✅</p>
    </div>
    <div>
      <p>Comparison Metrics</p>
      <p>___________________________</p>
      <p>Delivered by Carson's plane</p>
      <p>Woven from Aaron's luscious locks</p>
      <p>Guarantees you pass the TA</p>
      <p>Does not contain copied code</p>
      <p>Something else made up</p>
    </div>
    <div>
      <p>Related Product Check Marks</p>
      <p>___________________________</p>
      <p>✅</p>
      <p>❌</p>
      <p>❌</p>
      <p>✅</p>
      <p>✅</p>
    </div>
  </div>
  )
}

export default ComparisonModal;
