// The component housing the shared Star Rating component and the link to 'Read [#] Reviews'

// Import stuff
import React, { useState, useEffect } from 'react';
import { ProductOverviewStarContainer } from '../StyledComponents/Containers.jsx';
import axios from 'axios';
import ReviewsLink from '../StyledComponents/ProductInformation/OverviewStars.jsx';
import StarRating from '../../SharedComponents/StarRating.jsx';

// The component
var OverviewStars = (props) => {

  const [reviewData, setReviewData] = useState();

  // When the prop corresponding to chosenProduct updates, get the review metadata for the product and update this component's hooks
  useEffect(() => {
    if (props.product) {
      axios.get('/reviews/meta', { params: { product_id: props.product.productId }})
        .then((results) => {
          setReviewData(results.data.ratings);
        })
    }
  }, [props.product])

  return (
    <ProductOverviewStarContainer>
      <StarRating reviewData={reviewData} />
      <ReviewsLink>Read [#] Reviews</ReviewsLink>
    </ProductOverviewStarContainer>
  );
}

// Export it
export default OverviewStars;