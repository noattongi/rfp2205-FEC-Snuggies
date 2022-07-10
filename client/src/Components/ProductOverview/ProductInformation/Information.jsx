// The 'main' component that keeps all of the pieces of the Product Information together

// Import stuff
import React, { useState } from 'react';
import { ProductInformationContainer, StyleThumbnailContainer, SizeAndCountContainer, AddToCartContainer } from '../StyledComponents/Containers.jsx';
import OverviewStars from './OverviewStarRating.jsx';

// The component
var Information = (props) => {

  return (
    <ProductInformationContainer>
      <OverviewStars />
      <div>Category</div>
      <div>Name</div>
      <div>Price</div>
      <div>Style > Selected Style</div>
      <div>StylesContainer</div>
      <div> Size and Count buttons</div>
      <div>Add to cart/favorite buttons</div>
    </ProductInformationContainer>
  );
}

// Export it
export default Information;