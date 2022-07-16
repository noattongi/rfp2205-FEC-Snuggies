import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from './ImageGallery/Gallery.jsx';
import Information from './ProductInformation/Information.jsx';
import { ProductOverviewContainer, ProductInformationDescription, SloganDescriptionContainer } from './StyledComponents/Containers.jsx';
import { Slogan, Description, Divider, FeatureList, Feature } from './StyledComponents/ProductInformation/Description.jsx';

var Overview = (props) => {

  const [styles, setStyles] = useState([]);
  const [chosenStyle, setChosenStyle] = useState({});
  const [reviews, setReviews] = useState({});

  // Upon component mounting, send a GET request and get all the relevant data (this may need to be refactored if the team decides to house all client-side request handling in the main App file)
  useEffect(() => {
    if (props.productId) {
      // Send axios request to get all styles
      axios.get('/snuggie/styles', { params: { product_id: props.productId } })
        // Then set the styles state
        .then((results) => {
          return setStyles(results.data.results);
        })
        // Send axios request to get all the review data that is relevant for the specific product
        // Then set the reviews state
        .catch((error) => {
          console.log('An error occurred when initializing data received from server:', error);
        });
    }
  }, [props.productId]); // The second argument is an empty array, which makes it so that we only run the function once

  return (
    <div>
      <ProductOverviewContainer>
        <Gallery chosenStyle={chosenStyle} />
        <Information product={props.chosenProduct} styles={styles} chosenStyle={chosenStyle}  setChosenStyle={setChosenStyle} reviews={reviews} />
      </ProductOverviewContainer>

      {props.chosenProduct.description &&
      <ProductInformationDescription>
        <SloganDescriptionContainer>
          <Slogan>
            {props.chosenProduct.slogan}
          </Slogan>
          <Description>
            {props.chosenProduct.description}
          </Description>
        </SloganDescriptionContainer>
        <Divider />
        <FeatureList>
          {props.chosenProduct.features && props.chosenProduct.features.map((feature) => {
            return (
              <Feature> {feature.feature}{<span>-- </span> && feature.value}</Feature>
            );
          })}
        </FeatureList>
      </ProductInformationDescription>
      }

    </div>
  );

}

export default Overview;