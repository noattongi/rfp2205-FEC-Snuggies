// The 'main' component that keeps all of the pieces of the Product Information together

// Import stuff
import React, { useState } from 'react';
import { ProductInformationContainer } from '../StyledComponents/Containers.jsx';
import OverviewStars from './OverviewStarRating.jsx';
import Styles from './StyleSelector.jsx';
import CartButtons from './AddToCart.jsx';

// The component
var Information = (props) => {

  return (
    <ProductInformationContainer>
      <OverviewStars />
      <div>Category</div>
      <div>Name</div>
      <div>Price</div>
      <div>Style > Selected Style</div>
      <Styles />
      <CartButtons />
    </ProductInformationContainer>
  );
}

// Export it
export default Information;