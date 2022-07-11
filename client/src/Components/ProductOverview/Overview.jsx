import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductOverviewContainer, ProductInformationDescription } from './StyledComponents/Containers.jsx';
import Gallery from './ImageGallery/Gallery.jsx';
import Information from './ProductInformation/Information.jsx';

var Overview = (props) => {

  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [reviews, setReviews] = useState({});

  // Upon component mounting, send a GET request and get all the relevant data (this may need to be refactored if the team decides to house all client-side request handling in the main App file)
  useEffect(() => {
    console.log('HI!');
    // Send axios request to the specific product
    axios.get('/snuggie/products', { params: { product_id: 40344 } }) // Right now, we have a placeholder for the specific product
      // Then set the products state
      .then((results) => {
        setProduct(results.data);
      })
      // Send axios request to get all styles
      .then(() => {
        return axios.get('/snuggie/styles', { params: { product_id: 40344 } });
      })
      // Then set the styles state
      .then((results) => {
        setStyles(results.data.results);
      })
      // Send axios request to get all the review data that is relevant for the specific product
      // Then set the reviews state
      .catch((error) => {
        console.log('An error occurred when initializing data received from server:', error);
      });
  }, []); // The second argument is an empty array, which makes it so that we only run the function once

  return (
    <div>
      <ProductOverviewContainer>
        <Gallery product={product} styles={styles} />
        <Information product={product} styles={styles} reveiws={reviews} />
      </ProductOverviewContainer>
      <ProductInformationDescription>
        Product Information
      </ProductInformationDescription>
    </div>
  );

}

export default Overview;