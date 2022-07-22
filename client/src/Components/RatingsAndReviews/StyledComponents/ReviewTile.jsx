import styled from 'styled-components';

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  `;

const UserandDate = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: grey
  opacity: 0.7;
  padding-bottom: 20px;
  padding-right: 20px;
  opacity: 0.9;
  font-family: 'Cormorant Garamond', serif;
`;



const Summary = styled.div`
  padding-bottom: 20px;
  padding-bottom: 20px;
  font-weight: bolder;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`;
//might need to add another div for reviewBody
const ReviewBody = styled.div`
padding-bottom: 20px;
padding-bottom: 20px;
width: 90%;
word-wrap: break-word;
font-size: 14px;
font-family: 'Nanum Gothic Coding', monospace;
`;

const RecommendProduct = styled.div`
padding-bottom: 20px;
`

var BottomInfoContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 40%;
font-size: 12px;
`;

var AnswerHelpfulnessSpan = styled.span`
padding-bottom:10px;
`;


var ReportSpan = styled.span`
  text-decoration: underline;
  :hover {
    cursor: pointer;
    color: blue;
  };
  padding-left: 7px;
  padding-right: 1px;
`;

var HelpfulAnswerSpan = styled.div`
  display: flex;
`;

var YesAnswerSpan = styled.span`
  margin-left:2px;
  text-decoration: underline;
  :hover {
    cursor: pointer;
    color: blue;
  };
`;
var ShrinkImg = styled.img`
width: 75px;
height: 75px;
margin: 10px;
border-radius: 12px;
object-fit: cover;
  z-index: 12;

`;
var ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;


`;

const RT_StarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  `;
  const SeeMore = styled.div`
  :hover {
    cursor: pointer;
    color: #E02929;
  };
  `;

export { SeeMore, RT_StarContainer, TopContainer, UserandDate, Summary, RecommendProduct, ReviewBody, ReportSpan, AnswerHelpfulnessSpan, BottomInfoContainer , YesAnswerSpan, ImageContainer, ShrinkImg};

