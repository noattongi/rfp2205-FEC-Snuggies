import styled from 'styled-components';

const RRContainer = styled.div`
  display: flex;
  border-style: dotted;
  justify-content: space-between;
  font-family: 'Nanum Gothic Coding', monospace;
`;

const OBContainer = styled.div`
  display: inline-block;
  font-family: 'Nanum Gothic Coding', monospace;
`;
//Rating Breakdown
const SingleBar = styled.div`
display: flex;
flex-direction: row;
opacity: 0.9;
text-align: center;
font-family: 'Nanum Gothic Coding', monospace;

`;

const BarText = styled.span`
font-size: 14px;
text-align: center;
display: inline-block;
white-space: nowrap;
margin-top: 14px;
padding-right: 5px;
justify-content: space-evenly;
font-family: 'Nanum Gothic Coding', monospace;
margin-right: 20px
text-decoration: underline;
:hover {
  cursor: pointer;
  color: #E02929;
};
`;
const RBStarsNum = styled.div`
display: flex;
flex-direction: row;
opacity: 0.9;
text-align: center;
margin-bottom: 5px;
margin-bottom: 5px;
padding-right: 40px;
font-family: 'Nanum Gothic Coding', monospace;

`;

const RBRecommended = styled.div`
display: inline-block;
white-space: nowrap;
font-Size: 12px;
opacity: 0.4;
text-align: center;
margin-bottom: 5px;
margin-bottom: 5px;
font-family: 'Nanum Gothic Coding', monospace;

.center-text {
  text-align: center;
};
`;

const NumRatingTitle = styled.div`
display: flex;
font-size: 40px;
flex-direction: row;
justify-content: space-between;
opacity: 0.9;
text-align: center;
margin-bottom: 5px;
padding-bottom: 20px;
padding-right: 8px;
font-family: 'Nanum Gothic Coding', monospace;

`;

const OBStar = styled.div`
display: flex;
font-size: 15px;
flex-direction: row;
justify-content: space-between;
opacity: 0.9;
text-align: left;
margin-bottom: 5px;
padding-bottom: 20px;
padding-top: 5px;
font-family: 'Nanum Gothic Coding', monospace;

`;

//Product Breakdown
const PBContainer = styled.div`
  display: block;
  margin-top: 30px;
  font-family: 'Nanum Gothic Coding', monospace;
`;

const CharName = styled.div`
opacity: 0.9;
font-size: 14px;
padding-bottom: 8px;
font-family: 'Nanum Gothic Coding', monospace;

`;
const CharRating = styled.div`
opacity: 0.9;
font-size: 11px;
padding-bottom: 8px;
font-family: 'Nanum Gothic Coding', monospace;

`;

const CharContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;
  margin-bottom: 6px;
  font-family: 'Nanum Gothic Coding', monospace;
`;


const PBCharContainer = styled.div`

`;

export {PBCharContainer, CharContainer,CharRating, CharName, PBContainer, RRContainer, SingleBar, BarText, OBContainer, RBStarsNum, RBRecommended, NumRatingTitle, OBStar}