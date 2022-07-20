// Price component-- either a span of the original price or a span of the original price struckthrough and the sale price in red

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// The original price (not struckthrough)
const Price = styled.span`
  color: #120309;
  font-size: 24;
  margin-bottom: 12px;
`;

// The original price when there is a sale (struckthrough)
const Price_struck = styled.span`
  color: #120309;
  text-decoration: line-through;
  font-size: 24;
  margin-bottom: 12px;
`;

// The sale price
const Price_sale = styled.span`
  color: red;
  font-size: 24;
  font-weight: bold;
  margin-bottom: 12px;
`;

// Export the styled components
export { Price, Price_struck, Price_sale };