// The Star Rating component-- the colored stars shown is equivalent to the average rating, accurate up to the fourth of a star

// Import stuff
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const StarContainer = styled.div`
  position: relative;
  display: inline;
  width: 100%;
`;
const EmptyStar = styled.i`
  color: gray;
`;
const FilledStar = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  color: yellow;
  overflow: hidden;
  width: ${props => props.width}%;
  height: 100%;
  z-index: 10;
`;

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

  // Construct each star to prepare for render
  var stars = []; // Array of pairs of stars (pair: an empty one and then a filled one to be rendered on top)
  let starCount = 0; // Number to keep track of how many stars we've rendered
  let rating = averageRating; // Copy of the average rating so we don't mutate it
  while (starCount < 5) { // Keep creating pairs of stars until we have 5 pairs
    let width = 0;
    if (rating <= 5 && rating >= 0) { // Determine the width of this star (how much is colored)
      if (rating < 1) {
        width = (rating % 1) * 100; // *100 because the styled component turns it into a %
      } else {
        width = 100;
      }
    }
    stars.push([<EmptyStar className="fa-solid fa-star" key={`Empty${starCount}`} />, <FilledStar className="fa-solid fa-star" width={width} key={`Fill${starCount}`} />]);
    rating--; // One pair of stars rendered --> at least a rating of 1
    starCount++;
  }

  return (
    <StarContainer>
      {/* For each pair of empty--filled stars... */}
      {stars.map((starPair, index = 0) => {
        return (
          // Render the filled star on top of an empty one
          <StarContainer key={index++}>
            {starPair.map((star) => {
              return star;
            })}
          </StarContainer>
        );
      })}
    </StarContainer>
  );
}

export default StarRating;