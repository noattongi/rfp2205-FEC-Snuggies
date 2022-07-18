// The component that houses all of the stuff relevant to the cart

// Import stuff
import React, { useState } from 'react';
import { SizeAndCountContainer, AddToCartContainer } from '../StyledComponents/Containers.jsx';
import SizeDropdown from '../StyledComponents/ProductInformation/AddToCart/SizeDropdown.jsx';
import QuantityDropdown from '../StyledComponents/ProductInformation/AddToCart/QuantityDropdown.jsx';
import AddToCartButton from '../StyledComponents/ProductInformation/AddToCart/AddToCart.jsx';
import FavoriteButton from '../StyledComponents/ProductInformation/AddToCart/Favorite.jsx';

// The component
var AddToCart = (props) => {

  return (
    <div>
      <SizeAndCountContainer>
        <SizeDropdown>
          <option value='S'>S</option>
          <option value='M'>M</option>
          <option value='L'>L</option>
        </SizeDropdown>
        <QuantityDropdown>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </QuantityDropdown>
      </SizeAndCountContainer>
      <AddToCartContainer>
        <AddToCartButton>Add to Cart</AddToCartButton>
        <FavoriteButton>❤️ Button</FavoriteButton>
      </AddToCartContainer>
    </div>
  );
}

// Export it
export default AddToCart;