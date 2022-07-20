import styled from 'styled-components';

const RRContainer = styled.div`
  display: flex;
  padding-left: 60px;
  border-style: dotted;
  justify-content: space-between;
  font-family: 'Nanum Gothic Coding', monospace;
`;

const OBContainer = styled.div`
  display: flex;
  border-style: solid;
  justify-content: space-between;
  border-color: green;
  font-family: 'Nanum Gothic Coding', monospace;
  text-align: center;
`;

const SingleBar = styled.div`
display: flex;
justify-content: space-between;
opacity: 0.9;
text-align: center;
margin-bottom: 5px;
margin-bottom: 5px;
padding-right: 40px;
font-family: 'Nanum Gothic Coding', monospace;
`;
const BarText = styled.span`
text-align: center;
display: flex;
padding-top: 12px;
justify-content: space-evenly;
border-style: dotted;
font-family: 'Nanum Gothic Coding', monospace;
margin-right: 20px
text-decoration: underline;
:hover {
  cursor: pointer;
  color: blue;
};
`;
const RBStarsNum = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
opacity: 0.9;
text-align: center;
margin-bottom: 5px;
margin-bottom: 5px;
padding-right: 40px;
font-family: 'Nanum Gothic Coding', monospace;
border-color: red;
`;

const RBRecommended = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
opacity: 0.9;
text-align: center;
margin-bottom: 5px;
margin-bottom: 5px;
padding-right: 40px;
font-family: 'Nanum Gothic Coding', monospace;
border-color: red;
`;


export {RRContainer, SingleBar, BarText, OBContainer, RBStarsNum, RBRecommended}