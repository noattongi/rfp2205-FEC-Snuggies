import styled from 'styled-components';

const RelatedContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const OutfitContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const CardContainer = styled.section`
  display: flex;
  text-align: center;
  flex-direction: column;
  border: 1px solid black;
  column-count: 3;
  column-gap: 10px;
`;
export {RelatedContainer, OutfitContainer, CardContainer}