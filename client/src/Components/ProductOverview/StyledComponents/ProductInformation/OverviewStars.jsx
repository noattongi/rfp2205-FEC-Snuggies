// Product Overview Star Commponents styling

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// The link labeled 'Read [#] Reviews'
const ReviewsLink = styled.span`
  display: flex;
  align-items: center;
  color: #FFFFFF;
  margin-left: 15px;
  :hover {
    cursor: pointer;
    color: #EF8354;
  }
`;

// A div around the star rating shared component
const StarDiv = styled.div`
  background-color: #3a606e;
  padding: 5px;
  width: 270px;
  height: 18px;
  border: solid 2px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

// Export the styled components
export { ReviewsLink, StarDiv };