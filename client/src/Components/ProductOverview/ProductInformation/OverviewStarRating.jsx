// The component housing the shared Star Rating component and the link to 'Read [#] Reviews'

// Import stuff
import React, { useState, useEffect } from 'react';
import { ProductOverviewStarContainer } from '../StyledComponents/Containers.jsx';
import axios from 'axios';
import { ReviewsLink, StarDiv } from '../StyledComponents/ProductInformation/OverviewStars.jsx';
import StarRating from '../../SharedComponents/StarRating.jsx';

// The component
var OverviewStars = (props) => {

  return (
    <ProductOverviewStarContainer>
      {/* Conditionally render the Overview Star component as long as there are stars */
      (props.reviewData.length !== 0) &&
      <StarDiv>
        <StarRating reviewData={props.reviewData} />
        <ReviewsLink onClick={(event) => {event.preventDefault(); window.location.replace('/#Reviews')}}>{<span>Read {props.reviewData.length} Reviews</span> || "Loading Reviews..."}</ReviewsLink>
      </StarDiv>
      }
    </ProductOverviewStarContainer>
  );
}

// Export it
export default OverviewStars;