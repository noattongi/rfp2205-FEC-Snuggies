// The List of Thumbnail components

// Import stuff
import React, { useState, useEffect } from 'React';


// The list component itself
var ImagePool = (props) => {
  console.log(props.photo.url, 'propssssss')
  // const [chosenThumbnail, setChosenThumbnail] = useState('');

  return (
    <div><img src={props.photo.url} /></div>
  );
  }
export default ImagePool;