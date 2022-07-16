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
  padding-bottom: 20px;
`;

const Summary = styled.div`
  padding-bottom: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

const ReviewBody = styled.div`
padding-bottom: 20px;
padding-bottom: 20px;
`;

const RecommendProduct = styled.div`
padding-bottom: 20px;
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
   padding-left: 7px;
  padding-right: 7px;
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
  text-decoration: underline;
  :hover {
    cursor: pointer;
    color: blue;
  };
`;
var ShrinkImg = styled.span`
  height: auto;
  max-width: 100%;
  border-style: solid;
  border-color: blue;
`;

var ImageContainer = styled.span`
  height: 200px;
  max-width: 200px;
  border-style: solid;
  border-color: green;
`;

export { TopContainer, UserandDate, Summary, RecommendProduct, ReviewBody, ReportSpan, AnswerHelpfulnessSpan, BottomInfoContainer , YesAnswerSpan, ShrinkImg, ImageContainer};

