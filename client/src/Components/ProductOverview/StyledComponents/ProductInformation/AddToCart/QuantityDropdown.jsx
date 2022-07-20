// Styling for the quantity dropdown

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// The link labeled 'Read [#] Reviews'
const QuantityDropdown = styled.select`
  background-color: #F5F5F5;
  flex-grow: 2;
  margin-left: 4px;
  font-size: 18;
  height: 60px;
  border-radius: 5px;
  border: solid 3px;
  padding-left: 14px;
`;

// Export the styled components
export default QuantityDropdown;