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
  const [reviewCount, setReviewCount] = useState();

  // When the prop corresponding to chosenProduct updates, get the review metadata for the product and update this component's hooks
  useEffect(() => {
    if (Object.keys(props.product).length !== 0) {
      axios.get('/snuggie/reviews/meta', { params: { product_id: props.product.id }})
        .then((results) => {
          let data = results.data.ratings;
          setReviewData(data);
          let count = (data["1"] * 1 + data["2"] * 1 + data["3"] * 1 + data["4"] * 1 + data["5"] * 1);
          setReviewCount(count);
        })
        .catch((error) => {
          console.log('Error in getting review metadata from server', error);
        })
    }
  }, [props.product])

  return (
    <ProductOverviewStarContainer>
      <StarRating reviewData={reviewData} />
      <ReviewsLink>{(reviewData && <span>Read {reviewCount} Reviews</span>) || "Loading Reviews..."}</ReviewsLink>
    </ProductOverviewStarContainer>
  );
}

// Export it
export default OverviewStars;