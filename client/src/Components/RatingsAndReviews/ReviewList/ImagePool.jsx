

// Import stuff
import React, { useState, useEffect } from 'React';

var ImagePool = (props) => {

  return (
    <div><img src={props.photo.url} /></div>
  );
}

export default ImagePool;