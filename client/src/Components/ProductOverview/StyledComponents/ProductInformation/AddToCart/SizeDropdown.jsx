// Styling for the size dropdown

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// The link labeled 'Read [#] Reviews'
const SizeDropdown = styled.select`
  background-color: #F5F5F5;
  flex-grow: 3;
  margin-right: 4px;
  font-size: 18;
  height: 60px;
  border-radius: 5px;
  border: solid 3px;
  padding-left: 14px;
  :hover {
    cursor: pointer;
    background-color: #EF8354;
  }
`;

// Export the styled components
export default SizeDropdown;