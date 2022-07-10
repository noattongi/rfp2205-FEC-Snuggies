// The component housing the shared Star Rating component and the link to 'Read [#] Reviews'

// Import stuff
import React, { useState } from 'react';
import { ProductOverviewStarContainer } from '../StyledComponents/Containers.jsx';
import ReviewsLink from '../StyledComponents/ProductInformation/OverviewStars.jsx';

// The component
var OverviewStars = (props) => {

  return (
    <ProductOverviewStarContainer>
      <div>⭐️⭐️⭐️⭐️⭐️</div>
      <ReviewsLink>Read [#] Reviews</ReviewsLink>
    </ProductOverviewStarContainer>
  );
}

// Export it
export default OverviewStars;