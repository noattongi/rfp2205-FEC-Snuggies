import styled from 'styled-components';

const RRContainer = styled.div`
  display: flex;
  padding-left: 60px;
  border-style: dotted;
  justify-content: space-between;
`;

const SingleBar = styled.div`
display: flex;
justify-content: space-between;
opacity: 0.9;
text-align: center;
margin-bottom: 5px;
margin-bottom: 5px;
padding-right: 40px;
`;
const BarText = styled.span`
text-align: center;
display: flex;
padding-top: 12px;
justify-content: space-evenly;
border-style: dotted;
margin-right: 20px
text-decoration: underline;
:hover {
  cursor: pointer;
  color: blue;
};
`;

export {RRContainer, SingleBar, BarText}