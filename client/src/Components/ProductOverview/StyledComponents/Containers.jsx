// All of the styled components here are flexbox containers to organize their respective contents in certain ways

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// Container to hold the Image Gallery and Product Information (except description) component containers
const ProductOverviewContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

// Image Gallery container
const ImageGalleryContainer = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #828e82;
  border-radius: 10px;
`;

// Product Information container (does not include Product Description)
const ProductInformationContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Nanum Gothic Coding', monospace;
  background-color: #607B7D;
  min-width: 475px;
  border: solid 3px;
  border-radius: 10px;
  margin-left: 5px;
`;

// Container to hold the Star Rating shared component and Read [#] Reviews link in Product Information section
const ProductOverviewStarContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

// Container to hold all the rows of Style Thumbnails in the Product Information section
const StyleThumbnailRowContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

// Container to hold a single row of Style Thumbnails in Product Information section
const StyleThumbnailContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// Container to hold the chosen Style Thumbnail and the icon that indicates that it's the chosen one
const ChosenStyleContainer = styled.section`
  position: relative;
`;

const PriceContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// Container for the size and count buttons in Product Information section
const SizeAndCountContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

// Container for the add to cart and favorite buttons in Product Information section
const AddToCartContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

// Container to hold the Product Information description component
const ProductInformationDescription = styled.section`
  display: flex;
  flex-direction: row;
`;

// Container to hold the Product Slogan and Description
const SloganDescriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

// Export the styled components
export { ProductOverviewContainer, ImageGalleryContainer, ProductInformationContainer, ProductOverviewStarContainer, StyleThumbnailRowContainer, StyleThumbnailContainer, ChosenStyleContainer, PriceContainer, SizeAndCountContainer, AddToCartContainer, ProductInformationDescription, SloganDescriptionContainer };