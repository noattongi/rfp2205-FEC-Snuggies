// Styling for the add to cart button and the warning text that appears above the size or quantity dropdown

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// The link labeled 'Read [#] Reviews'
const AddToCartButton = styled.button`
  font-size: 18;
  background-color: #F5F5F5;
  height: 60px;
  width: 140px;
  border-radius: 5px;
  border: solid 3px;
  :hover {
    cursor: pointer;
    background-color: #EF8354;
  }
`;

// Warning text that appears above size or quantity dropdowns
const WarningText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14;
  color: #120309;
  background-color: #EF8354;
  border: solid 3px;
  border-radius: 5px;
  width: 160px;
  height: 28px;
  align-self: center;
`;

// Export the styled components
export { AddToCartButton, WarningText };