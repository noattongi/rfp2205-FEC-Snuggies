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
// // The Star Rating component-- the colored stars shown is equivalent to the average rating, accurate up to the fourth of a star

// // Import stuff
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

// // Styled components
// const StarContainer = styled.div`
//   position: relative;
//   display: inline;
//   width: 100%;
// `;
// const EmptyStar = styled.i`
//   color: gray;
// `;
// const FilledStar = styled.i`
//   position: absolute;
//   top: 0;
//   left: 0;
//   color: yellow;
//   overflow: hidden;
//   width: ${props => props.width}%;
//   height: 100%;
//   z-index: 10;
// `;

// // Helper function to cap the width of a filled star to the nearest increment of 25%
// // Input: A number (intended to be an integer between 0 and 100)
// // Output: A number (multiple of 25)


// // The component itself
// const StarRatingModal = (props) => {

//   const [averageRating, setAverageRating] = useState(0);

//   // The reviews prop is loaded, calculate the averageRating

//   var handleStarClick = (event, key) => {
//     console.log(key, 'key')
//     console.log(event, 'keventy')
//     setAverageRating(key)
//   }

//   // Construct each star to prepare for render
//   // var stars = []; // Array of pairs of stars (pair: an empty one and then a filled one to be rendered on top)
//   // let starCount = 0; // Number to keep track of how many stars we've rendered
//   // let rating = averageRating; // Copy of the average rating so we don't mutate it
//   // while (starCount < 5) { // Keep creating pairs of stars until we have 5 pairs
//   //   let width = 0;
//   //   if (rating <= 5 && rating >= 0) { // Determine the width of this star (how much is colored)
//   //     if (rating < 1) {
//   //       width = rating; // *100 because the styled component turns it into a %
//   //     } else {
//   //       width = 100;
//   //     }
//   //   }
//   //   stars.push([<EmptyStar className="fa-solid fa-star"  key={`Empty${starCount}` } />, <FilledStar className="fa-solid fa-star" width={width} key={`Fill${starCount}`} />]);
//   //   rating--; // One pair of stars rendered --> at least a rating of 1
//   //   starCount++;
//   // }

//   return (
//          <StarContainer>
//       {/* For each pair of empty--filled stars... */}
//       <input className="fa-solid fa-star" type='button' value="1" name="Fit" /> 1
//       <input type="radio" value="2" name="Fit" /> 2
//       <input type="radio" value="3" name="Fit" /> 3
//       <input type="radio" value="4" name="Fit" /> 4
//       <input type="radio" value="5" name="Fit" /> 5
//      <EmptyStar className="fa-solid fa-star" type='radio' key={`Empty${5}` } /><FilledStar className="fa-solid fa-star" key={`Fill${5}`} />
//           </StarContainer>

//   )
// }

// export default StarRatingModal;