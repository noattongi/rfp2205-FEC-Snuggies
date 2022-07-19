// The component that houses all of the stuff relevant to the cart

// Import stuff
import React, { useState, useEffect } from 'react';
import { SizeAndCountContainer, AddToCartContainer } from '../StyledComponents/Containers.jsx';
import SizeDropdown from '../StyledComponents/ProductInformation/AddToCart/SizeDropdown.jsx';
import QuantityDropdown from '../StyledComponents/ProductInformation/AddToCart/QuantityDropdown.jsx';
import AddToCartButton from '../StyledComponents/ProductInformation/AddToCart/AddToCart.jsx';
import FavoriteButton from '../StyledComponents/ProductInformation/AddToCart/Favorite.jsx';

// The component
var AddToCart = (props) => {

  // Try deconstructing props & initializing to empty obj

  const [skus, setSkus] = useState([]);
  const [chosenSize, setChosenSize] = useState();
  const [chosenQuantity, setChosenQuantity] = useState();

  var style = props.chosenStyle;

  // When the chosenStyle prop is received/updated, update the skus state
  useEffect(() => {
    console.log('blah ~~~~>', style);
    if (style.skus) {
      // style.skus is an object where each key is a different sku_id (has size and quanitity attributes)
      setSkus(Object.keys(style.skus));
    }
  }, [props.chosenStyle]);
  console.log('after useEff------>', skus, style);
  for (let i = 0; i < skus.length; i++) {
    var thingy = style.skus[skus[i].toString()];
    if (thingy) {
      console.log('THING', thingy, 'SKUS', skus, "STYLE", style);
      console.log('SIZE', thingy.size);
    }
  }
  console.log('CHOSEN STYLE AHHHHH ------------>', props.chosenStyle);

  return (
    <div>
      <SizeAndCountContainer>
        <SizeDropdown name="size" id="size-select">
          <option value="">--Please select a size--</option>
          {/* For each sku_id, add a size */}
          {skus.map((sku_id, index) => {
            console.log('inside MAP ----->', style.skus, 'SKUID', sku_id, 'SKU', style.skus[sku_id.toString()], 'SIZE', style.skus[sku_id.toString()]);
            if (style.skus[sku_id.toString()]) {
              return <option value={sku_id} key={`size${index}`}>{style.skus[sku_id.toString()].size}</option>
            }
          })}
        </SizeDropdown>
        <QuantityDropdown name="quantity" id="quantity-select">
          <option value="">-</option>
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