import React, { useState } from 'react';
import { ProductOverviewContainer, ProductInformationDescription } from './StyledComponents/Containers.jsx';

var Overview = (props) => {


  return (
    <div>
      <ProductOverviewContainer>
        Product Overview Container
      </ProductOverviewContainer>
      <ProductInformationDescription>
        Product Information
      </ProductInformationDescription>
    </div>
  );

}

export default Overview;