// All of the styled components here are flexbox containers to organize their respective contents in certain ways

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// Container to hold the Image Gallery and Product Information (except description) component containers
const ProductOverviewContainer = styled.section`
  display: flex;
  flex-direction: row;
  background-color: lightblue;
`;

// Image Gallery container
const ImageGalleryContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

// Product Information container (does not include Product Description)
const ProductInformationContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

// Container to hold the Product Information description component
const ProductInformationDescription = styled.section`
  display: flex;
  background-color: cyan;
`;

// Export the styled components
export { ProductOverviewContainer, ImageGalleryContainer, ProductInformationContainer, ProductInformationDescription };