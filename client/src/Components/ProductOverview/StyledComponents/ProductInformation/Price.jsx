// Price component-- either a div of the original price or a div of the original price struckthrough and the sale price in red

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// The original price (not struckthrough)
const Price = styled.span`
  color: black;
`;

// The original price when there is a sale (struckthrough)
const Price_struck = styled.span`
  color: black;
  text-decoration: line-through;
`;

// The sale price
const Price_sale = styled.span`
  color: red;
  font-weight: bold;
`;

// Export the styled components
export { Price, Price_struck, Price_sale };