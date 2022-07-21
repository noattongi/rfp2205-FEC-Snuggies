// The 'main' component that keeps all of the pieces of the Product Information together

// Import stuff
import React, { useState, useEffect } from 'react';
import { ProductInformationContainer, PriceContainer } from '../StyledComponents/Containers.jsx';
import { Price, Price_struck, Price_sale } from '../StyledComponents/ProductInformation/Price.jsx';
import { CategorySpan, ProductNameSpan, StyleSpan, StyleNameSpan } from '../StyledComponents/ProductInformation/Information.jsx';
import OverviewStars from './OverviewStarRating.jsx';
import Styles from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

// The component
var Information = (props) => {

  var salePrice = props.chosenStyle.sale_price;
  // Iterate and choose the default style whenever the style list changes (e.g. choose new product)
  useEffect(() => {
    if (props.styles.length > 0) {
      // Per business requirements document, the default style selected is the first one in the list
      props.setChosenStyle(props.styles[0]);
      // Then get the sale price
      salePrice = props.chosenStyle.sale_price;
    }
  }, [props.styles]);

  // Generate the price component
  var price;
  if (salePrice) {
    price = <PriceContainer><Price_struck>{`$${props.chosenStyle.original_price}`}</Price_struck><Price_sale>{`$${props.chosenStyle.sale_price}`}</Price_sale></PriceContainer>
  } else if (props.chosenStyle.original_price) {
    price = <PriceContainer>{(props.chosenStyle && <Price>{`$${props.chosenStyle.original_price}`}</Price>) || "Loading Price..."}</PriceContainer>
  }

  return (
    <ProductInformationContainer>
      <OverviewStars product={props.product} reviewData={props.reviewData} />
      <CategorySpan>{(props.product && props.product.category) || "Loading Category..."}</CategorySpan>
      <ProductNameSpan>{(props.product && props.product.name) || "Loading Product Name..."}</ProductNameSpan>
      {price}
      <StyleSpan>Style > {<StyleNameSpan>{props.chosenStyle && props.chosenStyle.name || "Loading Selected Style..."}</StyleNameSpan> }</StyleSpan>
      <Styles styles={props.styles} chosenStyle={props.chosenStyle} setChosenStyle={props.setChosenStyle} />
      <AddToCart chosenStyle={props.chosenStyle} />
    </ProductInformationContainer>
  );
}

// Export it
export default Information;