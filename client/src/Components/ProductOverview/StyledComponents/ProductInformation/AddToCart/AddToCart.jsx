// Styling for the add to cart button

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

// Export the styled components
export default AddToCartButton;