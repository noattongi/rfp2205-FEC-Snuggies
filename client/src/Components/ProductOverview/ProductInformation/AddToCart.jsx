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
    if (style.skus) {
      // style.skus is an object where each key is a different sku_id (has size and quanitity attributes)
      setSkus(Object.keys(style.skus));
    }
  }, [props.chosenStyle]);

  // Build options to display for the quantity-- options depend on the selected size
  var quantityOptions = [];
  if (style.skus) {
    if (style.skus[chosenSize]) {
      if (style.skus[chosenSize].quantity === 0) {
        let noStock = <option value='' key="noStock">OUT OF STOCK</option>;
        quantityOptions.push(noStock);
      } else {
        for (let i = 1; i <= style.skus[chosenSize].quantity && i < 16; i++) {
          let newOption = <option value={i} key={`quantity${i}`}>{i}</option>;
          quantityOptions.push(newOption);
        }
      }
    }
  }

  return (
    <div>
      <SizeAndCountContainer>
        <SizeDropdown name="size" id="size-select" onChange={(event) => {setChosenSize(event.target.value)}}>
          <option value="">--Please select a size--</option>
          {/* For each sku_id, add a size */}
          {skus.map((sku_id, index) => {
            if (style.skus[sku_id.toString()]) {
              return <option value={sku_id} key={`size${index}`}>{style.skus[sku_id.toString()].size}</option>
            }
          })}
        </SizeDropdown>
        <QuantityDropdown name="quantity" id="quantity-select" disabled={!chosenSize} onChange={(event) => {setChosenQuantity(event.target.value)}}>
          <option value="">-</option>
          {/* Add options for the quantity based on how many are available for the selected size */}
          {quantityOptions.map((quantity) => {
            return quantity;
          })}
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