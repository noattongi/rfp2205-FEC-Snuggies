// The 'main' component that keeps all of the pieces of the Product Information together

// Import stuff
import React, { useState, useEffect } from 'react';
import { ProductInformationContainer } from '../StyledComponents/Containers.jsx';
import OverviewStars from './OverviewStarRating.jsx';
import Styles from './StyleSelector.jsx';
import CartButtons from './AddToCart.jsx';

// The component
var Information = (props) => {

  // Iterate and choose the default style whenever the style list changes (e.g. choose new product)
  useEffect(() => {
    // For each of the styles in the passed in styles prop, iterate until we find the default one and set that as the displayed style
    for (let i = 0; i < props.styles.length; i++) {
      if (props.styles[i]["default?"]) {
        props.setChosenStyle(props.styles[i]);
        break;
      }
    }
  }, [props.styles]);

  return (
    <ProductInformationContainer>
      <OverviewStars />
      <div>{(props.product && props.product.category) || "Loading Category..."}</div>
      <div>{(props.product && props.product.name) || "Loading Product Name..."}</div>
      <div>{(props.chosenStyle && props.chosenStyle.original_price) || "Loading Price..."/* Will have to do some math here and calculate the price (in case theres a sale) */}</div>
      <div>Style > {(props.chosenStyle && props.chosenStyle.name) || "Loading Selected Style..."}</div>
      <Styles styles={props.styles} chosenStyle={props.chosenStyle} setChosenStyle={props.setChosenStyle} />
      <CartButtons />
    </ProductInformationContainer>
  );
}

// Export it
export default Information;