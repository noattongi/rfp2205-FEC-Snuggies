import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

var ImagePool = (props) => {

  return (
    <div><img src={props.photo.url} /></div>
  );
}

export default ImagePool;