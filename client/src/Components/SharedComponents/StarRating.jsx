// The Star Rating component-- the colored stars shown is equivalent to the average rating, accurate up to the fourth of a star

// Import stuff
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components


// The component itself
const StarRating = (props) => {

  const [averageRating, setAverageRating] = useState(0);

  // The reviews prop is loaded, calculate the averageRating
  useEffect(() => {
    let rating = 0;
    for (let i = 0; i < props.reviews.count; i++) {
      rating += props.reviews.results[i].rating;
    }
    setAverageRating(rating / props.reviews.count);
  }, [props.reviews]);





  return (

  );
}

export default StarRating;