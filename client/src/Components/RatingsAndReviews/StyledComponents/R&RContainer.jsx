import styled from 'styled-components';

const RRContainer = styled.div`
 display: flex;
 flex-direction: row;
 border: 1px solid black;
 background-color: rgb(255, 255, 255);
 width: 1360px;
 border-radius: 5px;
 box-shadow: 0px 0.4rem 1.5rem rgb(0 0 0 / 25%);
 font-family: 'Nanum Gothic Coding', monospace;
`;

const OBContainer = styled.div`
  display: inline-block;
  font-family: 'Nanum Gothic Coding', monospace;
`;
//Rating Breakdown
const SingleBar = styled.div`
padding-left: 6px;
display: flex;
flex-direction: row;
opacity: 0.9;
text-align: center;
font-family: 'Nanum Gothic Coding', monospace;

`;

const BarText = styled.span`

font-size: 14px;
font-weight:bold;
white-space: nowrap;
margin-top: 14px;
padding-right: 5px;
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
margin-top: 10px;
padding-right: 40px;
padding-left: 23px;
font-family: 'Nanum Gothic Coding', monospace;

`;

const RBRecommended = styled.div`
padding-left: 26px;
font-Size: 12px;
opacity: 0.6;
margin-bottom: 5px;
margin-bottom: 5px;
font-family: 'Nanum Gothic Coding', monospace;

`;

const NumRatingTitle = styled.div`
display: flex;
font-weight: bolder;
font-size: 40px;
flex-direction: row;
justify-content: space-between;
opacity: 0.9;
text-align: center;
margin-bottom: 5px;
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
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  font-family: 'Nanum Gothic Coding', monospace;
  padding-left: 26px;
  border:solid;
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

const FilterContainer = styled.div`
  display: flex;
  flex-direction: Column;
  height: 40px;

  font-family: 'Nanum Gothic Coding', monospace;
`;


const PBCharContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;

font-family: 'Nanum Gothic Coding', monospace;
`;

const SingleFilter = styled.div`
  display: flex;
  font-size:11px;
  padding-right: 6px;
  padding-left: 8px;
  font-family: 'Nanum Gothic Coding', monospace;
`;

const RemoveFilter = styled.div`

  text-align: right;
  display: flex;
  font-size:11px;
  padding-right: 6px;
  padding-left: 8px;
  flex-direction: row-reverse;
  font-family: 'Nanum Gothic Coding', monospace;
  :hover {
    cursor: pointer;
    color: #E02929;
  };
`;
const RatingBarText = styled.span`

font-size: 12px;
margin-top: 14px;
padding-right: 5px;
font-family: 'Nanum Gothic Coding', monospace;
margin-right: 20px
text-decoration: underline;

`;

const SingleFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;

  justify-content: start;

  font-family: 'Nanum Gothic Coding', monospace;
`;

export {RatingBarText, RemoveFilter, SingleFilterContainer, SingleFilter, FilterContainer, PBCharContainer, CharContainer,CharRating, CharName, PBContainer, RRContainer, SingleBar, BarText, OBContainer, RBStarsNum, RBRecommended, NumRatingTitle, OBStar}