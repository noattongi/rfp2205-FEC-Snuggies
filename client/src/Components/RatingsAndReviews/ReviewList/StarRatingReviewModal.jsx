// The Star Rating component-- the colored stars shown is equivalent to the average rating, accurate up to the fourth of a star

// Import stuff
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Star from '../ReviewList/Star.jsx'

// Styled components
const StarContainerModal = styled.div`
  position: relative;
  display: inline;
  width: 100%;
`;
const EmptyStarModal = styled.i`
  color: gray;
`;
const FilledStarModal = styled.i`
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
const StarRatingModal = (props) => { //onCHange

  const [rating, setRating] = useState(0);
  const [ratingText, setRatingText] = useState('');

   const changeRatingText = (newRating) => {
    if(newRating === 5) {
      setRatingText('Great')
    } else if (newRating === 4) {
        setRatingText('Good')
    } else if (newRating === 3) {
      setRatingText('Average')
    } else if (newRating === 2) {
      setRatingText('Good')
    } else if (newRating === 1) {
      setRatingText('Poor')
    }
   }


  const changeRating = (newRating) => {
    setRating(newRating);
    changeRatingText(newRating)
    props.onChange?.(newRating);
  };


  return (
    <StarContainerModal>
    <div>
      {[1, 2, 3, 4, 5].map((value, index) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))}
     {ratingText !== '' && <span>{ratingText}</span>}
    </div>
    </StarContainerModal>

  );
}

export default StarRatingModal;