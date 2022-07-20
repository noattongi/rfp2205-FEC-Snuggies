// Product Overview Slogan, Description, Divider, and Features

// Import any relevant methods from the styled-components library
import styled from 'styled-components';

// The slogan
const Slogan = styled.span`
  font-family: 'Nanum Gothic Coding', monospace;
  font-weight: bold;
  font-size: 22px;
  padding-bottom: 6px;
`;

// The description
const Description = styled.span`
  font-family: 'Nanum Gothic Coding', monospace;
  font-size: 18px;
`;

// Divider between slogan/description and the features
const Divider = styled.hr`
  color: #120309;
  border-color: #120309;
`;

// The list of features
const FeatureList = styled.ul`
  flex-grow: 2;
  width: 320px;
`;

// The feature bullets
const Feature = styled.li`
  font-family: 'Nanum Gothic Coding', monospace;
  color: #120309;
  font-size: 18px;
`;

// Export the styled components
export { Slogan, Description, Divider, FeatureList, Feature };