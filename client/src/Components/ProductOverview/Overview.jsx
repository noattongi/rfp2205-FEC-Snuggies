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
    // Send axios request to get all products? or maybe just the specific one
    // Then set the products state
    // Send axios request to get all styles
    // Then set the styles state
    // Send axios request to get all the review data that is relevant for the specific product
    // Then set the reviews state
  });

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