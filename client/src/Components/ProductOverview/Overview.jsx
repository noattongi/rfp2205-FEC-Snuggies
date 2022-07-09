import React, { useState } from 'react';
import { ProductOverviewContainer, ProductInformationDescription } from './StyledComponents/Containers.jsx';
import Gallery from './ImageGallery/Gallery.jsx';

var Overview = (props) => {


  return (
    <div>
      <ProductOverviewContainer>
        <Gallery />
      </ProductOverviewContainer>
      <ProductInformationDescription>
        Product Information
      </ProductInformationDescription>
    </div>
  );

}

export default Overview;