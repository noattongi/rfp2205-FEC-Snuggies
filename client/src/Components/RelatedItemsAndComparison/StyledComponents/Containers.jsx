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
`;

const CardBox = styled.section`
  display: flex;
  text-align: center;
  flex-direction: row;
  border: 1px solid black;
  gap: 25px;
  justify-content: flex-start;
  justify-content: space-between;
`;
export {RelatedContainer, OutfitContainer, CardContainer, CardBox}